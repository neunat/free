_DEFAULT_FLOATFMT = "g"
_DEFAULT_ALIGN = "default"
_DEFAULT_MISSINGVAL = ""

def _normalize_tabular_data(tabular_data, headers, showindex="default"):
    try:
        bool(headers)
        is_headers2bool_broken = False  # noqa
    except ValueError:  # numpy.ndarray, pandas.core.index.Index, ...
        is_headers2bool_broken = True  # noqa
        headers = list(headers)

    index = None
    if hasattr(tabular_data, "keys") and hasattr(tabular_data, "values"):
        # dict-like and pandas.DataFrame?
        if hasattr(tabular_data.values, "__call__"):
            # likely a conventional dict
            keys = tabular_data.keys()
            rows = list(
                izip_longest(*tabular_data.values())
            )  # columns have to be transposed
        elif hasattr(tabular_data, "index"):
            # values is a property, has .index => it's likely a pandas.DataFrame (pandas 0.11.0)
            keys = list(tabular_data)
            if (
                showindex in ["default", "always", True]
                and tabular_data.index.name is not None
            ):
                if isinstance(tabular_data.index.name, list):
                    keys[:0] = tabular_data.index.name
                else:
                    keys[:0] = [tabular_data.index.name]
            vals = tabular_data.values  # values matrix doesn't need to be transposed
            # for DataFrames add an index per default
            index = list(tabular_data.index)
            rows = [list(row) for row in vals]
        else:
            raise ValueError("tabular data doesn't appear to be a dict or a DataFrame")

        if headers == "keys":
            headers = list(map(_text_type, keys))  # headers should be strings

    else:  # it's a usual an iterable of iterables, or a NumPy array
        rows = list(tabular_data)

        if headers == "keys" and not rows:
            # an empty table (issue #81)
            headers = []
        elif (
            headers == "keys"
            and hasattr(tabular_data, "dtype")
            and getattr(tabular_data.dtype, "names")
        ):
            # numpy record array
            headers = tabular_data.dtype.names
        elif (
            headers == "keys"
            and len(rows) > 0
            and isinstance(rows[0], tuple)
            and hasattr(rows[0], "_fields")
        ):
            # namedtuple
            headers = list(map(_text_type, rows[0]._fields))
        elif len(rows) > 0 and hasattr(rows[0], "keys") and hasattr(rows[0], "values"):
            # dict-like object
            uniq_keys = set()  # implements hashed lookup
            keys = []  # storage for set
            if headers == "firstrow":
                firstdict = rows[0] if len(rows) > 0 else {}
                keys.extend(firstdict.keys())
                uniq_keys.update(keys)
                rows = rows[1:]
            for row in rows:
                for k in row.keys():
                    # Save unique items in input order
                    if k not in uniq_keys:
                        keys.append(k)
                        uniq_keys.add(k)
            if headers == "keys":
                headers = keys
            elif isinstance(headers, dict):
                # a dict of headers for a list of dicts
                headers = [headers.get(k, k) for k in keys]
                headers = list(map(_text_type, headers))
            elif headers == "firstrow":
                if len(rows) > 0:
                    headers = [firstdict.get(k, k) for k in keys]
                    headers = list(map(_text_type, headers))
                else:
                    headers = []
            elif headers:
                raise ValueError(
                    "headers for a list of dicts is not a dict or a keyword"
                )
            rows = [[row.get(k) for k in keys] for row in rows]

        elif (
            headers == "keys"
            and hasattr(tabular_data, "description")
            and hasattr(tabular_data, "fetchone")
            and hasattr(tabular_data, "rowcount")
        ):
            # Python Database API cursor object (PEP 0249)
            # print tabulate(cursor, headers='keys')
            headers = [column[0] for column in tabular_data.description]

        elif headers == "keys" and len(rows) > 0:
            # keys are column indices
            headers = list(map(_text_type, range(len(rows[0]))))

    # take headers from the first row if necessary
    if headers == "firstrow" and len(rows) > 0:
        if index is not None:
            headers = [index[0]] + list(rows[0])
            index = index[1:]
        else:
            headers = rows[0]
        headers = list(map(_text_type, headers))  # headers should be strings
        rows = rows[1:]

    headers = list(map(_text_type, headers))
    rows = list(map(list, rows))

    # add or remove an index column
    showindex_is_a_str = type(showindex) in [_text_type, _binary_type]
    if showindex == "default" and index is not None:
        rows = _prepend_row_index(rows, index)
    elif isinstance(showindex, Iterable) and not showindex_is_a_str:
        rows = _prepend_row_index(rows, list(showindex))
    elif showindex == "always" or (_bool(showindex) and not showindex_is_a_str):
        if index is None:
            index = list(range(len(rows)))
        rows = _prepend_row_index(rows, index)
    elif showindex == "never" or (not _bool(showindex) and not showindex_is_a_str):
        pass

    # pad with empty headers for initial columns if necessary
    if headers and len(rows) > 0:
        nhs = len(headers)
        ncols = len(rows[0])
        if nhs < ncols:
            headers = [""] * (ncols - nhs) + headers

    return rows, headers

def tabulate(
    tabular_data,
    headers=(),
    tablefmt="simple",
    floatfmt=_DEFAULT_FLOATFMT,
    numalign=_DEFAULT_ALIGN,
    stralign=_DEFAULT_ALIGN,
    missingval=_DEFAULT_MISSINGVAL,
    showindex="default",
    disable_numparse=False,
    colalign=None,
    maxcolwidths=None,
):
  

    if tabular_data is None:
        tabular_data = []
    list_of_lists, headers = _normalize_tabular_data(
        tabular_data, headers, showindex=showindex
    )

    if maxcolwidths is not None:
        num_cols = len(list_of_lists[0])
        if isinstance(maxcolwidths, int):  # Expand scalar for all columns
            maxcolwidths = _expand_iterable(maxcolwidths, num_cols, maxcolwidths)
        else:  # Ignore col width for any 'trailing' columns
            maxcolwidths = _expand_iterable(maxcolwidths, num_cols, None)

        numparses = _expand_numparse(disable_numparse, num_cols)
        list_of_lists = _wrap_text_to_colwidths(
            list_of_lists, maxcolwidths, numparses=numparses
        )

    # empty values in the first column of RST tables should be escaped (issue #82)
    # "" should be escaped as "\\ " or ".."
    if tablefmt == "rst":
        list_of_lists, headers = _rst_escape_first_column(list_of_lists, headers)

    # PrettyTable formatting does not use any extra padding.
    # Numbers are not parsed and are treated the same as strings for alignment.
    # Check if pretty is the format being used and override the defaults so it
    # does not impact other formats.
    min_padding = MIN_PADDING
    if tablefmt == "pretty":
        min_padding = 0
        disable_numparse = True
        numalign = "center" if numalign == _DEFAULT_ALIGN else numalign
        stralign = "center" if stralign == _DEFAULT_ALIGN else stralign
    else:
        numalign = "decimal" if numalign == _DEFAULT_ALIGN else numalign
        stralign = "left" if stralign == _DEFAULT_ALIGN else stralign

    # optimization: look for ANSI control codes once,
    # enable smart width functions only if a control code is found
    plain_text = "\t".join(
        ["\t".join(map(_text_type, headers))]
        + ["\t".join(map(_text_type, row)) for row in list_of_lists]
    )

    has_invisible = re.search(_invisible_codes, plain_text)
    if not has_invisible:
        has_invisible = re.search(_invisible_codes_link, plain_text)
    enable_widechars = wcwidth is not None and WIDE_CHARS_MODE
    if (
        not isinstance(tablefmt, TableFormat)
        and tablefmt in multiline_formats
        and _is_multiline(plain_text)
    ):
        tablefmt = multiline_formats.get(tablefmt, tablefmt)
        is_multiline = True
    else:
        is_multiline = False
    width_fn = _choose_width_fn(has_invisible, enable_widechars, is_multiline)

    # format rows and columns, convert numeric values to strings
    cols = list(izip_longest(*list_of_lists))
    numparses = _expand_numparse(disable_numparse, len(cols))
    coltypes = [_column_type(col, numparse=np) for col, np in zip(cols, numparses)]
    if isinstance(floatfmt, basestring):  # old version
        float_formats = len(cols) * [
            floatfmt
        ]  # just duplicate the string to use in each column
    else:  # if floatfmt is list, tuple etc we have one per column
        float_formats = list(floatfmt)
        if len(float_formats) < len(cols):
            float_formats.extend((len(cols) - len(float_formats)) * [_DEFAULT_FLOATFMT])
    if isinstance(missingval, basestring):
        missing_vals = len(cols) * [missingval]
    else:
        missing_vals = list(missingval)
        if len(missing_vals) < len(cols):
            missing_vals.extend((len(cols) - len(missing_vals)) * [_DEFAULT_MISSINGVAL])
    cols = [
        [_format(v, ct, fl_fmt, miss_v, has_invisible) for v in c]
        for c, ct, fl_fmt, miss_v in zip(cols, coltypes, float_formats, missing_vals)
    ]

    # align columns
    aligns = [numalign if ct in [int, float] else stralign for ct in coltypes]
    if colalign is not None:
        assert isinstance(colalign, Iterable)
        for idx, align in enumerate(colalign):
            aligns[idx] = align
    minwidths = (
        [width_fn(h) + min_padding for h in headers] if headers else [0] * len(cols)
    )
    cols = [
        _align_column(c, a, minw, has_invisible, enable_widechars, is_multiline)
        for c, a, minw in zip(cols, aligns, minwidths)
    ]

    if headers:
        # align headers and add headers
        t_cols = cols or [[""]] * len(headers)
        t_aligns = aligns or [stralign] * len(headers)
        minwidths = [
            max(minw, max(width_fn(cl) for cl in c))
            for minw, c in zip(minwidths, t_cols)
        ]
        headers = [
            _align_header(h, a, minw, width_fn(h), is_multiline, width_fn)
            for h, a, minw in zip(headers, t_aligns, minwidths)
        ]
        rows = list(zip(*cols))
    else:
        minwidths = [max(width_fn(cl) for cl in c) for c in cols]
        rows = list(zip(*cols))

    if not isinstance(tablefmt, TableFormat):
        tablefmt = _table_formats.get(tablefmt, _table_formats["simple"])

    return _format_table(tablefmt, headers, rows, minwidths, aligns, is_multiline)