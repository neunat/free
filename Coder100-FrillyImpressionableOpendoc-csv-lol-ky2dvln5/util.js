function parse_csv(str) {
    const lines = str.split("\n");
    const cols = {};

    // ignore the title
    for (const line of lines.slice(1)) {
        const cells = line.split(",");
        const name = cells[0];
        const rest = cells.slice(1);
        cols[name] = rest.slice(0, -1).map(x => Number(x)).filter(x => x);
    }

    return cols;
}

function get_row(csv, user) {
    return csv[user];
}

function get_col(csv, col) {
    const out = [];

    for (const key in csv)
        if (csv[key][col])
            out.push(csv[key][col]);

    return out;
}

function asc(arr) {
    return [...arr].sort((a, b) => a - b);
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function mean(arr) {
    return sum(arr) / arr.length;
}

// sample standard deviation
function std(arr) {
    const mu = mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(sum(diffArr) / (arr.length - 1));
}

function quartile(arr, q) {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
}