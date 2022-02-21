var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS((exports, module) => {
  var hasElementType = typeof Element !== "undefined";
  var hasMap = typeof Map === "function";
  var hasSet = typeof Set === "function";
  var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
  function equal(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      if (a.constructor !== b.constructor)
        return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!equal(a[i], b[i]))
            return false;
        return true;
      }
      var it;
      if (hasMap && a instanceof Map && b instanceof Map) {
        if (a.size !== b.size)
          return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0]))
            return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0])))
            return false;
        return true;
      }
      if (hasSet && a instanceof Set && b instanceof Set) {
        if (a.size !== b.size)
          return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0]))
            return false;
        return true;
      }
      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (a[i] !== b[i])
            return false;
        return true;
      }
      if (a.constructor === RegExp)
        return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf)
        return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString)
        return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      if (hasElementType && a instanceof Element)
        return false;
      for (i = length; i-- !== 0; ) {
        if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
          continue;
        }
        if (!equal(a[keys[i]], b[keys[i]]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
  module.exports = function isEqual2(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if ((error.message || "").match(/stack|recursion/i)) {
        console.warn("react-fast-compare cannot handle circular refs");
        return false;
      }
      throw error;
    }
  };
});

// node_modules/downshift/node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS((exports) => {
  /** @license React v16.8.6
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
      }
      var lowPriorityWarning = function() {
      };
      {
        var printWarning = function(format2) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var argIndex = 0;
          var message = "Warning: " + format2.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.warn(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
        lowPriorityWarning = function(condition, format2) {
          if (format2 === void 0) {
            throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(void 0, [format2].concat(args));
          }
        };
      }
      var lowPriorityWarning$1 = lowPriorityWarning;
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment2 = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarning$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element2;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment2;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement2;
      exports.isForwardRef = isForwardRef2;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});

// node_modules/downshift/node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    module.exports = null;
  } else {
    module.exports = require_react_is_development();
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS((exports, module) => {
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  "use strict";
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
        return test2[n2];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
});

// node_modules/downshift/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS((exports, module) => {
  "use strict";
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  module.exports = ReactPropTypesSecret;
});

// node_modules/downshift/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS((exports, module) => {
  "use strict";
  var printWarning = function() {
  };
  if (true) {
    ReactPropTypesSecret = require_ReactPropTypesSecret();
    loggedTypeFailures = {};
    has = Function.call.bind(Object.prototype.hasOwnProperty);
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  var ReactPropTypesSecret;
  var loggedTypeFailures;
  var has;
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (true) {
      loggedTypeFailures = {};
    }
  };
  module.exports = checkPropTypes;
});

// node_modules/downshift/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS((exports, module) => {
  "use strict";
  var ReactIs = require_react_is();
  var assign = require_object_assign();
  var ReactPropTypesSecret = require_ReactPropTypesSecret();
  var checkPropTypes = require_checkPropTypes();
  var has = Function.call.bind(Object.prototype.hasOwnProperty);
  var printWarning = function() {
  };
  if (true) {
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  module.exports = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message) {
      this.message = message;
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
            err.name = "Invariant Violation";
            throw err;
          } else if (typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
              printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var preciseType = getPreciseType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (true) {
          if (arguments.length > 1) {
            printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
});

// node_modules/downshift/node_modules/prop-types/index.js
var require_prop_types = __commonJS((exports, module) => {
  if (true) {
    ReactIs = require_react_is();
    throwOnDirectAccess = true;
    module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  } else {
    module.exports = null();
  }
  var ReactIs;
  var throwOnDirectAccess;
});

// node_modules/downshift/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS((exports) => {
  /** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  "use strict";
  if (true) {
    (function() {
      "use strict";
      var REACT_ELEMENT_TYPE = 60103;
      var REACT_PORTAL_TYPE = 60106;
      var REACT_FRAGMENT_TYPE = 60107;
      var REACT_STRICT_MODE_TYPE = 60108;
      var REACT_PROFILER_TYPE = 60114;
      var REACT_PROVIDER_TYPE = 60109;
      var REACT_CONTEXT_TYPE = 60110;
      var REACT_FORWARD_REF_TYPE = 60112;
      var REACT_SUSPENSE_TYPE = 60113;
      var REACT_SUSPENSE_LIST_TYPE = 60120;
      var REACT_MEMO_TYPE = 60115;
      var REACT_LAZY_TYPE = 60116;
      var REACT_BLOCK_TYPE = 60121;
      var REACT_SERVER_BLOCK_TYPE = 60122;
      var REACT_FUNDAMENTAL_TYPE = 60117;
      var REACT_SCOPE_TYPE = 60119;
      var REACT_OPAQUE_ID_TYPE = 60128;
      var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
      var REACT_OFFSCREEN_TYPE = 60130;
      var REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var enableScopeAPI = false;
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }
        return false;
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment2 = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef2(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element2;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment2;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement2;
      exports.isForwardRef = isForwardRef2;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

// node_modules/downshift/node_modules/react-is/index.js
var require_react_is2 = __commonJS((exports, module) => {
  "use strict";
  if (false) {
    module.exports = null;
  } else {
    module.exports = require_react_is_development2();
  }
});

// node_modules/downshift/node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var __extends2;
  var __assign2;
  var __rest2;
  var __decorate2;
  var __param2;
  var __metadata2;
  var __awaiter2;
  var __generator2;
  var __exportStar3;
  var __values2;
  var __read2;
  var __spread2;
  var __spreadArrays2;
  var __spreadArray2;
  var __await2;
  var __asyncGenerator2;
  var __asyncDelegator2;
  var __asyncValues2;
  var __makeTemplateObject2;
  var __importStar2;
  var __importDefault2;
  var __classPrivateFieldGet2;
  var __classPrivateFieldSet2;
  var __createBinding2;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof module.exports === "object") {
      factory(createExporter(root, createExporter(module.exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", {value: true});
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends2 = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    __assign2 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t2[p] = s[p];
      }
      return t2;
    };
    __rest2 = function(s, e2) {
      var t2 = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
          t2[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t2[p[i]] = s[p[i]];
        }
      return t2;
    };
    __decorate2 = function(decorators, target, key, desc) {
      var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r2 = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
      return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
    };
    __param2 = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __metadata2 = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter2 = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator2 = function(thisArg, body) {
      var _ = {label: 0, sent: function() {
        if (t2[0] & 1)
          throw t2[1];
        return t2[1];
      }, trys: [], ops: []}, f, y, t2, g;
      return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n2) {
        return function(v) {
          return step([n2, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
              return t2;
            if (y = 0, t2)
              op = [op[0] & 2, t2.value];
            switch (op[0]) {
              case 0:
              case 1:
                t2 = op;
                break;
              case 4:
                _.label++;
                return {value: op[1], done: false};
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t2[1]) {
                  _.label = t2[1];
                  t2 = op;
                  break;
                }
                if (t2 && _.label < t2[2]) {
                  _.label = t2[2];
                  _.ops.push(op);
                  break;
                }
                if (t2[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e2) {
            op = [6, e2];
            y = 0;
          } finally {
            f = t2 = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
      }
    };
    __exportStar3 = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding2(o, m, p);
    };
    __createBinding2 = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __values2 = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {value: o && o[i++], done: !o};
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read2 = function(o, n2) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r2, ar = [], e2;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
          ar.push(r2.value);
      } catch (error) {
        e2 = {error};
      } finally {
        try {
          if (r2 && !r2.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e2)
            throw e2.error;
        }
      }
      return ar;
    };
    __spread2 = function() {
      for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read2(arguments[i]));
      return ar;
    };
    __spreadArrays2 = function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
      for (var r2 = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r2[k] = a[j];
      return r2;
    };
    __spreadArray2 = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await2 = function(v) {
      return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
    };
    __asyncGenerator2 = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n2) {
        if (g[n2])
          i[n2] = function(v) {
            return new Promise(function(a, b) {
              q.push([n2, v, a, b]) > 1 || resume(n2, v);
            });
          };
      }
      function resume(n2, v) {
        try {
          step(g[n2](v));
        } catch (e2) {
          settle(q[0][3], e2);
        }
      }
      function step(r2) {
        r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q[0][2], r2);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator2 = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e2) {
        throw e2;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n2, f) {
        i[n2] = o[n2] ? function(v) {
          return (p = !p) ? {value: __await2(o[n2](v)), done: n2 === "return"} : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues2 = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n2) {
        i[n2] = o[n2] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n2](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({value: v2, done: d});
        }, reject);
      }
    };
    __makeTemplateObject2 = function(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {value: raw});
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    };
    __importStar2 = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault2 = function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    __classPrivateFieldGet2 = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    exporter("__extends", __extends2);
    exporter("__assign", __assign2);
    exporter("__rest", __rest2);
    exporter("__decorate", __decorate2);
    exporter("__param", __param2);
    exporter("__metadata", __metadata2);
    exporter("__awaiter", __awaiter2);
    exporter("__generator", __generator2);
    exporter("__exportStar", __exportStar3);
    exporter("__createBinding", __createBinding2);
    exporter("__values", __values2);
    exporter("__read", __read2);
    exporter("__spread", __spread2);
    exporter("__spreadArrays", __spreadArrays2);
    exporter("__spreadArray", __spreadArray2);
    exporter("__await", __await2);
    exporter("__asyncGenerator", __asyncGenerator2);
    exporter("__asyncDelegator", __asyncDelegator2);
    exporter("__asyncValues", __asyncValues2);
    exporter("__makeTemplateObject", __makeTemplateObject2);
    exporter("__importStar", __importStar2);
    exporter("__importDefault", __importDefault2);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
  });
});

// app/rui/standalone/inject.tsx
import {createElement} from "@emotion/react";
import {Fragment} from "react";

// app/ui/theme.ts
var ROOT_THEME_CLASS = "replit-ui-theme-root";

// app/rui/standalone/index.tsx
import {Global} from "@emotion/react";

// app/rui/tokens.ts
import {css} from "@emotion/react";
var baseTokens = {
  borderRadius1: ["--border-radius-1", "1px"],
  borderRadius2: ["--border-radius-2", "2px"],
  borderRadius4: ["--border-radius-4", "4px"],
  borderRadius8: ["--border-radius-8", "8px"],
  borderRadius16: ["--border-radius-16", "16px"],
  borderRadiusDefault: ["--border-radius-default", "var(--border-radius-8)"],
  borderRadiusRound: ["--border-radius-round", "1028px"],
  space2: ["--space-2", "2px"],
  space4: ["--space-4", "4px"],
  space8: ["--space-8", "8px"],
  space12: ["--space-12", "12px"],
  space16: ["--space-16", "16px"],
  space24: ["--space-24", "24px"],
  space32: ["--space-32", "32px"],
  space48: ["--space-48", "48px"],
  space64: ["--space-64", "64px"],
  space128: ["--space-128", "128px"],
  space256: ["--space-256", "256px"],
  spaceDefault: ["--space-default", "var(--space-8)"],
  shadow1: ["--shadow-1", "0px 4px 8px 0px rgba(2, 2, 3, 0.16)"],
  shadow2: ["--shadow-2", "0px 8px 16px 0px rgba(2, 2, 3, 0.32)"],
  shadow3: ["--shadow-3", "0px 16px 32px 0px rgba(2, 2, 3, 0.48)"],
  shadowDefault: ["--shadow-default", "var(--shadow-1)"],
  fontFamilyDefault: ["--font-family-default", "'IBM Plex Sans', sans-serif"],
  fontFamilyCode: ["--font-family-code", "'IBM Plex Mono', monospace"],
  fontSizeSmall: ["--font-size-small", "12px"],
  lineHeightSmall: ["--line-height-small", "1.5"],
  fontSizeDefault: ["--font-size-default", "14px"],
  lineHeightDefault: ["--line-height-default", "1.6"],
  fontSizeSubheadDefault: ["--font-size-subhead-default", "16px"],
  lineHeightSubheadDefault: ["--line-height-subhead-default", "1.375"],
  fontSizeSubheadBig: ["--font-size-subhead-big", "20px"],
  lineHeightSubheadBig: ["--line-height-subhead-big", "1.2"],
  fontSizeHeaderDefault: ["--font-size-header-default", "24px"],
  lineHeightHeaderDefault: ["--line-height-header-default", "1"],
  fontSizeHeaderBig: ["--font-size-header-big", "32px"],
  lineHeightHeaderBig: ["--line-height-header-big", "1"],
  fontWeightRegular: ["--font-weight-regular", "400"],
  fontWeightMedium: ["--font-weight-medium", "500"],
  fontWeightBold: ["--font-weight-bold", "600"],
  borderWidthDefault: ["--border-width-default", "1px"],
  singleLine: ["--single-line", "1"],
  black: ["--black", "#0E1525"],
  white: ["--white", "#FCFCFC"]
};
var themeTokens = {
  backgroundRoot: ["--background-root", "#0E1525", "#EBECED"],
  backgroundDefault: ["--background-default", "#1C2333", "#FCFCFC"],
  backgroundHigher: ["--background-higher", "#2B3245", "#F0F1F2"],
  backgroundHighest: ["--background-highest", "#3C445C", "#E4E5E6"],
  backgroundOverlay: ["--background-overlay", "#0e1525A0", "#F0F1F2A0"],
  foregroundDefault: ["--foreground-default", "#F5F9FC", "#07080A"],
  foregroundDimmer: ["--foreground-dimmer", "#C2C8CC", "#3D4047"],
  foregroundDimmest: ["--foreground-dimmest", "#9DA2A6", "#5C5F66"],
  outlineDefault: ["--outline-default", "#70788C", "#AFB1B3"],
  outlineDefault25: ["--outline-default-25", "#70788C40", "#AFB1B340"],
  outlineDimmer: ["--outline-dimmer", "#5F677A", "#C0C3C4"],
  outlineDimmest: ["--outline-dimmest", "#4E5569", "#D2D4D6"],
  accentPrimaryStrongest: ["--accent-primary-strongest", "#C7E9FF", "#004D80"],
  accentPrimaryStronger: ["--accent-primary-stronger", "#85CEFF", "#0072BD"],
  accentPrimaryDefault: ["--accent-primary-default", "#0099FF", "#0099FF"],
  accentPrimaryDimmer: ["--accent-primary-dimmer", "#0072BD", "#85CEFF"],
  accentPrimaryDimmest: ["--accent-primary-dimmest", "#004D80", "#C7E9FF"],
  accentPositiveStrongest: ["--accent-positive-strongest", "#BFFFCA", "#0C4516"],
  accentPositiveStronger: ["--accent-positive-stronger", "#96FFA8", "#0F7A21"],
  accentPositiveDefault: ["--accent-positive-default", "#2FC448", "#2FC448"],
  accentPositiveDimmer: ["--accent-positive-dimmer", "#0F7A21", "#76DB87"],
  accentPositiveDimmest: ["--accent-positive-dimmest", "#0C4516", "#A8F0B4"],
  accentNegativeStrongest: ["--accent-negative-strongest", "#FFBFBF", "#520F0F"],
  accentNegativeStronger: ["--accent-negative-stronger", "#FF8585", "#8A0A0A"],
  accentNegativeDefault: ["--accent-negative-default", "#F23F3F", "#F23F3F"],
  accentNegativeDimmer: ["--accent-negative-dimmer", "#8F2828", "#FF8585"],
  accentNegativeDimmest: ["--accent-negative-dimmest", "#573A3A", "#FFC7C7"]
};
var secondaryTokens = {
  redDimmest: ["--accent-red-dimmest", "#6E0000", "#FFC7C7"],
  redDimmer: ["--accent-red-dimmer", "#A60000", "#FF8585"],
  redDefault: ["--accent-red-default", "#E50000", "#E50000"],
  redStronger: ["--accent-red-stronger", "#FF8585", "#A60000"],
  redStrongest: ["--accent-red-strongest", "#FFC7C7", "#6E0000"],
  orangeDimmest: ["--accent-orange-dimmest", "#753B00", "#FFD9B2"],
  orangeDimmer: ["--accent-orange-dimmer", "#9C4E00", "#FFC285"],
  orangeDefault: ["--accent-orange-default", "#D96D00", "#D96D00"],
  orangeStronger: ["--accent-orange-stronger", "#FFC285", "#9C4E00"],
  orangeStrongest: ["--accent-orange-strongest", "#FFD9B2", "#753B00"],
  yellowDimmest: ["--accent-yellow-dimmest", "#756200", "#FFF2B2"],
  yellowDimmer: ["--accent-yellow-dimmer", "#A68A00", "#FFEA7F"],
  yellowDefault: ["--accent-yellow-default", "#CCAD14", "#CCAD14"],
  yellowStronger: ["--accent-yellow-stronger", "#FFEA7F", "#A68A00"],
  yellowStrongest: ["--accent-yellow-strongest", "#FFF2B2", "#756200"],
  greenDimmest: ["--accent-green-dimmest", "#00540E", "#B2FFBF"],
  greenDimmer: ["--accent-green-dimmer", "#007814", "#66FF7F"],
  greenDefault: ["--accent-green-default", "#36B24A", "#36B24A"],
  greenStronger: ["--accent-green-stronger", "#66FF7F", "#007814"],
  greenStrongest: ["--accent-green-strongest", "#B2FFBF", "#00540E"],
  tealDimmest: ["--accent-teal-dimmest", "#005B6E", "#BFF4FF"],
  tealDimmer: ["--accent-teal-dimmer", "#007F99", "#7FEAFF"],
  tealDefault: ["--accent-teal-default", "#3DB4CC", "#3DB4CC"],
  tealStronger: ["--accent-teal-stronger", "#7FEAFF", "#007F99"],
  tealStrongest: ["--accent-teal-strongest", "#BFF4FF", "#005B6E"],
  blueDimmest: ["--accent-blue-dimmest", "#004D99", "#B2D9FF"],
  blueDimmer: ["--accent-blue-dimmer", "#005EBD", "#7FBFFF"],
  blueDefault: ["--accent-blue-default", "#2E8AE5", "#2E8AE5"],
  blueStronger: ["--accent-blue-stronger", "#7FBFFF", "#005EBD"],
  blueStrongest: ["--accent-blue-strongest", "#B2D9FF", "#004D99"],
  blurpleDimmest: ["--accent-blurple-dimmest", "#422F9E", "#CEC4FF"],
  blurpleDimmer: ["--accent-blurple-dimmer", "#563CD6", "#A18FFF"],
  blurpleDefault: ["--accent-blurple-default", "#7559FF", "#7559FF"],
  blurpleStronger: ["--accent-blurple-stronger", "#A18FFF", "#563CD6"],
  blurpleStrongest: ["--accent-blurple-strongest", "#CEC4FF", "#422F9E"],
  purpleDimmest: ["--accent-purple-dimmest", "#6C32A6", "#E2C4FF"],
  purpleDimmer: ["--accent-purple-dimmer", "#9140E3", "#C78FFF"],
  purpleDefault: ["--accent-purple-default", "#A64DFF", "#A64DFF"],
  purpleStronger: ["--accent-purple-stronger", "#C78FFF", "#9140E3"],
  purpleStrongest: ["--accent-purple-strongest", "#E2C4FF", "#6C32A6"],
  magentaDimmest: ["--accent-magenta-dimmest", "#802680", "#FFC2FF"],
  magentaDimmer: ["--accent-magenta-dimmer", "#B031B0", "#FF8AFF"],
  magentaDefault: ["--accent-magenta-default", "#E55AE5", "#E55AE5"],
  magentaStronger: ["--accent-magenta-stronger", "#FF8AFF", "#B0319B"],
  magentaStrongest: ["--accent-magenta-strongest", "#FFC2FF", "#802680"],
  pinkDimmest: ["--accent-pink-dimmest", "#802662", "#FFC2EB"],
  pinkDimmer: ["--accent-pink-dimmer", "#B03186", "#FF8AD8"],
  pinkDefault: ["--accent-pink-default", "#E545B0", "#E545B0"],
  pinkStronger: ["--accent-pink-stronger", "#FF8AD8", "#B03186"],
  pinkStrongest: ["--accent-pink-strongest", "#FFC2EB", "#802662"],
  greyDimmest: ["--accent-grey-dimmest", "#595959", "#BFBFBF"],
  greyDimmer: ["--accent-grey-dimmer", "#666666", "#999999"],
  greyDefault: ["--accent-grey-default", "#808080", "#808080"],
  greyStronger: ["--accent-grey-stronger", "#999999", "#666666"],
  greyStrongest: ["--accent-grey-strongest", "#BFBFBF", "#595959"]
};
var allTokens = {
  ...baseTokens,
  ...themeTokens,
  ...secondaryTokens
};
var vars = mapObject(allTokens, (key, [cssVar]) => [key, `var(${cssVar})`]);
var globalStyles = {
  [`.${ROOT_THEME_CLASS}, :root`]: mapObject(baseTokens, (_key, [cssVar, value]) => [cssVar, value]),
  [`.${ROOT_THEME_CLASS}.dark`]: mapObject({...themeTokens, ...secondaryTokens}, (_key, [cssVar, dark, _light]) => [cssVar, dark]),
  [`.${ROOT_THEME_CLASS}.light`]: mapObject({...themeTokens, ...secondaryTokens}, (_key, [cssVar, _dark, light]) => [cssVar, light])
};
function mapObject(obj, fn2) {
  const obj2 = {};
  for (const k1 in obj) {
    const result = fn2(k1, obj[k1]);
    if (Array.isArray(result)) {
      obj2[result[0]] = result[1];
    } else {
      for (const [k2, v2] of result) {
        obj2[k2] = v2;
      }
    }
  }
  return obj2;
}
var toSpace = (space) => `var(--space-${space})`;
var toBorderRadius = (radius) => radius === "full" ? "50%" : `var(--border-radius-${radius})`;
var toShadow = (shadow) => `var(--shadow-${shadow})`;
var rcss = {
  p: (space) => css({padding: toSpace(space)}),
  px: (space) => css({paddingLeft: toSpace(space), paddingRight: toSpace(space)}),
  py: (space) => css({paddingTop: toSpace(space), paddingBottom: toSpace(space)}),
  pt: (space) => css({paddingTop: toSpace(space)}),
  pb: (space) => css({paddingBottom: toSpace(space)}),
  pl: (space) => css({paddingLeft: toSpace(space)}),
  pr: (space) => css({paddingRight: toSpace(space)}),
  shadow: (shadow) => css({boxShadow: toShadow(shadow)}),
  m: (space) => css({margin: toSpace(space)}),
  mx: (space) => css({marginLeft: toSpace(space), marginRight: toSpace(space)}),
  my: (space) => css({marginTop: toSpace(space), marginBottom: toSpace(space)}),
  mt: (space) => css({marginTop: toSpace(space)}),
  mb: (space) => css({marginBottom: toSpace(space)}),
  ml: (space) => css({marginLeft: toSpace(space)}),
  mr: (space) => css({marginRight: toSpace(space)}),
  position: {
    static: () => css({position: "static"}),
    relative: () => css({position: "relative"}),
    absolute: () => css({position: "absolute"}),
    fixed: () => css({position: "fixed"}),
    sticky: () => css({position: "sticky"})
  },
  flex: {
    row: css({flexDirection: "row"}),
    column: css({flexDirection: "column"}),
    rowReverse: css({flexDirection: "row-reverse"}),
    columnReverse: css({flexDirection: "column-reverse"}),
    grow: (flexGrow) => css({flexGrow}),
    growAndShrink: (flex) => css({flexGrow: flex, flexShrink: flex}),
    wrap: css({flexWrap: "wrap"}),
    wrapReverse: css({flexWrap: "wrap-reverse"})
  },
  center: css({alignItems: "center", justifyContent: "center"}),
  align: {
    start: css({alignItems: "flex-start"}),
    center: css({alignItems: "center"}),
    stretch: css({alignItems: "stretch"}),
    baseline: css({alignItems: "baseline"}),
    end: css({alignItems: "flex-end"})
  },
  justify: {
    start: css({justifyContent: "flex-start"}),
    center: css({justifyContent: "center"}),
    end: css({justifyContent: "flex-end"}),
    spaceBetween: css({justifyContent: "space-between"}),
    spaceAround: css({justifyContent: "space-around"}),
    spaceEvenly: css({justifyContent: "space-evenly"})
  },
  rowWithGap: (space) => css({
    flexDirection: "row",
    "& > *": {marginRight: toSpace(space)},
    "& > *:last-child": {marginRight: 0}
  }),
  colWithGap: (space) => css({
    flexDirection: "column",
    "& > *": {marginBottom: toSpace(space)},
    "& > *:last-child": {marginBottom: 0}
  }),
  borderRadius: (...radius) => {
    return css({
      borderRadius: radius.map(toBorderRadius).join(" ")
    });
  },
  font: {
    code: css({fontFamily: vars.fontFamilyCode})
  },
  textAlign: {
    left: css({textAlign: "left"}),
    center: css({textAlign: "center"}),
    right: css({textAlign: "right"})
  },
  color: {
    ...mapObject(themeTokens, (name, [token]) => [
      name,
      css({
        color: `var(${token})`
      })
    ]),
    ...mapObject(secondaryTokens, (name, [token]) => [
      name,
      css({
        color: `var(${token})`
      })
    ])
  },
  backgroundColor: {
    ...mapObject(themeTokens, (name, [token]) => [
      name,
      css({
        backgroundColor: `var(${token})`
      })
    ]),
    ...mapObject(secondaryTokens, (name, [token]) => [
      name,
      css({
        backgroundColor: `var(${token})`
      })
    ])
  },
  width: (width) => css({width}),
  height: (height) => css({height}),
  maxWidth: (maxWidth) => css({maxWidth}),
  maxHeight: (maxHeight) => css({maxHeight}),
  minWidth: (minWidth) => css({minWidth}),
  minHeight: (minHeight) => css({minHeight})
};

// app/rui/Surface.tsx
import {
  createContext,
  useContext
} from "react";

// app/rui/Interactive.tsx
var tokens = {
  interactiveBackground: "--interactive-background",
  interactiveBackgroundActive: "--interactive-background--active",
  interactiveBorder: "--interactive-border",
  interactiveBorderHover: "--interactive-border--hover"
};
var vars2 = {
  interactiveBackground: `var(${tokens.interactiveBackground})`,
  interactiveBackgroundActive: `var(${tokens.interactiveBackgroundActive})`,
  interactiveBorder: `var(${tokens.interactiveBorder})`,
  interactiveBorderHover: `var(${tokens.interactiveBorderHover})`
};
var interactive = {
  nofill: {
    borderRadius: vars.borderRadius8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      cursor: "pointer",
      ":hover": {
        borderColor: vars2.interactiveBorderHover,
        backgroundColor: vars2.interactiveBackground
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + vars.accentPrimaryDefault,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: vars2.interactiveBackgroundActive,
        borderColor: vars.accentPrimaryDefault
      }
    }
  },
  filled: {
    borderRadius: vars.borderRadius8,
    backgroundColor: vars2.interactiveBackground,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      cursor: "pointer",
      ":hover": {
        borderColor: vars2.interactiveBorderHover
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + vars.accentPrimaryDefault,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: vars2.interactiveBackgroundActive,
        borderColor: vars.accentPrimaryDefault
      }
    }
  },
  outlined: {
    borderRadius: vars.borderRadius8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: vars2.interactiveBorder,
    ":not([disabled])": {
      cursor: "pointer",
      ":hover": {
        borderColor: vars2.interactiveBorderHover,
        backgroundColor: vars2.interactiveBackground
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + vars.accentPrimaryDefault,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: vars2.interactiveBackgroundActive,
        borderColor: vars.accentPrimaryDefault
      }
    }
  },
  filledAndOutlined: {
    borderRadius: vars.borderRadius8,
    backgroundColor: vars2.interactiveBackground,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      borderColor: vars2.interactiveBorder,
      cursor: "pointer",
      ":hover": {
        borderColor: vars2.interactiveBorderHover
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + vars.accentPrimaryDefault,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: vars2.interactiveBackgroundActive,
        borderColor: vars.accentPrimaryDefault
      }
    }
  },
  listItem: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    ":not([disabled])": {
      cursor: "pointer",
      ":hover": {
        backgroundColor: vars2.interactiveBackground
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + vars.accentPrimaryDefault,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: vars2.interactiveBackgroundActive,
        borderColor: vars.accentPrimaryDefault
      }
    }
  }
};

// app/rui/View.tsx
import {
  forwardRef
} from "react";
import {css as css2} from "@emotion/react";
var viewStyle = css2({
  alignItems: "stretch",
  borderWidth: 0,
  borderStyle: "solid",
  boxSizing: "border-box",
  display: "flex",
  flexBasis: "auto",
  flexDirection: "column",
  flexShrink: 0,
  outline: "none",
  minHeight: 0,
  minWidth: 0
});
function View({
  tag: TagElt = "div",
  innerRef,
  ...props
}) {
  return /* @__PURE__ */ createElement(TagElt, {
    ref: innerRef,
    css: viewStyle,
    ...props
  });
}
var viewComponentCache = {};
function SpecializedView(tag) {
  const existing = viewComponentCache[tag];
  if (existing != null) {
    return existing;
  }
  return viewComponentCache[tag] = forwardRef((props, ref) => /* @__PURE__ */ createElement(View, {
    tag,
    innerRef: ref,
    ...props
  }));
}

// app/rui/Surface.tsx
var Elevation = createContext(0);
function Surface({elevated, background, ...props}) {
  let elevation = useContext(Elevation);
  if (!background) {
    const backgrounds = Object.keys(styles);
    if (elevated && elevation < backgrounds.length - 1) {
      elevation++;
    }
    background = backgrounds[elevation];
  }
  return /* @__PURE__ */ createElement(Elevation.Provider, {
    value: elevation
  }, /* @__PURE__ */ createElement(View, {
    css: styles[background],
    ...props
  }));
}
var styles = {
  root: {
    backgroundColor: vars.backgroundRoot,
    [tokens.interactiveBackground]: vars.backgroundDefault,
    [tokens.interactiveBackgroundActive]: vars.backgroundHigher,
    [tokens.interactiveBorder]: vars.outlineDimmer,
    [tokens.interactiveBorderHover]: vars.outlineDefault
  },
  default: {
    backgroundColor: vars.backgroundDefault,
    [tokens.interactiveBackground]: vars.backgroundHigher,
    [tokens.interactiveBackgroundActive]: vars.backgroundHighest,
    [tokens.interactiveBorder]: vars.outlineDimmer,
    [tokens.interactiveBorderHover]: vars.outlineDefault
  },
  higher: {
    backgroundColor: vars.backgroundHigher,
    [tokens.interactiveBackground]: vars.backgroundHighest,
    [tokens.interactiveBackgroundActive]: vars.outlineDimmer,
    [tokens.interactiveBorder]: vars.outlineDimmer,
    [tokens.interactiveBorderHover]: vars.outlineDefault
  },
  highest: {
    backgroundColor: vars.backgroundHighest,
    [tokens.interactiveBackground]: vars.outlineDimmest,
    [tokens.interactiveBackgroundActive]: vars.outlineDimmer,
    [tokens.interactiveBorder]: vars.outlineDefault,
    [tokens.interactiveBorderHover]: vars.outlineDefault
  }
};

// app/rui/Button.tsx
import {
  cloneElement,
  forwardRef as forwardRef3
} from "react";
import {css as css4} from "@emotion/react";
import Link from "next/link";

// app/rui/Colorway.tsx
var colormap = {
  primary: {
    dimmest: vars.accentPrimaryDimmest,
    dimmer: vars.accentPrimaryDimmer,
    default: vars.accentPrimaryDefault,
    stronger: vars.accentPrimaryStronger,
    strongest: vars.accentPrimaryStrongest
  },
  positive: {
    dimmest: vars.accentPositiveDimmest,
    dimmer: vars.accentPositiveDimmer,
    default: vars.accentPositiveDefault,
    stronger: vars.accentPositiveStronger,
    strongest: vars.accentPositiveStrongest
  },
  negative: {
    dimmest: vars.accentNegativeDimmest,
    dimmer: vars.accentNegativeDimmer,
    default: vars.accentNegativeDefault,
    stronger: vars.accentNegativeStronger,
    strongest: vars.accentNegativeStrongest
  },
  red: {
    dimmest: vars.redDimmest,
    dimmer: vars.redDimmer,
    default: vars.redDefault,
    stronger: vars.redStronger,
    strongest: vars.redStrongest
  },
  orange: {
    dimmest: vars.orangeDimmest,
    dimmer: vars.orangeDimmer,
    default: vars.orangeDefault,
    stronger: vars.orangeStronger,
    strongest: vars.orangeStrongest
  },
  yellow: {
    dimmest: vars.yellowDimmest,
    dimmer: vars.yellowDimmer,
    default: vars.yellowDefault,
    stronger: vars.yellowStronger,
    strongest: vars.yellowStrongest
  },
  green: {
    dimmest: vars.greenDimmest,
    dimmer: vars.greenDimmer,
    default: vars.greenDefault,
    stronger: vars.greenStronger,
    strongest: vars.greenStrongest
  },
  teal: {
    dimmest: vars.tealDimmest,
    dimmer: vars.tealDimmer,
    default: vars.tealDefault,
    stronger: vars.tealStronger,
    strongest: vars.tealStrongest
  },
  blue: {
    dimmest: vars.blueDimmest,
    dimmer: vars.blueDimmer,
    default: vars.blueDefault,
    stronger: vars.blueStronger,
    strongest: vars.blueStrongest
  },
  blurple: {
    dimmest: vars.blurpleDimmest,
    dimmer: vars.blurpleDimmer,
    default: vars.blurpleDefault,
    stronger: vars.blurpleStronger,
    strongest: vars.blurpleStrongest
  },
  purple: {
    dimmest: vars.purpleDimmest,
    dimmer: vars.purpleDimmer,
    default: vars.purpleDefault,
    stronger: vars.purpleStronger,
    strongest: vars.purpleStrongest
  },
  magenta: {
    dimmest: vars.magentaDimmest,
    dimmer: vars.magentaDimmer,
    default: vars.magentaDefault,
    stronger: vars.magentaStronger,
    strongest: vars.magentaStrongest
  },
  pink: {
    dimmest: vars.pinkDimmest,
    dimmer: vars.pinkDimmer,
    default: vars.pinkDefault,
    stronger: vars.pinkStronger,
    strongest: vars.pinkStrongest
  },
  grey: {
    dimmest: vars.greyDimmest,
    dimmer: vars.greyDimmer,
    default: vars.greyDefault,
    stronger: vars.greyStronger,
    strongest: vars.greyStrongest
  }
};
function nofill(colorway) {
  const {dimmest, dimmer, stronger, strongest} = colormap[colorway];
  return {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: 1,
    "&": {
      color: stronger
    },
    ":disabled": {
      color: dimmer
    },
    ":not([disabled])": {
      ":hover": {
        color: strongest,
        backgroundColor: dimmer
      },
      ":focus": {
        color: strongest,
        boxShadow: "0 0 0 2px " + strongest,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        color: strongest,
        backgroundColor: dimmest,
        borderColor: strongest
      }
    }
  };
}
function outlined(colorway) {
  const {dimmest, dimmer, default: dflt, stronger, strongest} = colormap[colorway];
  return {
    borderStyle: "solid",
    borderColor: dimmer,
    borderWidth: 1,
    "&": {
      color: stronger
    },
    ":disabled": {
      color: dimmer
    },
    ":not([disabled])": {
      ":hover": {
        color: strongest,
        borderColor: dflt,
        backgroundColor: dimmer
      },
      ":focus": {
        color: strongest,
        boxShadow: "0 0 0 2px " + strongest,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        color: strongest,
        backgroundColor: dimmest,
        borderColor: strongest
      },
      ":visited": {
        borderColor: dimmest
      }
    }
  };
}
function filled(colorway) {
  const {dimmest, dimmer, default: dflt, stronger} = colormap[colorway];
  return {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "transparent",
    "&": {
      color: vars.foregroundDefault,
      backgroundColor: dimmer,
      boxShadow: "none"
    },
    ":disabled": {
      backgroundColor: dimmest,
      color: dflt
    },
    ":not([disabled])": {
      ":hover": {
        borderColor: stronger
      },
      ":focus": {
        boxShadow: "0 0 0 2px " + stronger,
        ":not(:focus-visible)": {
          boxShadow: "none"
        }
      },
      ":active": {
        backgroundColor: dimmest,
        borderColor: dflt
      },
      ":visited": {
        borderColor: "transparent"
      }
    }
  };
}

// app/rui/Text.tsx
import {
  forwardRef as forwardRef2
} from "react";
import {css as css3} from "@emotion/react";
var defaults = css3({
  display: "inline"
});
var variants = {
  text: css3({
    fontSize: vars.fontSizeDefault,
    lineHeight: vars.lineHeightDefault
  }),
  small: css3({
    fontSize: vars.fontSizeSmall,
    lineHeight: vars.lineHeightSmall
  }),
  headerBig: css3({
    fontSize: vars.fontSizeHeaderBig,
    fontWeight: vars.fontWeightMedium,
    lineHeight: vars.lineHeightHeaderBig
  }),
  headerDefault: css3({
    fontSize: vars.fontSizeHeaderDefault,
    fontWeight: vars.fontWeightMedium,
    lineHeight: vars.lineHeightHeaderDefault
  }),
  subheadBig: css3({
    fontSize: vars.fontSizeSubheadBig,
    fontWeight: vars.fontWeightMedium,
    lineHeight: vars.lineHeightSubheadBig
  }),
  subheadDefault: css3({
    fontSize: vars.fontSizeSubheadDefault,
    fontWeight: vars.fontWeightMedium,
    lineHeight: vars.lineHeightSubheadDefault
  })
};
var colors = {
  default: void 0,
  dimmer: rcss.color.foregroundDimmer,
  dimmest: rcss.color.foregroundDimmest
};
var truncate = css3({
  display: "inline-block",
  lineHeight: 1.2,
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
function textCss(variant, color, multiline) {
  return css3([
    defaults,
    variants[variant],
    color != null && colors[color],
    !multiline && truncate
  ]);
}
var SpanView = SpecializedView("span");
function Header({
  className,
  color,
  level,
  variant = "text",
  children,
  innerRef
}) {
  return /* @__PURE__ */ createElement(SpanView, {
    ref: innerRef,
    role: "heading",
    "aria-level": level,
    className,
    css: textCss(variant, color, true)
  }, children);
}
var ForwardedHeader = forwardRef2((props, ref) => /* @__PURE__ */ createElement(Header, {
  innerRef: ref,
  ...props
}));
function Text({
  className,
  color,
  multiline,
  variant = "text",
  children,
  innerRef
}) {
  return /* @__PURE__ */ createElement(SpanView, {
    ref: innerRef,
    className,
    css: textCss(variant, color, multiline)
  }, children);
}
var ForwardedText = forwardRef2((props, ref) => /* @__PURE__ */ createElement(Text, {
  innerRef: ref,
  ...props
}));

// app/rui/Button.tsx
var buttonReset = css4({
  border: "none",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal"
});
var AnchorView = SpecializedView("a");
var ButtonView = SpecializedView("button");
function buttonCss(disabled, outlined2, stretch, colorway, size) {
  return [
    rcss.rowWithGap(8),
    rcss.align.center,
    buttonReset,
    disabled && {color: vars.foregroundDimmest},
    outlined2 ? interactive.outlined : interactive.filled,
    rcss.p(8),
    rcss.borderRadius(8),
    stretch && {alignSelf: "stretch"},
    colorway && (outlined2 ? outlined(colorway) : filled(colorway)),
    {height: size + 16}
  ];
}
function Button(props) {
  const {
    className,
    colorway,
    disabled,
    iconLeft,
    iconRight,
    outlined: outlined2,
    small,
    big,
    stretch,
    text
  } = props;
  const getButtonTextVariant = () => {
    if (big) {
      return "subheadDefault";
    }
    if (small) {
      return "small";
    }
    return "text";
  };
  const getIconSize = () => {
    if (big) {
      return 20;
    }
    if (small) {
      return 12;
    }
    return 16;
  };
  const buttonText = /* @__PURE__ */ createElement(ForwardedText, {
    variant: getButtonTextVariant()
  }, text);
  const content = /* @__PURE__ */ createElement(Fragment, null, iconLeft ? /* @__PURE__ */ createElement(View, {
    css: [
      rcss.flex.growAndShrink(1),
      rcss.center,
      rcss.rowWithGap(small ? 4 : 8)
    ]
  }, cloneElement(iconLeft, {size: getIconSize()}), buttonText) : buttonText, iconRight && cloneElement(iconRight, {size: getIconSize()}));
  const eltCss = buttonCss(disabled, outlined2, stretch, colorway, getIconSize());
  if (!("href" in props)) {
    return /* @__PURE__ */ createElement(ButtonView, {
      ref: props.innerRef,
      className,
      css: eltCss,
      disabled,
      onClick: props.onClick,
      type: props.type
    }, content);
  }
  if (!disabled) {
    return /* @__PURE__ */ createElement(Link, {
      as: props.as,
      href: props.href,
      passHref: true,
      prefetch: props.prefetch,
      replace: props.replace,
      scroll: props.scroll,
      shallow: props.shallow
    }, /* @__PURE__ */ createElement(AnchorView, {
      ref: props.innerRef,
      className,
      css: eltCss,
      rel: props.rel,
      role: "link",
      target: props.target
    }, content));
  }
  return /* @__PURE__ */ createElement(AnchorView, {
    ref: props.innerRef,
    "aria-disabled": disabled,
    className,
    css: eltCss,
    rel: props.rel,
    role: "link",
    target: props.target
  }, content);
}
var ForwardedButton = forwardRef3((props, ref) => /* @__PURE__ */ createElement(Button, {
  innerRef: ref,
  ...props
}));
var Button_default = ForwardedButton;

// app/ui/constants.ts
var ICON_SIZE_MAP = {
  small: 10,
  medium: 14,
  large: 18,
  xlarge: 24
};

// app/ui/icons/Icon.tsx
function Icon({
  size = "medium",
  rotate = 0,
  filled: filled2 = false,
  color = "currentColor",
  style,
  children,
  ...rest
}) {
  const resolvedSize = typeof size === "number" ? size : ICON_SIZE_MAP[size];
  return /* @__PURE__ */ createElement("svg", {
    preserveAspectRatio: "xMidYMin",
    width: resolvedSize,
    height: resolvedSize,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    fill: filled2 ? color : "transparent",
    style: {...style, verticalAlign: "middle"},
    ...rest
  }, children, /* @__PURE__ */ createElement("style", {
    jsx: true
  }, `
          svg {
            min-width: ${resolvedSize}px;
            min-height: ${resolvedSize}px;
            ${rotate ? `transform: rotate(${rotate}deg);` : ""}
            ${rotate ? `webkit-transform: rotate(${rotate}deg);` : ""}
          }
        `));
}

// app/ui/icons/Check.tsx
function CheckIcon(props) {
  return /* @__PURE__ */ createElement(Icon, {
    ...props
  }, /* @__PURE__ */ createElement("path", {
    d: "M20 6L9 17L4 12",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// app/rui/Checkbox.tsx
var Input = SpecializedView("input");
function Checkbox({checked, onChange, ...props}) {
  return /* @__PURE__ */ createElement(View, {
    tag: "div",
    css: [rcss.justify.center, rcss.align.center]
  }, /* @__PURE__ */ createElement(Input, {
    tag: "input",
    type: "checkbox",
    checked,
    onChange: (e2) => {
      if (onChange) {
        onChange(e2);
      }
    },
    css: [
      interactive.filledAndOutlined,
      {
        appearance: "none",
        width: 20,
        height: 20,
        borderRadius: vars.borderRadius4
      }
    ],
    ...props
  }), checked ? /* @__PURE__ */ createElement(CheckIcon, {
    css: [{position: "absolute", pointerEvents: "none"}]
  }) : null);
}

// app/rui/IconButton.tsx
import {
  cloneElement as cloneElement2
} from "react";
import {css as css6} from "@emotion/react";

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@react-aria/interactions/dist/module.js
import _react3, {useContext as useContext3, useEffect as useEffect2, useMemo as useMemo2, useRef as useRef3, useState as useState4, useCallback as useCallback3} from "react";

// node_modules/@react-stately/utils/dist/module.js
import {useCallback, useRef, useState} from "react";
function useControlledState(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = useState(value || defaultValue);
  let ref = useRef(value !== void 0);
  let wasControlled = ref.current;
  let isControlled = value !== void 0;
  let stateRef = useRef(stateValue);
  if (wasControlled !== isControlled) {
    console.warn("WARN: A component changed from " + (wasControlled ? "controlled" : "uncontrolled") + " to " + (isControlled ? "controlled" : "uncontrolled") + ".");
  }
  ref.current = isControlled;
  let setValue = useCallback(function(value2) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    let onChangeCaller = function onChangeCaller2(value3) {
      if (onChange) {
        if (!Object.is(stateRef.current, value3)) {
          for (var _len2 = arguments.length, onChangeArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            onChangeArgs[_key2 - 1] = arguments[_key2];
          }
          onChange(value3, ...onChangeArgs);
        }
      }
      if (!isControlled) {
        stateRef.current = value3;
      }
    };
    if (typeof value2 === "function") {
      let updateFunction = function updateFunction2(oldValue) {
        for (var _len3 = arguments.length, functionArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          functionArgs[_key3 - 1] = arguments[_key3];
        }
        let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled) {
          return interceptedValue;
        }
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled) {
        setStateValue(value2);
      }
      onChangeCaller(value2, ...args);
    }
  }, [isControlled, onChange]);
  if (isControlled) {
    stateRef.current = value;
  } else {
    value = stateValue;
  }
  return [value, setValue];
}

// node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// node_modules/@react-aria/ssr/dist/module.js
import _react, {useContext as useContext2, useLayoutEffect, useMemo, useState as useState2} from "react";
var $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /* @__PURE__ */ _react.createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);
var $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function useSSRSafeId(defaultId) {
  let ctx = useContext2($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  }
  return useMemo(() => defaultId || "react-aria" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
}
function useIsSSR() {
  let cur = useContext2($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
  let [isSSR, setIsSSR] = useState2(isInSSRContext);
  if (typeof window !== "undefined" && isInSSRContext) {
    useLayoutEffect(() => {
      setIsSSR(false);
    }, []);
  }
  return isSSR;
}

// node_modules/@react-aria/utils/dist/module.js
import _react2, {useEffect, useRef as useRef2, useState as useState3, useCallback as useCallback2, useLayoutEffect as _useLayoutEffect} from "react";
var useLayoutEffect2 = typeof window !== "undefined" ? _react2.useLayoutEffect : () => {
};
var $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap = new Map();
function useId(defaultId) {
  let isRendering = useRef2(true);
  isRendering.current = true;
  let [value, setValue] = useState3(defaultId);
  let nextId = useRef2(null);
  let res = useSSRSafeId(value);
  let updateValue = (val) => {
    if (!isRendering.current) {
      setValue(val);
    } else {
      nextId.current = val;
    }
  };
  $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.set(res, updateValue);
  useLayoutEffect2(() => {
    isRendering.current = false;
  }, [updateValue]);
  useLayoutEffect2(() => {
    let r2 = res;
    return () => {
      $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.delete(r2);
    };
  }, [res]);
  useEffect(() => {
    let newId = nextId.current;
    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [setValue, updateValue]);
  return res;
}
function mergeIds(idA, idB) {
  if (idA === idB) {
    return idA;
  }
  let setIdA = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function useSlotId() {
  let id = useId();
  let [resolvedId, setResolvedId] = useState3(id);
  useLayoutEffect2(() => {
    let setCurr = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(id);
    if (setCurr && !document.getElementById(id)) {
      setResolvedId(null);
    } else {
      setResolvedId(id);
    }
  }, [id]);
  return resolvedId;
}
function chain() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }
  return function() {
    for (let callback of callbacks) {
      if (typeof callback === "function") {
        callback(...arguments);
      }
    }
  };
}
function mergeProps() {
  let result = _extends({}, arguments.length <= 0 ? void 0 : arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    let props = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90) {
        result[key] = chain(a, b);
      } else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") {
        result[key] = clsx_m_default(a, b);
      } else if (key === "id" && a && b) {
        result.id = mergeIds(a, b);
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
  }
  return result;
}
var $f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames = new Set(["id"]);
var $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]);
var $f6a965352cabf1a7c37e8c1337e5eab$var$propRe = /^(data-.*)$/;
function filterDOMProps(props, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let {
    labelable,
    propNames
  } = opts;
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames.has(prop) || labelable && $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames.has(prop) || propNames != null && propNames.has(prop) || $f6a965352cabf1a7c37e8c1337e5eab$var$propRe.test(prop))) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
}
function focusWithoutScrolling(element) {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll()) {
    element.focus({
      preventScroll: true
    });
  } else {
    let scrollableElements = $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element);
    element.focus();
    $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements);
  }
}
var $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = null;
function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll() {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached == null) {
    $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e2) {
    }
  }
  return $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached;
}
function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }
  return scrollableElements;
}
function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements) {
  for (let {
    element,
    scrollTop,
    scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement = new Map();
var $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks = new Set();
function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents() {
  if (typeof window === "undefined") {
    return;
  }
  let onTransitionStart = (e2) => {
    let transitions = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e2.target);
    if (!transitions) {
      transitions = new Set();
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.set(e2.target, transitions);
      e2.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e2.propertyName);
  };
  let onTransitionEnd = (e2) => {
    let properties = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e2.target);
    if (!properties) {
      return;
    }
    properties.delete(e2.propertyName);
    if (properties.size === 0) {
      e2.target.removeEventListener("transitioncancel", onTransitionEnd);
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.delete(e2.target);
    }
    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      for (let cb of $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks) {
        cb();
      }
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") {
    $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents();
  } else {
    document.addEventListener("DOMContentLoaded", $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents);
  }
}
function runAfterTransition(fn2) {
  requestAnimationFrame(() => {
    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      fn2();
    } else {
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.add(fn2);
    }
  });
}
function useGlobalListeners() {
  let globalListeners = useRef2(new Map());
  let addGlobalListener = useCallback2((eventTarget, type, listener, options) => {
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = useCallback2((eventTarget, type, listener, options) => {
    eventTarget.removeEventListener(type, listener, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = useCallback2(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [removeGlobalListener]);
  useEffect(() => {
    return removeAllGlobalListeners;
  }, [removeAllGlobalListeners]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function useSyncRef(context, ref) {
  useLayoutEffect2(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [context, ref]);
}
var $d662329747d896105af008c761523$var$visualViewport = typeof window !== "undefined" && window.visualViewport;
var $c8aa524f123a75a64d51e06d16b9568$var$descriptionNodes = new Map();
function $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.platform) : false;
}
function isMac() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^Mac/);
}
function useEvent(ref, event, handler, options) {
  let handlerRef = useRef2(handler);
  handlerRef.current = handler;
  let isDisabled = handler == null;
  useEffect(() => {
    if (isDisabled) {
      return;
    }
    let element = ref.current;
    let handler2 = (e2) => handlerRef.current.call(this, e2);
    element.addEventListener(event, handler2, options);
    return () => {
      element.removeEventListener(event, handler2, options);
    };
  }, [ref, event, options, isDisabled]);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@react-aria/interactions/dist/module.js
var $e17c9db826984f8ab8e5d837bf0b8$var$state = "default";
var $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = "";
function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection() {
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state === "default") {
    $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.webkitUserSelect = "none";
  }
  $e17c9db826984f8ab8e5d837bf0b8$var$state = "disabled";
}
function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection() {
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state !== "disabled") {
    return;
  }
  $e17c9db826984f8ab8e5d837bf0b8$var$state = "restoring";
  setTimeout(() => {
    runAfterTransition(() => {
      if ($e17c9db826984f8ab8e5d837bf0b8$var$state === "restoring") {
        if (document.documentElement.style.webkitUserSelect === "none") {
          document.documentElement.style.webkitUserSelect = $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect || "";
        }
        $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = "";
        $e17c9db826984f8ab8e5d837bf0b8$var$state = "default";
      }
    });
  }, 300);
}
function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  return event.detail === 0 && !event.pointerType;
}
var $a3ff51240de6f955c79cf17a88e349$export$PressResponderContext = /* @__PURE__ */ _react3.createContext(null);
$a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.displayName = "PressResponderContext";
function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props) {
  let context = useContext3($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);
  if (context) {
    let {
      register
    } = context, contextProps = _objectWithoutPropertiesLoose(context, ["register"]);
    props = mergeProps(contextProps, props);
    register();
  }
  useSyncRef(context, props.ref);
  return props;
}
function usePress(props) {
  let _usePressResponderCon = $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props), {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit
  } = _usePressResponderCon, domProps = _objectWithoutPropertiesLoose(_usePressResponderCon, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "shouldCancelOnPointerExit", "ref"]);
  let propsRef = useRef3(null);
  propsRef.current = {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = useState4(false);
  let ref = useRef3({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let {
    addGlobalListener,
    removeAllGlobalListeners
  } = useGlobalListeners();
  let pressProps = useMemo2(() => {
    let state = ref.current;
    let triggerPressStart = (originalEvent, pointerType) => {
      let {
        onPressStart: onPressStart2,
        onPressChange: onPressChange2,
        isDisabled: isDisabled2
      } = propsRef.current;
      if (isDisabled2 || state.didFirePressStart) {
        return;
      }
      if (onPressStart2) {
        onPressStart2({
          type: "pressstart",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
      if (onPressChange2) {
        onPressChange2(true);
      }
      state.didFirePressStart = true;
      setPressed(true);
    };
    let triggerPressEnd = function triggerPressEnd2(originalEvent, pointerType, wasPressed) {
      if (wasPressed === void 0) {
        wasPressed = true;
      }
      let {
        onPressEnd: onPressEnd2,
        onPressChange: onPressChange2,
        onPress: onPress2,
        isDisabled: isDisabled2
      } = propsRef.current;
      if (!state.didFirePressStart) {
        return;
      }
      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;
      if (onPressEnd2) {
        onPressEnd2({
          type: "pressend",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
      if (onPressChange2) {
        onPressChange2(false);
      }
      setPressed(false);
      if (onPress2 && wasPressed && !isDisabled2) {
        onPress2({
          type: "press",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
    };
    let triggerPressUp = (originalEvent, pointerType) => {
      let {
        onPressUp: onPressUp2,
        isDisabled: isDisabled2
      } = propsRef.current;
      if (isDisabled2) {
        return;
      }
      if (onPressUp2) {
        onPressUp2({
          type: "pressup",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
    };
    let cancel = (e2) => {
      if (state.isPressed) {
        if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType, false);
        }
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
      }
    };
    let pressProps2 = {
      onKeyDown(e2) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e2.nativeEvent) && e2.currentTarget.contains(e2.target)) {
          e2.preventDefault();
          e2.stopPropagation();
          if (!state.isPressed && !e2.repeat) {
            state.target = e2.currentTarget;
            state.isPressed = true;
            triggerPressStart(e2, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e2) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e2.nativeEvent) && !e2.repeat && e2.currentTarget.contains(e2.target)) {
          triggerPressUp($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), "keyboard");
        }
      },
      onClick(e2) {
        if (e2 && !e2.currentTarget.contains(e2.target)) {
          return;
        }
        if (e2 && e2.button === 0) {
          e2.stopPropagation();
          if (isDisabled) {
            e2.preventDefault();
          }
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e2.nativeEvent)) {
            if (!isDisabled && !preventFocusOnPress) {
              focusWithoutScrolling(e2.currentTarget);
            }
            triggerPressStart(e2, "virtual");
            triggerPressUp(e2, "virtual");
            triggerPressEnd(e2, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e2) => {
      if (state.isPressed && $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e2)) {
        e2.preventDefault();
        e2.stopPropagation();
        state.isPressed = false;
        triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), "keyboard", e2.target === state.target);
        removeAllGlobalListeners();
        if (e2.target === state.target && $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link") {
          state.target.click();
        }
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e2) => {
        if (e2.button !== 0 || !e2.currentTarget.contains(e2.target)) {
          return;
        }
        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e2.target)) {
          e2.preventDefault();
        }
        state.pointerType = $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e2.nativeEvent) ? "virtual" : e2.pointerType;
        e2.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e2.pointerId;
          state.target = e2.currentTarget;
          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e2.currentTarget);
          }
          $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
          triggerPressStart(e2, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps2.onMouseDown = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        if (e2.button === 0) {
          if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e2.target)) {
            e2.preventDefault();
          }
          e2.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        if (e2.button === 0 && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e2, e2.currentTarget)) {
          triggerPressUp(e2, state.pointerType || ($ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e2.nativeEvent) ? "virtual" : e2.pointerType));
        }
      };
      let onPointerMove = (e2) => {
        if (e2.pointerId !== state.activePointerId) {
          return;
        }
        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e2, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) {
            cancel(e2);
          }
        }
      };
      let onPointerUp = (e2) => {
        if (e2.pointerId === state.activePointerId && state.isPressed && e2.button === 0) {
          if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e2, state.target)) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType);
          } else if (state.isOverTarget) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType, false);
          }
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        }
      };
      let onPointerCancel = (e2) => {
        cancel(e2);
      };
      pressProps2.onDragStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        cancel(e2);
      };
    } else {
      pressProps2.onMouseDown = (e2) => {
        if (e2.button !== 0 || !e2.currentTarget.contains(e2.target)) {
          return;
        }
        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e2.target)) {
          e2.preventDefault();
        }
        e2.stopPropagation();
        if (state.ignoreEmulatedMouseEvents) {
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e2.currentTarget;
        state.pointerType = $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e2.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e2.currentTarget);
        }
        triggerPressStart(e2, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e2, state.pointerType);
        }
      };
      pressProps2.onMouseLeave = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e2, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) {
            cancel(e2);
          }
        }
      };
      pressProps2.onMouseUp = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        if (!state.ignoreEmulatedMouseEvents && e2.button === 0) {
          triggerPressUp(e2, state.pointerType);
        }
      };
      let onMouseUp = (e2) => {
        if (e2.button !== 0) {
          return;
        }
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e2, state.target)) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e2), state.pointerType, false);
        }
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e2.nativeEvent);
        if (!touch) {
          return;
        }
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e2.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e2.currentTarget);
        }
        $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
        triggerPressStart(e2, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        if (!state.isPressed) {
          return;
        }
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e2.nativeEvent, state.activePointerId);
        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e2.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e2, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e2, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit) {
            cancel(e2);
          }
        }
      };
      pressProps2.onTouchEnd = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        if (!state.isPressed) {
          return;
        }
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e2.nativeEvent, state.activePointerId);
        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e2.currentTarget)) {
          triggerPressUp(e2, state.pointerType);
          triggerPressEnd(e2, state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd(e2, state.pointerType, false);
        }
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        e2.stopPropagation();
        if (state.isPressed) {
          cancel(e2);
        }
      };
      let onScroll = (e2) => {
        if (state.isPressed && e2.target.contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
        }
      };
      pressProps2.onDragStart = (e2) => {
        if (!e2.currentTarget.contains(e2.target)) {
          return;
        }
        cancel(e2);
      };
    }
    return pressProps2;
  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners]);
  useEffect2(() => {
    return () => $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
  }, []);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: mergeProps(domProps, pressProps)
  };
}
function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(event) {
  const {
    key,
    target
  } = event;
  const element = target;
  const {
    tagName,
    isContentEditable
  } = element;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar") && tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true && (!$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && !(role === "link" && key !== "Enter");
}
function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(event) {
  const {
    targetTouches
  } = event;
  if (targetTouches.length > 0) {
    return targetTouches[0];
  }
  return null;
}
function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) {
      return touch;
    }
  }
  return null;
}
function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(target, e2) {
  return {
    currentTarget: target,
    shiftKey: e2.shiftKey,
    ctrlKey: e2.ctrlKey,
    metaKey: e2.metaKey,
    altKey: e2.altKey
  };
}
function $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(a, b) {
  if (a.left > b.right || b.left > a.right) {
    return false;
  }
  if (a.top > b.bottom || b.top > a.bottom) {
    return false;
  }
  return true;
}
function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point);
  return $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(rect, pointRect);
}
function $ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(target) {
  return !target.closest('[draggable="true"]');
}
function $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0;
}
function useFocus(props) {
  if (props.isDisabled) {
    return {
      focusProps: {}
    };
  }
  let onFocus, onBlur;
  if (props.onFocus || props.onFocusChange) {
    onFocus = (e2) => {
      if (e2.target === e2.currentTarget) {
        if (props.onFocus) {
          props.onFocus(e2);
        }
        if (props.onFocusChange) {
          props.onFocusChange(true);
        }
      }
    };
  }
  if (props.onBlur || props.onFocusChange) {
    onBlur = (e2) => {
      if (e2.target === e2.currentTarget) {
        if (props.onBlur) {
          props.onBlur(e2);
        }
        if (props.onFocusChange) {
          props.onFocusChange(false);
        }
      }
    };
  }
  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
var $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = null;
var $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers = new Set();
var $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = false;
var $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
var $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false;
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers) {
    handler(modality, e2);
  }
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e2) {
  return !(e2.metaKey || !isMac() && e2.altKey || e2.ctrlKey || e2.type === "keyup" && (e2.key === "Control" || e2.key === "Shift"));
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent(e2) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
  if ($d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e2)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = "keyboard";
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers("keyboard", e2);
  }
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent(e2) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = "pointer";
  if (e2.type === "mousedown" || e2.type === "pointerdown") {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers("pointer", e2);
  }
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent(e2) {
  if ($f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e2)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = "virtual";
  }
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent(e2) {
  if (e2.target === window || e2.target === document) {
    return;
  }
  if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = "virtual";
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers("virtual", e2);
  }
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false;
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur() {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = true;
}
function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents() {
  if (typeof window === "undefined" || $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners) {
    return;
  }
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener("keyup", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener("click", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent, true);
  window.addEventListener("focus", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent, true);
  window.addEventListener("blur", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener("pointermove", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener("pointerup", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  } else {
    document.addEventListener("mousedown", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener("mousemove", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener("mouseup", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  }
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  } else {
    document.addEventListener("DOMContentLoaded", $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents);
  }
}
function isFocusVisible() {
  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality !== "pointer";
}
function getInteractionModality() {
  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality;
}
var $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
var $b1a784c66b81d90efa4f74e05b$var$hoverCount = 0;
function $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents() {
  $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent(e2) {
  if (e2.pointerType === "touch") {
    $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents();
  }
}
function $b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") {
    return;
  }
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerup", $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
  } else {
    document.addEventListener("touchend", $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
  }
  $b1a784c66b81d90efa4f74e05b$var$hoverCount++;
  return () => {
    $b1a784c66b81d90efa4f74e05b$var$hoverCount--;
    if ($b1a784c66b81d90efa4f74e05b$var$hoverCount > 0) {
      return;
    }
    if (typeof PointerEvent !== "undefined") {
      document.removeEventListener("pointerup", $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
    } else {
      document.removeEventListener("touchend", $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
    }
  };
}
function useHover(props) {
  let {
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled
  } = props;
  let [isHovered, setHovered] = useState4(false);
  let state = useRef3({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  useEffect2($b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents, []);
  let {
    hoverProps,
    triggerHoverEnd
  } = useMemo2(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) {
        return;
      }
      state.isHovered = true;
      let target = event.target;
      state.target = target;
      if (onHoverStart) {
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      }
      if (onHoverChange) {
        onHoverChange(true);
      }
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered) {
        return;
      }
      state.isHovered = false;
      let target = event.target;
      if (onHoverEnd) {
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      }
      if (onHoverChange) {
        onHoverChange(false);
      }
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e2) => {
        if ($b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse") {
          return;
        }
        triggerHoverStart(e2, e2.pointerType);
      };
      hoverProps2.onPointerLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) {
          triggerHoverEnd2(e2, e2.pointerType);
        }
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e2) => {
        if (!state.ignoreEmulatedMouseEvents && !$b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents) {
          triggerHoverStart(e2, "mouse");
        }
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e2) => {
        if (!isDisabled && e2.currentTarget.contains(e2.target)) {
          triggerHoverEnd2(e2, "mouse");
        }
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);
  useEffect2(() => {
    if (isDisabled) {
      triggerHoverEnd({
        target: state.target
      }, state.pointerType);
    }
  }, [isDisabled]);
  return {
    hoverProps,
    isHovered
  };
}
function $dc0d75166de722fbf58eb6c3552$export$createEventHandler(handler) {
  if (!handler) {
    return;
  }
  let shouldStopPropagation = true;
  return (e2) => {
    let event = _extends({}, e2, {
      preventDefault() {
        e2.preventDefault();
      },
      isDefaultPrevented() {
        return e2.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        shouldStopPropagation = false;
      }
    });
    handler(event);
    if (shouldStopPropagation) {
      e2.stopPropagation();
    }
  };
}
function useKeyboard(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyDown),
      onKeyUp: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyUp)
    }
  };
}

// node_modules/@react-aria/focus/dist/module.js
import _react4, {useContext as useContext4, useEffect as useEffect3, useRef as useRef4, useState as useState5} from "react";
function focusSafely(element) {
  if (getInteractionModality() === "virtual") {
    let lastFocusedElement = document.activeElement;
    runAfterTransition(() => {
      if (document.activeElement === lastFocusedElement && document.contains(element)) {
        focusWithoutScrolling(element);
      }
    });
  } else {
    focusWithoutScrolling(element);
  }
}
function $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false;
  }
  let {
    display,
    visibility
  } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const {
      getComputedStyle: getComputedStyle3
    } = element.ownerDocument.defaultView;
    let {
      display: computedDisplay,
      visibility: computedVisibility
    } = getComputedStyle3(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element, childElement) {
  return element.nodeName !== "#comment" && $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) && $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element.parentElement, element));
}
var $c9e8f80f5bb1841844f54e4ad30b$var$scopes = new Map();
var $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"];
var $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope) {
  return scope.some((node) => node.contains(element));
}
function getFocusableTreeWalker(root, opts, scope) {
  let selector = opts != null && opts.tabbable ? $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR : $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _opts$from;
      if (opts != null && (_opts$from = opts.from) != null && _opts$from.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.matches(selector) && $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(node) && (!scope || $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope))) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts != null && opts.from) {
    walker.currentNode = opts.from;
  }
  return walker;
}
var $e11539c8317b2d21639df611cb5658f$var$FocusableContext = /* @__PURE__ */ _react4.createContext(null);
function $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(ref) {
  let context = useContext4($e11539c8317b2d21639df611cb5658f$var$FocusableContext) || {};
  useSyncRef(context, ref);
  let otherProps = _objectWithoutPropertiesLoose(context, ["ref"]);
  return otherProps;
}
function useFocusable(props, domRef) {
  let {
    focusProps
  } = useFocus(props);
  let {
    keyboardProps
  } = useKeyboard(props);
  let interactions = mergeProps(focusProps, keyboardProps);
  let domProps = $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = useRef4(props.autoFocus);
  useEffect3(() => {
    if (autoFocusRef.current && domRef.current) {
      domRef.current.focus();
    }
    autoFocusRef.current = false;
  }, []);
  return {
    focusableProps: mergeProps(_extends({}, interactions, {
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }), interactionProps)
  };
}

// node_modules/@react-aria/button/dist/module.js
function useButton(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button"
  } = props;
  let additionalProps;
  if (elementType === "button") {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  }
  let {
    pressProps,
    isPressed
  } = usePress({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    ref
  });
  let {
    focusableProps
  } = useFocusable(props, ref);
  let buttonProps = mergeProps(focusableProps, pressProps);
  buttonProps = mergeProps(buttonProps, filterDOMProps(props, {
    labelable: true
  }));
  return {
    isPressed,
    buttonProps: mergeProps(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e2) => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e2);
          console.warn("onClick is deprecated, please use onPress");
        }
      }
    })
  };
}

// app/rui/Tooltip.tsx
import {useState as useState8} from "react";
import {css as css5} from "@emotion/react";

// node_modules/@react-aria/tooltip/dist/module.js
import {useEffect as useEffect4, useRef as useRef5} from "react";
function useTooltip(props, state) {
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let {
    hoverProps
  } = useHover({
    onHoverStart: () => state == null ? void 0 : state.open(true),
    onHoverEnd: () => state == null ? void 0 : state.close()
  });
  return {
    tooltipProps: mergeProps(domProps, hoverProps, {
      role: "tooltip"
    })
  };
}
function useTooltipTrigger(props, state, ref) {
  let {
    isDisabled,
    trigger
  } = props;
  let tooltipId = useId();
  let isHovered = useRef5(false);
  let isFocused = useRef5(false);
  let handleShow = () => {
    if (isHovered.current || isFocused.current) {
      state.open(isFocused.current);
    }
  };
  let handleHide = (immediate) => {
    if (!isHovered.current && !isFocused.current) {
      state.close(immediate);
    }
  };
  useEffect4(() => {
    let onKeyDown = (e2) => {
      if (ref && ref.current) {
        if (e2.key === "Escape") {
          state.close(true);
        }
      }
    };
    if (state.isOpen) {
      document.addEventListener("keydown", onKeyDown, true);
      return () => {
        document.removeEventListener("keydown", onKeyDown, true);
      };
    }
  }, [ref, state]);
  let onHoverStart = () => {
    if (trigger === "focus") {
      return;
    }
    if (getInteractionModality() === "pointer") {
      isHovered.current = true;
    } else {
      isHovered.current = false;
    }
    handleShow();
  };
  let onHoverEnd = () => {
    if (trigger === "focus") {
      return;
    }
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };
  let onPressStart = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let onFocus = () => {
    let isVisible = isFocusVisible();
    if (isVisible) {
      isFocused.current = true;
      handleShow();
    }
  };
  let onBlur = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let {
    hoverProps
  } = useHover({
    isDisabled,
    onHoverStart,
    onHoverEnd
  });
  let {
    pressProps
  } = usePress({
    onPressStart
  });
  let {
    focusableProps
  } = useFocusable({
    isDisabled,
    onFocus,
    onBlur
  }, ref);
  return {
    triggerProps: _extends({
      "aria-describedby": state.isOpen ? tooltipId : void 0
    }, mergeProps(focusableProps, hoverProps, pressProps)),
    tooltipProps: {
      id: tooltipId
    }
  };
}

// node_modules/@react-stately/overlays/dist/module.js
function useOverlayTriggerState(props) {
  let [isOpen, setOpen] = useControlledState(props.isOpen, props.defaultOpen || false, props.onOpenChange);
  return {
    isOpen,
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
    toggle() {
      setOpen(!isOpen);
    }
  };
}

// node_modules/@react-stately/tooltip/dist/module.js
import {useEffect as useEffect5, useMemo as useMemo3, useRef as useRef6} from "react";
var $af9cde49ea815e766aeca6386e9$var$TOOLTIP_DELAY = 1500;
var $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN = 500;
var $af9cde49ea815e766aeca6386e9$var$tooltips = {};
var $af9cde49ea815e766aeca6386e9$var$tooltipId = 0;
var $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = false;
var $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
var $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
function useTooltipTriggerState(props) {
  if (props === void 0) {
    props = {};
  }
  let {
    delay = $af9cde49ea815e766aeca6386e9$var$TOOLTIP_DELAY
  } = props;
  let {
    isOpen,
    open,
    close
  } = useOverlayTriggerState(props);
  let id = useMemo3(() => "" + ++$af9cde49ea815e766aeca6386e9$var$tooltipId, []);
  let closeTimeout = useRef6();
  let ensureTooltipEntry = () => {
    $af9cde49ea815e766aeca6386e9$var$tooltips[id] = hideTooltip;
  };
  let closeOpenTooltips = () => {
    for (let hideTooltipId in $af9cde49ea815e766aeca6386e9$var$tooltips) {
      if (hideTooltipId !== id) {
        $af9cde49ea815e766aeca6386e9$var$tooltips[hideTooltipId](true);
        delete $af9cde49ea815e766aeca6386e9$var$tooltips[hideTooltipId];
      }
    }
  };
  let showTooltip = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = null;
    closeOpenTooltips();
    ensureTooltipEntry();
    $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = true;
    open();
    if ($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout) {
      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout);
      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
    }
    if ($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout) {
      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout);
      $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
    }
  };
  let hideTooltip = (immediate) => {
    if (immediate) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
      close();
    } else if (!closeTimeout.current) {
      closeTimeout.current = setTimeout(() => {
        closeTimeout.current = null;
        close();
      }, $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN);
    }
    if ($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout) {
      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout);
      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
    }
    if ($af9cde49ea815e766aeca6386e9$var$globalWarmedUp) {
      if ($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout) {
        clearTimeout($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout);
      }
      $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = setTimeout(() => {
        delete $af9cde49ea815e766aeca6386e9$var$tooltips[id];
        $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
        $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = false;
      }, $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN);
    }
  };
  let warmupTooltip = () => {
    closeOpenTooltips();
    ensureTooltipEntry();
    if (!isOpen && !$af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout && !$af9cde49ea815e766aeca6386e9$var$globalWarmedUp) {
      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = setTimeout(() => {
        $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
        $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = true;
        showTooltip();
      }, delay);
    } else if (!isOpen) {
      showTooltip();
    }
  };
  useEffect5(() => {
    return () => {
      clearTimeout(closeTimeout.current);
      let tooltip = $af9cde49ea815e766aeca6386e9$var$tooltips[id];
      if (tooltip) {
        delete $af9cde49ea815e766aeca6386e9$var$tooltips[id];
      }
    };
  }, [id]);
  return {
    isOpen,
    open: (immediate) => {
      if (!immediate && delay > 0 && !closeTimeout.current) {
        warmupTooltip();
      } else {
        showTooltip();
      }
    },
    close: hideTooltip
  };
}

// node_modules/react-popper/lib/esm/utils.js
import {
  useEffect as useEffect6,
  useLayoutEffect as useLayoutEffect3
} from "react";
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? useLayoutEffect3 : useEffect6;

// node_modules/react-popper/lib/esm/usePopper.js
import {
  useMemo as useMemo4,
  useRef as useRef7,
  useState as useState6
} from "react";

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = rect.width / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = rect.height / offsetHeight || 1;
    }
  }
  return {
    width: round(rect.width / scaleX),
    height: round(rect.height / scaleY),
    top: round(rect.top / scaleY),
    right: round(rect.right / scaleX),
    bottom: round(rect.bottom / scaleY),
    left: round(rect.left / scaleX),
    x: round(rect.left / scaleX),
    y: round(rect.top / scaleY)
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css9 = getComputedStyle2(currentNode);
    if (css9.transform !== "none" || css9.perspective !== "none" || css9.contain === "paint" || ["transform", "perspective"].indexOf(css9.willChange) !== -1 || isFirefox && css9.willChange === "filter" || isFirefox && css9.filter && css9.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round2 = Math.round;

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round2(round2(x * dpr) / dpr) || 0,
    y: round2(round2(y * dpr) / dpr) || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = popperOffsets2[mainAxis] + overflow[mainSide];
    var max2 = popperOffsets2[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}

// node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
      return self2.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

// node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/react-popper/lib/esm/usePopper.js
var import_react_fast_compare = __toModule(require_react_fast_compare());
var EMPTY_MODIFIERS = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = useRef7(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _React$useState = useState6({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = useMemo4(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        setState({
          styles: fromEntries(elements.map(function(element) {
            return [element, state2.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function(element) {
            return [element, state2.attributes[element]];
          }))
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = useMemo4(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if ((0, import_react_fast_compare.default)(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = useRef7();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper2 = options.createPopper || createPopper;
    var popperInstance = createPopper2(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

// app/hooks/useRefState.ts
import {useCallback as useCallback4, useRef as useRef8, useState as useState7} from "react";
function useRefState() {
  const [, setValue] = useState7(null);
  const ref = useRef8(null);
  const combinedRef = useCallback4((next) => {
    ref.current = next;
    setValue(next);
  }, []);
  return [ref, combinedRef];
}

// app/rui/Tooltip.tsx
var tooltipCss = css5({
  maxWidth: 240,
  pointerEvents: "none",
  fontFamily: vars.fontFamilyDefault
});
var tooltipContentCss = css5([
  {
    border: `1px solid ${vars.outlineDimmer}`,
    borderRadius: vars.borderRadius8,
    backgroundColor: vars.backgroundHighest
  },
  rcss.p(8),
  rcss.shadow(1)
]);
var arrowCss = css5({
  display: "block",
  pointerEvents: "none",
  "&::after": {
    content: '""',
    display: "block",
    border: `1px solid ${vars.outlineDimmer}`,
    borderTopLeftRadius: vars.borderRadius4,
    background: vars.backgroundHighest,
    width: 12,
    height: 12,
    clipPath: "polygon(0 0, 100% 0, 0 100%)"
  },
  '[data-popper-placement^="top"] > &': {
    bottom: -6,
    "&::after": {
      transform: "rotate(225deg)"
    }
  },
  '[data-popper-placement^="right"] > &': {
    left: -6,
    "&::after": {
      transform: "rotate(315deg)"
    }
  },
  '[data-popper-placement^="bottom"] > &': {
    top: -6,
    "&::after": {
      transform: "rotate(45deg)"
    }
  },
  '[data-popper-placement^="left"] > &': {
    right: -6,
    "&::after": {
      transform: "rotate(135deg)"
    }
  }
});
var SpanView2 = SpecializedView("span");
function TargetedTooltip({
  placement,
  state,
  strategy,
  target: referenceElt,
  tooltip,
  tooltipProps: passedTooltipProps,
  zIndex
}) {
  const [popperElt, setPopperElt] = useState8(null);
  const [arrowElt, setArrowElt] = useState8(null);
  const {styles: styles2, attributes} = usePopper(referenceElt, popperElt, {
    modifiers: [
      {name: "arrow", options: {element: arrowElt, padding: 8}},
      {name: "offset", options: {offset: [0, 16]}}
    ],
    strategy,
    placement
  });
  const {tooltipProps} = useTooltip(passedTooltipProps, state);
  if (typeof window === "undefined") {
    return null;
  }
  return /* @__PURE__ */ createElement(SpanView2, {
    ...mergeProps({
      ref: setPopperElt,
      style: styles2.popper,
      css: [tooltipCss, {zIndex}]
    }, attributes.popper || {}, tooltipProps)
  }, /* @__PURE__ */ createElement(SpanView2, {
    css: tooltipContentCss
  }, tooltip), /* @__PURE__ */ createElement("span", {
    ref: setArrowElt,
    style: styles2.arrow,
    css: arrowCss
  }));
}
function Tooltip({
  children,
  defaultOpen,
  delay = 600,
  isDisabled,
  isOpen,
  onOpenChange,
  placement,
  strategy,
  tooltip,
  zIndex
}) {
  const [ref, setRef] = useRefState();
  const tooltipTriggerOptions = {
    defaultOpen,
    delay,
    isDisabled,
    isOpen,
    onOpenChange
  };
  const state = useTooltipTriggerState(tooltipTriggerOptions);
  const {triggerProps, tooltipProps} = useTooltipTrigger(tooltipTriggerOptions, state, ref);
  return /* @__PURE__ */ createElement(Fragment, null, typeof children === "function" ? children(triggerProps, setRef) : /* @__PURE__ */ createElement(SpanView2, {
    ...mergeProps({ref: setRef}, triggerProps)
  }, children), state.isOpen ? /* @__PURE__ */ createElement(TargetedTooltip, {
    placement,
    state,
    strategy,
    target: ref.current,
    tooltip,
    tooltipProps,
    zIndex
  }) : null);
}

// app/rui/IconButton.tsx
var IconSizeMap = {
  24: 16,
  28: 20,
  32: 24,
  36: 24,
  40: 24
};
var buttonReset2 = css6({
  border: "none",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal"
});
var ButtonView2 = SpecializedView("button");
function IconButtonInner({
  alt,
  children,
  colorway,
  disabled,
  innerRef,
  onClick,
  size = 24,
  triggerProps,
  type,
  ...props
}) {
  const {buttonProps} = useButton({
    isDisabled: disabled,
    onPress: onClick,
    type,
    "aria-label": alt
  }, innerRef);
  return /* @__PURE__ */ createElement(ButtonView2, {
    ...mergeProps({
      ref: innerRef,
      css: [
        buttonReset2,
        disabled && {color: vars.foregroundDimmest},
        interactive.listItem,
        rcss.borderRadius(8),
        rcss.center,
        {width: size, height: size},
        colorway && nofill(colorway)
      ]
    }, props, triggerProps, buttonProps)
  }, cloneElement2(children, {size: IconSizeMap[size]}));
}
function IconButton({
  alt,
  tooltipDelay,
  tooltipHidden,
  tooltipPlacement,
  tooltipText,
  tooltipZIndex = 5,
  ...props
}) {
  return /* @__PURE__ */ createElement(Tooltip, {
    delay: tooltipDelay,
    isDisabled: tooltipHidden,
    tooltip: tooltipText ?? alt,
    placement: tooltipPlacement,
    zIndex: tooltipZIndex
  }, (triggerProps, ref) => /* @__PURE__ */ createElement(IconButtonInner, {
    alt,
    innerRef: ref,
    triggerProps,
    ...props
  }));
}

// app/rui/Menu.tsx
import {useRef as useRef12} from "react";
import {css as css7} from "@emotion/react";

// node_modules/@react-stately/collections/dist/module.js
import _react5, {useMemo as useMemo5, useRef as useRef9} from "react";
function $e92117d6e5313ef8e7c10fac1de193ce$var$Item(props) {
  return null;
}
$e92117d6e5313ef8e7c10fac1de193ce$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
  let {
    childItems,
    title,
    children
  } = props;
  let rendered = props.title || props.children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
  if (!textValue && !(context != null && context.suppressTextValueWarning)) {
    console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.");
  }
  yield {
    type: "item",
    props,
    rendered,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: $e92117d6e5313ef8e7c10fac1de193ce$var$hasChildItems(props),
    *childNodes() {
      if (childItems) {
        for (let child of childItems) {
          yield {
            type: "item",
            value: child
          };
        }
      } else if (title) {
        let items = [];
        _react5.Children.forEach(children, (child) => {
          items.push({
            type: "item",
            element: child
          });
        });
        yield* items;
      }
    }
  };
};
function $e92117d6e5313ef8e7c10fac1de193ce$var$hasChildItems(props) {
  if (props.hasChildItems != null) {
    return props.hasChildItems;
  }
  if (props.childItems) {
    return true;
  }
  if (props.title && _react5.Children.count(props.children) > 0) {
    return true;
  }
  return false;
}
function $b2e76f05d3356a2e1df6ac80570fcd9$var$Section(props) {
  return null;
}
$b2e76f05d3356a2e1df6ac80570fcd9$var$Section.getCollectionNode = function* getCollectionNode2(props) {
  let {
    children,
    title,
    items
  } = props;
  yield {
    type: "section",
    hasChildNodes: true,
    rendered: title,
    "aria-label": props["aria-label"],
    *childNodes() {
      if (typeof children === "function") {
        if (!items) {
          throw new Error("props.children was a function but props.items is missing");
        }
        for (let item of items) {
          yield {
            type: "item",
            value: item,
            renderer: children
          };
        }
      } else {
        let items2 = [];
        _react5.Children.forEach(children, (child) => {
          items2.push({
            type: "item",
            element: child
          });
        });
        yield* items2;
      }
    }
  };
};
var $f8429209754fda4b9142d514065f4$export$CollectionBuilder = class {
  constructor() {
    this.context = void 0;
    this.cache = new WeakMap();
  }
  build(props, context) {
    this.context = context;
    return $f8429209754fda4b9142d514065f4$var$iterable(() => this.iterateCollection(props));
  }
  *iterateCollection(props) {
    let {
      children,
      items
    } = props;
    if (typeof children === "function") {
      if (!items) {
        throw new Error("props.children was a function but props.items is missing");
      }
      for (let item of props.items) {
        yield* this.getFullNode({
          value: item
        }, {
          renderer: children
        });
      }
    } else {
      let items2 = [];
      _react5.Children.forEach(children, (child) => {
        items2.push(child);
      });
      let index = 0;
      for (let item of items2) {
        let nodes = this.getFullNode({
          element: item,
          index
        }, {});
        for (let node of nodes) {
          index++;
          yield node;
        }
      }
    }
  }
  getKey(item, partialNode, state, parentKey) {
    if (item.key != null) {
      return item.key;
    }
    if (partialNode.type === "cell" && partialNode.key != null) {
      return "" + parentKey + partialNode.key;
    }
    let v = partialNode.value;
    if (v != null) {
      var _v$key;
      let key = (_v$key = v.key) != null ? _v$key : v.id;
      if (key == null) {
        throw new Error("No key found for item");
      }
      return key;
    }
    return parentKey ? parentKey + "." + partialNode.index : "$." + partialNode.index;
  }
  getChildState(state, partialNode) {
    return {
      renderer: partialNode.renderer || state.renderer
    };
  }
  *getFullNode(partialNode, state, parentKey, parentNode) {
    let element = partialNode.element;
    if (!element && partialNode.value && state && state.renderer) {
      let cached = this.cache.get(partialNode.value);
      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
        cached.index = partialNode.index;
        cached.parentKey = parentNode ? parentNode.key : null;
        yield cached;
        return;
      }
      element = state.renderer(partialNode.value);
    }
    if (/* @__PURE__ */ _react5.isValidElement(element)) {
      let type = element.type;
      if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
        let name = typeof element.type === "function" ? element.type.name : element.type;
        throw new Error("Unknown element <" + name + "> in collection.");
      }
      let childNodes = type.getCollectionNode(element.props, this.context);
      let index = partialNode.index;
      let result = childNodes.next();
      while (!result.done && result.value) {
        let childNode = result.value;
        partialNode.index = index;
        let nodeKey = childNode.key;
        if (!nodeKey) {
          nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
        }
        let nodes = this.getFullNode(_extends({}, childNode, {
          key: nodeKey,
          index,
          wrapper: $f8429209754fda4b9142d514065f4$var$compose(partialNode.wrapper, childNode.wrapper)
        }), this.getChildState(state, childNode), parentKey ? "" + parentKey + element.key : element.key, parentNode);
        let children = [...nodes];
        for (let node2 of children) {
          node2.value = childNode.value || partialNode.value;
          if (node2.value) {
            this.cache.set(node2.value, node2);
          }
          if (partialNode.type && node2.type !== partialNode.type) {
            throw new Error("Unsupported type <" + $f8429209754fda4b9142d514065f4$var$capitalize(node2.type) + "> in <" + $f8429209754fda4b9142d514065f4$var$capitalize(parentNode.type) + ">. Only <" + $f8429209754fda4b9142d514065f4$var$capitalize(partialNode.type) + "> is supported.");
          }
          index++;
          yield node2;
        }
        result = childNodes.next(children);
      }
      return;
    }
    if (partialNode.key == null) {
      return;
    }
    let builder = this;
    let node = {
      type: partialNode.type,
      props: partialNode.props,
      key: partialNode.key,
      parentKey: parentNode ? parentNode.key : null,
      value: partialNode.value,
      level: parentNode ? parentNode.level + 1 : 0,
      index: partialNode.index,
      rendered: partialNode.rendered,
      textValue: partialNode.textValue,
      "aria-label": partialNode["aria-label"],
      wrapper: partialNode.wrapper,
      shouldInvalidate: partialNode.shouldInvalidate,
      hasChildNodes: partialNode.hasChildNodes,
      childNodes: $f8429209754fda4b9142d514065f4$var$iterable(function* () {
        if (!partialNode.hasChildNodes) {
          return;
        }
        let index = 0;
        for (let child of partialNode.childNodes()) {
          if (child.key != null) {
            child.key = "" + node.key + child.key;
          }
          child.index = index;
          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
          for (let node2 of nodes) {
            index++;
            yield node2;
          }
        }
      })
    };
    yield node;
  }
};
function $f8429209754fda4b9142d514065f4$var$iterable(iterator) {
  let cache = [];
  let iterable = null;
  return {
    *[Symbol.iterator]() {
      for (let item of cache) {
        yield item;
      }
      if (!iterable) {
        iterable = iterator();
      }
      for (let item of iterable) {
        cache.push(item);
        yield item;
      }
    }
  };
}
function $f8429209754fda4b9142d514065f4$var$compose(outer, inner) {
  if (outer && inner) {
    return (element) => outer(inner(element));
  }
  if (outer) {
    return outer;
  }
  if (inner) {
    return inner;
  }
}
function $f8429209754fda4b9142d514065f4$var$capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function useCollection(props, factory, context, invalidators) {
  if (invalidators === void 0) {
    invalidators = [];
  }
  let builder = useMemo5(() => new $f8429209754fda4b9142d514065f4$export$CollectionBuilder(), []);
  let prev = useRef9(null);
  return useMemo5(() => {
    let nodes = builder.build(props, context);
    prev.current = factory(nodes, prev.current);
    return prev.current;
  }, [builder, props.children, props.items, context, ...invalidators]);
}
var $c10674539d06c96e1a2fbb6a54340$var$cache = new WeakMap();
function getItemCount(collection) {
  let count = $c10674539d06c96e1a2fbb6a54340$var$cache.get(collection);
  if (count != null) {
    return count;
  }
  count = 0;
  for (let item of collection) {
    if (item.type === "section") {
      count += getItemCount(item.childNodes);
    } else {
      count++;
    }
  }
  $c10674539d06c96e1a2fbb6a54340$var$cache.set(collection, count);
  return count;
}

// node_modules/@react-aria/i18n/dist/module.js
import _react6, {useEffect as useEffect7, useState as useState9, useContext as useContext5, useCallback as useCallback5, useMemo as useMemo6} from "react";
var $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
var $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) {
  if (Intl.Locale) {
    let script = new Intl.Locale(locale).maximize().script;
    return $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS.has(script);
  }
  let lang = locale.split("-")[0];
  return $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS.has(lang);
}
function $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale() {
  let locale = typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
  return {
    locale,
    direction: $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) ? "rtl" : "ltr"
  };
}
var $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();
var $e851d0b81d46abd5f971c8e95c27f1$var$listeners = new Set();
function $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale() {
  $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();
  for (let listener of $e851d0b81d46abd5f971c8e95c27f1$var$listeners) {
    listener($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  }
}
function $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale() {
  let isSSR = useIsSSR();
  let [defaultLocale, setDefaultLocale] = useState9($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
  useEffect7(() => {
    if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
      window.addEventListener("languagechange", $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
    }
    $e851d0b81d46abd5f971c8e95c27f1$var$listeners.add(setDefaultLocale);
    return () => {
      $e851d0b81d46abd5f971c8e95c27f1$var$listeners.delete(setDefaultLocale);
      if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
        window.removeEventListener("languagechange", $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
      }
    };
  }, []);
  if (isSSR) {
    return {
      locale: "en-US",
      direction: "ltr"
    };
  }
  return defaultLocale;
}
var $cff8541df3b5c83067b2ab3ee0d20$var$I18nContext = /* @__PURE__ */ _react6.createContext(null);
function useLocale() {
  let defaultLocale = $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale();
  let context = useContext5($cff8541df3b5c83067b2ab3ee0d20$var$I18nContext);
  return context || defaultLocale;
}
var $f58d206cee90f9c2bf3c03e4522c35$var$cache = new WeakMap();
var $b0007c63a64054c318efb8b6cd0053f$var$formatterCache = new Map();
var $a4045a18d7252bf6de9312e613c4e$var$cache = new Map();
function useCollator(options) {
  let {
    locale
  } = useLocale();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($a4045a18d7252bf6de9312e613c4e$var$cache.has(cacheKey)) {
    return $a4045a18d7252bf6de9312e613c4e$var$cache.get(cacheKey);
  }
  let formatter = new Intl.Collator(locale, options);
  $a4045a18d7252bf6de9312e613c4e$var$cache.set(cacheKey, formatter);
  return formatter;
}

// node_modules/@react-aria/selection/dist/module.js
import {useEffect as useEffect8, useRef as useRef10, useMemo as useMemo7} from "react";
function useTypeSelect(options) {
  let {
    keyboardDelegate,
    selectionManager,
    onTypeSelect
  } = options;
  let state = useRef10({
    search: "",
    timeout: null
  }).current;
  let onKeyDown = (e2) => {
    let character = $c78d7fa5f7d5832f9b4f97b33a679865$var$getStringForKey(e2.key);
    if (!character || e2.ctrlKey || e2.metaKey) {
      return;
    }
    if (character === " " && state.search.trim().length > 0) {
      e2.preventDefault();
      if (!("continuePropagation" in e2)) {
        e2.stopPropagation();
      }
    }
    state.search += character;
    let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
    if (key == null) {
      key = keyboardDelegate.getKeyForSearch(state.search);
    }
    if (key != null) {
      selectionManager.setFocusedKey(key);
      if (onTypeSelect) {
        onTypeSelect(key);
      }
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, 500);
  };
  return {
    typeSelectProps: {
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
    }
  };
}
function $c78d7fa5f7d5832f9b4f97b33a679865$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) {
    return key;
  }
  return "";
}
function $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2) {
  if (isMac()) {
    return e2.metaKey;
  }
  return e2.ctrlKey;
}
function useSelectableCollection(options) {
  let {
    selectionManager: manager,
    keyboardDelegate: delegate,
    ref,
    autoFocus = false,
    shouldFocusWrap = false,
    disallowEmptySelection = false,
    disallowSelectAll = false,
    selectOnFocus = false,
    disallowTypeAhead = false,
    shouldUseVirtualFocus,
    allowsTabNavigation = false,
    isVirtualized,
    scrollRef = ref
  } = options;
  let {
    direction
  } = useLocale();
  let onKeyDown = (e2) => {
    if (e2.altKey && e2.key === "Tab") {
      e2.preventDefault();
    }
    if (e2.altKey || !ref.current.contains(e2.target)) {
      return;
    }
    const navigateToKey = (key, childFocus) => {
      if (key != null) {
        manager.setFocusedKey(key, childFocus);
        if (e2.shiftKey && manager.selectionMode === "multiple") {
          manager.extendSelection(key);
        } else if (selectOnFocus) {
          manager.replaceSelection(key);
        }
      }
    };
    switch (e2.key) {
      case "ArrowDown": {
        if (delegate.getKeyBelow) {
          e2.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : delegate.getFirstKey == null ? void 0 : delegate.getFirstKey();
          if (nextKey == null && shouldFocusWrap) {
            nextKey = delegate.getFirstKey == null ? void 0 : delegate.getFirstKey(manager.focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case "ArrowUp": {
        if (delegate.getKeyAbove) {
          e2.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : delegate.getLastKey == null ? void 0 : delegate.getLastKey();
          if (nextKey == null && shouldFocusWrap) {
            nextKey = delegate.getLastKey == null ? void 0 : delegate.getLastKey(manager.focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case "ArrowLeft": {
        if (delegate.getKeyLeftOf) {
          e2.preventDefault();
          let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
        }
        break;
      }
      case "ArrowRight": {
        if (delegate.getKeyRightOf) {
          e2.preventDefault();
          let nextKey = delegate.getKeyRightOf(manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
        }
        break;
      }
      case "Home":
        if (delegate.getFirstKey) {
          e2.preventDefault();
          let firstKey = delegate.getFirstKey(manager.focusedKey, $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2));
          manager.setFocusedKey(firstKey);
          if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2) && e2.shiftKey && manager.selectionMode === "multiple") {
            manager.extendSelection(firstKey);
          } else if (selectOnFocus) {
            manager.replaceSelection(firstKey);
          }
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e2.preventDefault();
          let lastKey = delegate.getLastKey(manager.focusedKey, $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2));
          manager.setFocusedKey(lastKey);
          if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2) && e2.shiftKey && manager.selectionMode === "multiple") {
            manager.extendSelection(lastKey);
          } else if (selectOnFocus) {
            manager.replaceSelection(lastKey);
          }
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow) {
          e2.preventDefault();
          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove) {
          e2.preventDefault();
          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e2) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
          e2.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        e2.preventDefault();
        if (!disallowEmptySelection) {
          manager.clearSelection();
        }
        break;
      case "Tab": {
        if (!allowsTabNavigation) {
          if (e2.shiftKey) {
            ref.current.focus();
          } else {
            let walker = getFocusableTreeWalker(ref.current, {
              tabbable: true
            });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last) {
                next = last;
              }
            } while (last);
            if (next && !next.contains(document.activeElement)) {
              focusWithoutScrolling(next);
            }
          }
          break;
        }
      }
    }
  };
  let scrollPos = useRef10({
    top: 0,
    left: 0
  });
  useEvent(scrollRef, "scroll", isVirtualized ? null : () => {
    scrollPos.current = {
      top: scrollRef.current.scrollTop,
      left: scrollRef.current.scrollLeft
    };
  });
  let onFocus = (e2) => {
    if (manager.isFocused) {
      if (!e2.currentTarget.contains(e2.target)) {
        manager.setFocused(false);
      }
      return;
    }
    if (!e2.currentTarget.contains(e2.target)) {
      return;
    }
    manager.setFocused(true);
    if (manager.focusedKey == null) {
      let relatedTarget = e2.relatedTarget;
      if (relatedTarget && e2.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
        var _manager$lastSelected;
        manager.setFocusedKey((_manager$lastSelected = manager.lastSelectedKey) != null ? _manager$lastSelected : delegate.getLastKey());
      } else {
        var _manager$firstSelecte;
        manager.setFocusedKey((_manager$firstSelecte = manager.firstSelectedKey) != null ? _manager$firstSelecte : delegate.getFirstKey());
      }
    } else if (!isVirtualized) {
      scrollRef.current.scrollTop = scrollPos.current.top;
      scrollRef.current.scrollLeft = scrollPos.current.left;
      let element = scrollRef.current.querySelector('[data-key="' + manager.focusedKey + '"]');
      if (element) {
        focusWithoutScrolling(element);
        $a9b9aa71af07c56ab1d89ca45381f4b$var$scrollIntoView(scrollRef.current, element);
      }
    }
  };
  let onBlur = (e2) => {
    if (!e2.currentTarget.contains(e2.relatedTarget)) {
      manager.setFocused(false);
    }
  };
  const autoFocusRef = useRef10(autoFocus);
  useEffect8(() => {
    if (autoFocusRef.current) {
      let focusedKey = null;
      if (autoFocus === "first") {
        focusedKey = delegate.getFirstKey();
      }
      if (autoFocus === "last") {
        focusedKey = delegate.getLastKey();
      }
      let selectedKeys = manager.selectedKeys;
      if (selectedKeys.size) {
        focusedKey = selectedKeys.values().next().value;
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      if (focusedKey == null && !shouldUseVirtualFocus) {
        focusSafely(ref.current);
      }
    }
    autoFocusRef.current = false;
  }, []);
  useEffect8(() => {
    if (!isVirtualized && manager.focusedKey && scrollRef != null && scrollRef.current) {
      let element = scrollRef.current.querySelector('[data-key="' + manager.focusedKey + '"]');
      if (element) {
        $a9b9aa71af07c56ab1d89ca45381f4b$var$scrollIntoView(scrollRef.current, element);
      }
    }
  }, [isVirtualized, scrollRef, manager.focusedKey]);
  let handlers = {
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown(e2) {
      if (e2.currentTarget.contains(e2.target)) {
        e2.preventDefault();
      }
    }
  };
  let {
    typeSelectProps
  } = useTypeSelect({
    keyboardDelegate: delegate,
    selectionManager: manager
  });
  if (!disallowTypeAhead) {
    handlers = mergeProps(typeSelectProps, handlers);
  }
  let tabIndex;
  if (!shouldUseVirtualFocus) {
    tabIndex = manager.focusedKey == null ? 0 : -1;
  }
  return {
    collectionProps: _extends({}, handlers, {
      tabIndex
    })
  };
}
function $a9b9aa71af07c56ab1d89ca45381f4b$var$scrollIntoView(scrollView, element) {
  let offsetX = $a9b9aa71af07c56ab1d89ca45381f4b$var$relativeOffset(scrollView, element, "left");
  let offsetY = $a9b9aa71af07c56ab1d89ca45381f4b$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  let maxX = x + scrollView.offsetWidth;
  let maxY = y + scrollView.offsetHeight;
  if (offsetX <= x) {
    x = offsetX;
  } else if (offsetX + width > maxX) {
    x += offsetX + width - maxX;
  }
  if (offsetY <= y) {
    y = offsetY;
  } else if (offsetY + height > maxY) {
    y += offsetY + height - maxY;
  }
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
function $a9b9aa71af07c56ab1d89ca45381f4b$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) {
      break;
    } else if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}
function useSelectableItem(options) {
  let {
    selectionManager: manager,
    key,
    ref,
    shouldSelectOnPressUp,
    isVirtualized,
    shouldUseVirtualFocus,
    focus
  } = options;
  let onSelect = (e2) => manager.select(key, e2);
  let isFocused = key === manager.focusedKey;
  useEffect8(() => {
    if (isFocused && manager.isFocused && !shouldUseVirtualFocus && document.activeElement !== ref.current) {
      if (focus) {
        focus();
      } else {
        focusSafely(ref.current);
      }
    }
  }, [ref, isFocused, manager.focusedKey, manager.childFocusStrategy, manager.isFocused, shouldUseVirtualFocus]);
  let itemProps = {};
  if (!shouldUseVirtualFocus) {
    itemProps = {
      tabIndex: isFocused ? 0 : -1,
      onFocus(e2) {
        if (e2.target === ref.current) {
          manager.setFocusedKey(key);
        }
      }
    };
  }
  if (shouldSelectOnPressUp) {
    itemProps.onPressStart = (e2) => {
      if (e2.pointerType === "keyboard") {
        onSelect(e2);
      }
    };
    itemProps.onPressUp = (e2) => {
      if (e2.pointerType !== "keyboard") {
        onSelect(e2);
      }
    };
  } else {
    itemProps.onPressStart = (e2) => {
      if (e2.pointerType !== "touch") {
        onSelect(e2);
      }
    };
    itemProps.onPress = (e2) => {
      if (e2.pointerType === "touch") {
        onSelect(e2);
      }
    };
  }
  if (!isVirtualized) {
    itemProps["data-key"] = key;
  }
  return {
    itemProps
  };
}
var ListKeyboardDelegate = class {
  constructor(collection, disabledKeys, ref, collator) {
    this.collection = void 0;
    this.disabledKeys = void 0;
    this.ref = void 0;
    this.collator = void 0;
    this.collection = collection;
    this.disabledKeys = disabledKeys;
    this.ref = ref;
    this.collator = collator;
  }
  getKeyBelow(key) {
    key = this.collection.getKeyAfter(key);
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key)) {
        return key;
      }
      key = this.collection.getKeyAfter(key);
    }
  }
  getKeyAbove(key) {
    key = this.collection.getKeyBefore(key);
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key)) {
        return key;
      }
      key = this.collection.getKeyBefore(key);
    }
  }
  getFirstKey() {
    let key = this.collection.getFirstKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key)) {
        return key;
      }
      key = this.collection.getKeyAfter(key);
    }
  }
  getLastKey() {
    let key = this.collection.getLastKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (item.type === "item" && !this.disabledKeys.has(key)) {
        return key;
      }
      key = this.collection.getKeyBefore(key);
    }
  }
  getItem(key) {
    return this.ref.current.querySelector('[data-key="' + key + '"]');
  }
  getKeyPageAbove(key) {
    let menu = this.ref.current;
    let item = this.getItem(key);
    if (!item) {
      return null;
    }
    let pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
    while (item && item.offsetTop > pageY) {
      key = this.getKeyAbove(key);
      item = this.getItem(key);
    }
    return key;
  }
  getKeyPageBelow(key) {
    let menu = this.ref.current;
    let item = this.getItem(key);
    if (!item) {
      return null;
    }
    let pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
    while (item && item.offsetTop < pageY) {
      key = this.getKeyBelow(key);
      item = this.getItem(key);
    }
    return key;
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator) {
      return null;
    }
    let collection = this.collection;
    let key = fromKey || this.getFirstKey();
    while (key != null) {
      let item = collection.getItem(key);
      let substring = item.textValue.slice(0, search.length);
      if (item.textValue && this.collator.compare(substring, search) === 0) {
        return key;
      }
      key = this.getKeyBelow(key);
    }
    return null;
  }
};
function useSelectableList(props) {
  let {
    selectionManager,
    collection,
    disabledKeys,
    ref,
    keyboardDelegate,
    autoFocus,
    shouldFocusWrap,
    isVirtualized,
    disallowEmptySelection,
    selectOnFocus = false,
    disallowTypeAhead,
    shouldUseVirtualFocus,
    allowsTabNavigation
  } = props;
  let collator = useCollator({
    usage: "search",
    sensitivity: "base"
  });
  let delegate = useMemo7(() => keyboardDelegate || new ListKeyboardDelegate(collection, disabledKeys, ref, collator), [keyboardDelegate, collection, disabledKeys, ref, collator]);
  let {
    collectionProps
  } = useSelectableCollection({
    ref,
    selectionManager,
    keyboardDelegate: delegate,
    autoFocus,
    shouldFocusWrap,
    disallowEmptySelection,
    selectOnFocus,
    disallowTypeAhead,
    shouldUseVirtualFocus,
    allowsTabNavigation,
    isVirtualized,
    scrollRef: ref
  });
  return {
    listProps: collectionProps
  };
}

// node_modules/@react-aria/menu/dist/module.js
function useMenu(props, state, ref) {
  let {
    shouldFocusWrap = true
  } = props, otherProps = _objectWithoutPropertiesLoose(props, ["shouldFocusWrap"]);
  if (!props["aria-label"] && !props["aria-labelledby"]) {
    console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  }
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let {
    listProps
  } = useSelectableList(_extends({}, otherProps, {
    ref,
    selectionManager: state.selectionManager,
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    shouldFocusWrap
  }));
  return {
    menuProps: mergeProps(domProps, _extends({
      role: "menu"
    }, listProps))
  };
}
function useMenuItem(props, state, ref) {
  let {
    isSelected,
    isDisabled,
    key,
    onClose,
    closeOnSelect,
    isVirtualized,
    onAction
  } = props;
  let role = "menuitem";
  if (state.selectionManager.selectionMode === "single") {
    role = "menuitemradio";
  } else if (state.selectionManager.selectionMode === "multiple") {
    role = "menuitemcheckbox";
  }
  let labelId = useSlotId();
  let descriptionId = useSlotId();
  let keyboardId = useSlotId();
  let ariaProps = {
    "aria-disabled": isDisabled,
    role,
    "aria-label": props["aria-label"],
    "aria-labelledby": labelId,
    "aria-describedby": [descriptionId, keyboardId].filter(Boolean).join(" ") || void 0
  };
  if (state.selectionManager.selectionMode !== "none") {
    ariaProps["aria-checked"] = isSelected;
  }
  if (isVirtualized) {
    ariaProps["aria-posinset"] = state.collection.getItem(key).index;
    ariaProps["aria-setsize"] = getItemCount(state.collection);
  }
  let onKeyDown = (e2) => {
    if (e2.repeat) {
      return;
    }
    switch (e2.key) {
      case " ":
        if (!isDisabled && state.selectionManager.selectionMode === "none" && closeOnSelect !== false && onClose) {
          onClose();
        }
        break;
      case "Enter":
        if (!isDisabled && closeOnSelect !== false && onClose) {
          onClose();
        }
        break;
    }
  };
  let onPressStart = (e2) => {
    if (e2.pointerType === "keyboard" && onAction) {
      onAction(key);
    }
  };
  let onPressUp = (e2) => {
    if (e2.pointerType !== "keyboard") {
      if (onAction) {
        onAction(key);
      }
      if (onClose && (closeOnSelect != null ? closeOnSelect : state.selectionManager.selectionMode !== "multiple")) {
        onClose();
      }
    }
  };
  let {
    itemProps
  } = useSelectableItem({
    selectionManager: state.selectionManager,
    key,
    ref,
    shouldSelectOnPressUp: true
  });
  let {
    pressProps
  } = usePress(mergeProps({
    onPressStart,
    onPressUp,
    onKeyDown,
    isDisabled
  }, itemProps));
  let {
    hoverProps
  } = useHover({
    isDisabled,
    onHoverStart() {
      if (!isFocusVisible()) {
        state.selectionManager.setFocused(true);
        state.selectionManager.setFocusedKey(key);
      }
    }
  });
  return {
    menuItemProps: _extends({}, ariaProps, mergeProps(pressProps, hoverProps)),
    labelProps: {
      id: labelId
    },
    descriptionProps: {
      id: descriptionId
    },
    keyboardShortcutProps: {
      id: keyboardId
    }
  };
}

// node_modules/@react-stately/selection/dist/module.js
import {useMemo as useMemo8, useRef as useRef11, useState as useState10} from "react";
var $c91e86e24f2dc9a2182dcc2674c58c$export$Selection = class extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    this.anchorKey = void 0;
    this.currentKey = void 0;
    if (keys instanceof $c91e86e24f2dc9a2182dcc2674c58c$export$Selection) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
};
function useMultipleSelectionState(props) {
  let {
    selectionMode = "none",
    disallowEmptySelection
  } = props;
  let isFocusedRef = useRef11(false);
  let [, setFocused] = useState10(false);
  let focusedKeyRef = useRef11(null);
  let childFocusStrategyRef = useRef11(null);
  let [, setFocusedKey] = useState10(null);
  let selectedKeysProp = useMemo8(() => $c86d35e876e048ac11515eee40c7$var$convertSelection(props.selectedKeys), [props.selectedKeys]);
  let defaultSelectedKeys = useMemo8(() => $c86d35e876e048ac11515eee40c7$var$convertSelection(props.defaultSelectedKeys, new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection()), [props.defaultSelectedKeys]);
  let [selectedKeys, setSelectedKeys] = useControlledState(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
  let disabledKeysProp = useMemo8(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);
  return {
    selectionMode,
    disallowEmptySelection,
    get isFocused() {
      return isFocusedRef.current;
    },
    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },
    get focusedKey() {
      return focusedKeyRef.current;
    },
    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },
    setFocusedKey(k, childFocusStrategy) {
      if (childFocusStrategy === void 0) {
        childFocusStrategy = "first";
      }
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },
    selectedKeys,
    setSelectedKeys,
    disabledKeys: disabledKeysProp
  };
}
function $c86d35e876e048ac11515eee40c7$var$convertSelection(selection, defaultValue) {
  if (!selection) {
    return defaultValue;
  }
  return selection === "all" ? "all" : new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(selection);
}
var SelectionManager = class {
  constructor(collection, state, options) {
    var _options$allowsCellSe;
    this.collection = void 0;
    this.state = void 0;
    this.allowsCellSelection = void 0;
    this._isSelectAll = void 0;
    this.collection = collection;
    this.state = state;
    this.allowsCellSelection = (_options$allowsCellSe = options == null ? void 0 : options.allowsCellSelection) != null ? _options$allowsCellSe : false;
    this._isSelectAll = null;
  }
  get selectionMode() {
    return this.state.selectionMode;
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  get isFocused() {
    return this.state.isFocused;
  }
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  get focusedKey() {
    return this.state.focusedKey;
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  setFocusedKey(key, childFocusStrategy) {
    this.state.setFocusedKey(key, childFocusStrategy);
  }
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  get rawSelection() {
    return this.state.selectedKeys;
  }
  isSelected(key) {
    if (this.state.selectionMode === "none") {
      return false;
    }
    key = this.getKey(key);
    return this.state.selectedKeys === "all" ? !this.state.disabledKeys.has(key) : this.state.selectedKeys.has(key);
  }
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  get isSelectAll() {
    if (this.isEmpty) {
      return false;
    }
    if (this.state.selectedKeys === "all") {
      return true;
    }
    if (this._isSelectAll != null) {
      return this._isSelectAll;
    }
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
    return this._isSelectAll;
  }
  get firstSelectedKey() {
    var _first;
    let first = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || (item == null ? void 0 : item.index) < first.index) {
        first = item;
      }
    }
    return (_first = first) == null ? void 0 : _first.key;
  }
  get lastSelectedKey() {
    var _last;
    let last = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || (item == null ? void 0 : item.index) > last.index) {
        last = item;
      }
    }
    return (_last = last) == null ? void 0 : _last.key;
  }
  extendSelection(toKey) {
    toKey = this.getKey(toKey);
    let selection;
    if (this.state.selectedKeys === "all") {
      selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection([toKey], toKey, toKey);
    } else {
      let selectedKeys = this.state.selectedKeys;
      let anchorKey = selectedKeys.anchorKey || toKey;
      selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(selectedKeys, anchorKey, toKey);
      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey)) {
        selection.delete(key);
      }
      for (let key of this.getKeyRange(toKey, anchorKey)) {
        if (!this.state.disabledKeys.has(key)) {
          selection.add(key);
        }
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);
    if (fromItem && toItem) {
      if (fromItem.index <= toItem.index) {
        return this.getKeyRangeInternal(from, to);
      }
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    let keys = [];
    let key = from;
    while (key) {
      let item = this.collection.getItem(key);
      if (item && item.type === "item" || item.type === "cell" && this.allowsCellSelection) {
        keys.push(key);
      }
      if (key === to) {
        return keys;
      }
      key = this.collection.getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item) {
      return key;
    }
    if (item.type === "cell" && this.allowsCellSelection) {
      return key;
    }
    while (item.type !== "item" && item.parentKey) {
      item = this.collection.getItem(item.parentKey);
    }
    if (!item || item.type !== "item") {
      return null;
    }
    return item.key;
  }
  toggleSelection(key) {
    key = this.getKey(key);
    if (key == null) {
      return;
    }
    let keys = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(key)) {
      keys.delete(key);
    } else {
      keys.add(key);
      keys.anchorKey = key;
      keys.currentKey = key;
    }
    if (this.disallowEmptySelection && keys.size === 0) {
      return;
    }
    this.state.setSelectedKeys(keys);
  }
  replaceSelection(key) {
    key = this.getKey(key);
    if (key == null) {
      return;
    }
    this.state.setSelectedKeys(new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection([key], key, key));
  }
  setSelectedKeys(keys) {
    if (this.selectionMode === "none") {
      return;
    }
    let selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection();
    for (let key of keys) {
      key = this.getKey(key);
      if (key != null) {
        selection.add(key);
        if (this.selectionMode === "single") {
          break;
        }
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getSelectAllKeys() {
    let keys = [];
    let addKeys = (key) => {
      while (key) {
        if (!this.state.disabledKeys.has(key)) {
          let item = this.collection.getItem(key);
          if (item.type === "item") {
            keys.push(key);
          }
          if (item.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) {
            addKeys([...item.childNodes][0].key);
          }
        }
        key = this.collection.getKeyAfter(key);
      }
    };
    addKeys(this.collection.getFirstKey());
    return keys;
  }
  selectAll() {
    if (this.selectionMode === "multiple") {
      this.state.setSelectedKeys("all");
    }
  }
  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) {
      this.state.setSelectedKeys(new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection());
    }
  }
  toggleSelectAll() {
    if (this.isSelectAll) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
  }
  select(key, e2) {
    if (this.selectionMode === "none") {
      return;
    }
    if (this.selectionMode === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection) {
        this.toggleSelection(key);
      } else {
        this.replaceSelection(key);
      }
    } else if (e2 && e2.shiftKey) {
      this.extendSelection(key);
    } else {
      this.toggleSelection(key);
    }
  }
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys) {
      return true;
    }
    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size) {
      return false;
    }
    for (let key of selection) {
      if (!selectedKeys.has(key)) {
        return false;
      }
    }
    for (let key of selectedKeys) {
      if (!selection.has(key)) {
        return false;
      }
    }
    return true;
  }
};

// node_modules/@react-stately/tree/dist/module.js
import {useEffect as useEffect9, useMemo as useMemo9} from "react";
var $afa6f708e32ecf7f97d9a58dfd59c$var$_Symbol$iterator;
$afa6f708e32ecf7f97d9a58dfd59c$var$_Symbol$iterator = Symbol.iterator;
var $afa6f708e32ecf7f97d9a58dfd59c$export$TreeCollection = class {
  constructor(nodes, _temp) {
    var _last;
    let {
      expandedKeys
    } = _temp === void 0 ? {} : _temp;
    this.keyMap = new Map();
    this.iterable = void 0;
    this.firstKey = void 0;
    this.lastKey = void 0;
    this.iterable = nodes;
    expandedKeys = expandedKeys || new Set();
    let visit = (node) => {
      this.keyMap.set(node.key, node);
      if (node.childNodes && (node.type === "section" || expandedKeys.has(node.key))) {
        for (let child of node.childNodes) {
          visit(child);
        }
      }
    };
    for (let node of nodes) {
      visit(node);
    }
    let last;
    let index = 0;
    for (let [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item") {
        node.index = index++;
      }
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = (_last = last) == null ? void 0 : _last.key;
  }
  *[$afa6f708e32ecf7f97d9a58dfd59c$var$_Symbol$iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }
};
function useTreeState(props) {
  let [expandedKeys, setExpandedKeys] = useControlledState(props.expandedKeys ? new Set(props.expandedKeys) : void 0, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
  let selectionState = useMultipleSelectionState(props);
  let disabledKeys = useMemo9(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);
  let tree = useCollection(props, (nodes) => new $afa6f708e32ecf7f97d9a58dfd59c$export$TreeCollection(nodes, {
    expandedKeys
  }), null, [expandedKeys]);
  useEffect9(() => {
    if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) {
      selectionState.setFocusedKey(null);
    }
  }, [tree, selectionState.focusedKey]);
  let onToggle = (key) => {
    setExpandedKeys((expandedKeys2) => $f51dc3c5c900bd3cdb4a06df11d84697$var$toggleKey(expandedKeys2, key));
  };
  return {
    collection: tree,
    expandedKeys,
    disabledKeys,
    toggleKey: onToggle,
    selectionManager: new SelectionManager(tree, selectionState)
  };
}
function $f51dc3c5c900bd3cdb4a06df11d84697$var$toggleKey(set, key) {
  let res = new Set(set);
  if (res.has(key)) {
    res.delete(key);
  } else {
    res.add(key);
  }
  return res;
}

// app/rui/Menu.tsx
var menuPopupCss = css7([
  rcss.py(4),
  {
    border: `1px solid ${vars.outlineDimmest}`,
    borderRadius: vars.borderRadius8,
    backgroundColor: vars2.interactiveBackground
  }
]);
var menuItemCss = css7([
  rcss.p(8),
  {
    ":not([disabled])": {
      cursor: "pointer",
      "&[data-focused=true]": {
        backgroundColor: vars2.interactiveBackgroundActive
      }
    }
  }
]);
var ButtonView3 = SpecializedView("button");
var DivView = SpecializedView("div");
var UlView = SpecializedView("ul");
var LiView = SpecializedView("li");
function MenuItem({item, state, ...props}) {
  const isDisabled = state.disabledKeys.has(item.key);
  const isFocused = state.selectionManager.isFocused && state.selectionManager.focusedKey === item.key;
  const ref = useRef12(null);
  const {menuItemProps} = useMenuItem({
    key: item.key,
    "aria-label": item["aria-label"],
    isDisabled,
    ...props
  }, state, ref);
  return /* @__PURE__ */ createElement(LiView, {
    ...mergeProps({ref, css: menuItemCss, "data-focused": isFocused}, menuItemProps)
  }, item.rendered);
}
function Menu({
  menuProps: menuPropsFromTrigger = {},
  label,
  onAction,
  onClose,
  ...props
}) {
  const state = useTreeState({...props, selectionMode: "none"});
  const ref = useRef12(null);
  const {menuProps} = useMenu({"aria-label": label, ...props}, state, ref);
  return /* @__PURE__ */ createElement(UlView, {
    ...mergeProps({ref}, menuProps, menuPropsFromTrigger)
  }, [...state.collection].map((item) => /* @__PURE__ */ createElement(MenuItem, {
    key: item.key,
    item,
    onAction,
    onClose,
    state
  })));
}

// app/rui/Select.tsx
import {
  cloneElement as cloneElement5
} from "react";

// node_modules/downshift/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/downshift/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/downshift/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/downshift/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/downshift/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/downshift/dist/downshift.esm.js
var import_prop_types = __toModule(require_prop_types());
var import_react_is = __toModule(require_react_is2());
import {cloneElement as cloneElement3, Component, useRef as useRef13, useEffect as useEffect10, useCallback as useCallback6, useLayoutEffect as useLayoutEffect4, useReducer, useMemo as useMemo10} from "react";

// node_modules/compute-scroll-into-view/dist/index.module.js
function t(t2) {
  return typeof t2 == "object" && t2 != null && t2.nodeType === 1;
}
function e(t2, e2) {
  return (!e2 || t2 !== "hidden") && t2 !== "visible" && t2 !== "clip";
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i : 0;
}
function index_module_default(e2, i) {
  var o = window, l = i.scrollMode, d = i.block, u = i.inline, h = i.boundary, a = i.skipOverflowHiddenElements, c = typeof h == "function" ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var f = document.scrollingElement || document.documentElement, s = [], p = e2; t(p) && c(p); ) {
    if ((p = p.parentElement) === f) {
      s.push(p);
      break;
    }
    p != null && p === document.body && n(p) && !n(document.documentElement) || p != null && n(p, a) && s.push(p);
  }
  for (var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e2.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, E = W.right, M = W.bottom, V = W.left, x = d === "start" || d === "nearest" ? y : d === "end" ? M : y + b / 2, I = u === "center" ? V + H / 2 : u === "end" ? E : V, C = [], T = 0; T < s.length; T++) {
    var k = s[T], B = k.getBoundingClientRect(), D = B.height, O = B.width, R = B.top, X = B.right, Y = B.bottom, L = B.left;
    if (l === "if-needed" && y >= 0 && V >= 0 && M <= g && E <= m && y >= R && M <= Y && V >= L && E <= X)
      return C;
    var S = getComputedStyle(k), j = parseInt(S.borderLeftWidth, 10), q = parseInt(S.borderTopWidth, 10), z = parseInt(S.borderRightWidth, 10), A = parseInt(S.borderBottomWidth, 10), F = 0, G = 0, J = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - z : 0, K = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - q - A : 0;
    if (f === k)
      F = d === "start" ? x : d === "end" ? x - g : d === "nearest" ? r(v, v + g, g, q, A, v + x, v + x + b, b) : x - g / 2, G = u === "start" ? I : u === "center" ? I - m / 2 : u === "end" ? I - m : r(w, w + m, m, j, z, w + I, w + I + H, H), F = Math.max(0, F + v), G = Math.max(0, G + w);
    else {
      F = d === "start" ? x - R - q : d === "end" ? x - Y + A + K : d === "nearest" ? r(R, Y, D, q, A + K, x, x + b, b) : x - (R + D / 2) + K / 2, G = u === "start" ? I - L - j : u === "center" ? I - (L + O / 2) + J / 2 : u === "end" ? I - X + z + J : r(L, X, O, j, z + J, I, I + H, H);
      var N = k.scrollLeft, P = k.scrollTop;
      x += P - (F = Math.max(0, Math.min(P + F, k.scrollHeight - D + K))), I += N - (G = Math.max(0, Math.min(N + G, k.scrollWidth - O + J)));
    }
    C.push({el: k, top: F, left: G});
  }
  return C;
}

// node_modules/downshift/node_modules/tslib/modules/index.js
var import_tslib = __toModule(require_tslib());
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar: __exportStar2,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/downshift/dist/downshift.esm.js
var idCounter = 0;
function cbToCb(cb) {
  return typeof cb === "function" ? cb : noop;
}
function noop() {
}
function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }
  var actions = index_module_default(node, {
    boundary: menuNode,
    block: "nearest",
    scrollMode: "if-needed"
  });
  actions.forEach(function(_ref) {
    var el = _ref.el, top2 = _ref.top, left2 = _ref.left;
    el.scrollTop = top2;
    el.scrollLeft = left2;
  });
}
function isOrContainsNode(parent, child, environment) {
  var result = parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
  return result;
}
function debounce2(fn2, time) {
  var timeoutId;
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel();
    timeoutId = setTimeout(function() {
      timeoutId = null;
      fn2.apply(void 0, args);
    }, time);
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return fns.some(function(fn2) {
      if (fn2) {
        fn2.apply(void 0, [event].concat(args));
      }
      return event.preventDownshiftDefault || event.hasOwnProperty("nativeEvent") && event.nativeEvent.preventDownshiftDefault;
    });
  };
}
function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }
  return function(node) {
    refs.forEach(function(ref) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
function generateId() {
  return String(idCounter++);
}
function getA11yStatusMessage$1(_ref2) {
  var isOpen = _ref2.isOpen, resultCount = _ref2.resultCount, previousResultCount = _ref2.previousResultCount;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }
  return "";
}
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
function isDOMElement(element) {
  return typeof element.type === "string";
}
function getElementProps(element) {
  return element.props;
}
function requiredProp(fnName, propName) {
  console.error('The property "' + propName + '" is required in "' + fnName + '"');
}
var stateKeys = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function pickState(state) {
  if (state === void 0) {
    state = {};
  }
  var result = {};
  stateKeys.forEach(function(k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
function getState(state, props) {
  return Object.keys(state).reduce(function(prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
function isControlledProp(props, key) {
  return props[key] !== void 0;
}
function normalizeArrowKey(event) {
  var key = event.key, keyCode = event.keyCode;
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) {
    return "Arrow" + key;
  }
  return key;
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }
  if (itemCount === 0) {
    return -1;
  }
  var itemsLastIndex = itemCount - 1;
  if (typeof baseIndex !== "number" || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }
  var newIndex = baseIndex + moveAmount;
  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }
  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }
  return nonDisabledNewIndex;
}
function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);
  if (!currentElementNode || !currentElementNode.hasAttribute("disabled")) {
    return baseIndex;
  }
  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute("disabled")) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute("disabled")) {
        return _index;
      }
    }
  }
  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }
  return -1;
}
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }
  return downshiftElements.some(function(contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment));
  });
}
var validateControlledUnchanged = noop;
if (true) {
  validateControlledUnchanged = function validateControlledUnchanged2(state, prevProps, nextProps) {
    var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
    Object.keys(state).forEach(function(propKey) {
      if (prevProps[propKey] !== void 0 && nextProps[propKey] === void 0) {
        console.error('downshift: A component has changed the controlled prop "' + propKey + '" to be uncontrolled. ' + warningDescription);
      } else if (prevProps[propKey] === void 0 && nextProps[propKey] !== void 0) {
        console.error('downshift: A component has changed the uncontrolled prop "' + propKey + '" to be controlled. ' + warningDescription);
      }
    });
  };
}
var cleanupStatus = debounce2(function(documentProp) {
  getStatusDiv(documentProp).textContent = "";
}, 500);
function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);
  if (!status) {
    return;
  }
  div.textContent = status;
  cleanupStatus(documentProp);
}
function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }
  var statusDiv = documentProp.getElementById("a11y-status-message");
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = documentProp.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}
var unknown = true ? "__autocomplete_unknown__" : 0;
var mouseUp = true ? "__autocomplete_mouseup__" : 1;
var itemMouseEnter = true ? "__autocomplete_item_mouseenter__" : 2;
var keyDownArrowUp = true ? "__autocomplete_keydown_arrow_up__" : 3;
var keyDownArrowDown = true ? "__autocomplete_keydown_arrow_down__" : 4;
var keyDownEscape = true ? "__autocomplete_keydown_escape__" : 5;
var keyDownEnter = true ? "__autocomplete_keydown_enter__" : 6;
var keyDownHome = true ? "__autocomplete_keydown_home__" : 7;
var keyDownEnd = true ? "__autocomplete_keydown_end__" : 8;
var clickItem = true ? "__autocomplete_click_item__" : 9;
var blurInput = true ? "__autocomplete_blur_input__" : 10;
var changeInput = true ? "__autocomplete_change_input__" : 11;
var keyDownSpaceButton = true ? "__autocomplete_keydown_space_button__" : 12;
var clickButton = true ? "__autocomplete_click_button__" : 13;
var blurButton = true ? "__autocomplete_blur_button__" : 14;
var controlledPropUpdatedSelectedItem = true ? "__autocomplete_controlled_prop_updated_selected_item__" : 15;
var touchEnd = true ? "__autocomplete_touchend__" : 16;
var stateChangeTypes$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown,
  mouseUp,
  itemMouseEnter,
  keyDownArrowUp,
  keyDownArrowDown,
  keyDownEscape,
  keyDownEnter,
  keyDownHome,
  keyDownEnd,
  clickItem,
  blurInput,
  changeInput,
  keyDownSpaceButton,
  clickButton,
  blurButton,
  controlledPropUpdatedSelectedItem,
  touchEnd
});
var _excluded$4 = ["refKey", "ref"];
var _excluded2$3 = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"];
var _excluded3$2 = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"];
var _excluded4$1 = ["refKey", "ref"];
var _excluded5$1 = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"];
var Downshift = /* @__PURE__ */ function() {
  var Downshift2 = /* @__PURE__ */ function(_Component) {
    _inheritsLoose(Downshift3, _Component);
    function Downshift3(_props) {
      var _this;
      _this = _Component.call(this, _props) || this;
      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";
      _this.getItemId = _this.props.getItemId || function(index) {
        return _this.id + "-item-" + index;
      };
      _this.input = null;
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];
      _this.internalSetTimeout = function(fn2, time) {
        var id = setTimeout(function() {
          _this.timeoutIds = _this.timeoutIds.filter(function(i) {
            return i !== id;
          });
          fn2();
        }, time);
        _this.timeoutIds.push(id);
      };
      _this.setItemCount = function(count) {
        _this.itemCount = count;
      };
      _this.unsetItemCount = function() {
        _this.itemCount = null;
      };
      _this.setHighlightedIndex = function(highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_extends2({
          highlightedIndex
        }, otherStateToSet));
      };
      _this.clearSelection = function(cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };
      _this.selectItem = function(item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(_extends2({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };
      _this.selectItemAtIndex = function(itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];
        if (item == null) {
          return;
        }
        _this.selectItem(item, otherStateToSet, cb);
      };
      _this.selectHighlightedItem = function(otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };
      _this.internalSetState = function(stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === "function";
        if (!isStateToSetFunction && stateToSet.hasOwnProperty("inputValue")) {
          _this.props.onInputValueChange(stateToSet.inputValue, _extends2({}, _this.getStateAndHelpers(), stateToSet));
        }
        return _this.setState(function(state) {
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
          newStateToSet = _this.props.stateReducer(state, newStateToSet);
          isItemSelected = newStateToSet.hasOwnProperty("selectedItem");
          var nextState = {};
          var nextFullState = {};
          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }
          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(function(key) {
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            }
            if (key === "type") {
              return;
            }
            nextFullState[key] = newStateToSet[key];
            if (!isControlledProp(_this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          });
          if (isStateToSetFunction && newStateToSet.hasOwnProperty("inputValue")) {
            _this.props.onInputValueChange(newStateToSet.inputValue, _extends2({}, _this.getStateAndHelpers(), newStateToSet));
          }
          return nextState;
        }, function() {
          cbToCb(cb)();
          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }
          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }
          if (onChangeArg !== void 0) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          }
          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };
      _this.rootRef = function(node) {
        return _this._rootNode = node;
      };
      _this.getRootProps = function(_temp, _temp2) {
        var _extends22;
        var _ref = _temp === void 0 ? {} : _temp, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest = _objectWithoutPropertiesLoose2(_ref, _excluded$4);
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$suppressRefErro = _ref2.suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;
        var _this$getState = _this.getState(), isOpen = _this$getState.isOpen;
        return _extends2((_extends22 = {}, _extends22[refKey] = handleRefs(ref, _this.rootRef), _extends22.role = "combobox", _extends22["aria-expanded"] = isOpen, _extends22["aria-haspopup"] = "listbox", _extends22["aria-owns"] = isOpen ? _this.menuId : null, _extends22["aria-labelledby"] = _this.labelId, _extends22), rest);
      };
      _this.keyDownHandlers = {
        ArrowDown: function ArrowDown(event) {
          var _this2 = this;
          event.preventDefault();
          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function() {
              var itemCount = _this2.getItemCount();
              if (itemCount > 0) {
                var _this2$getState = _this2.getState(), highlightedIndex = _this2$getState.highlightedIndex;
                var nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, function(index) {
                  return _this2.getItemNodeFromIndex(index);
                });
                _this2.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp: function ArrowUp(event) {
          var _this3 = this;
          event.preventDefault();
          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function() {
              var itemCount = _this3.getItemCount();
              if (itemCount > 0) {
                var _this3$getState = _this3.getState(), highlightedIndex = _this3$getState.highlightedIndex;
                var nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, function(index) {
                  return _this3.getItemNodeFromIndex(index);
                });
                _this3.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter: function Enter(event) {
          if (event.which === 229) {
            return;
          }
          var _this$getState2 = this.getState(), isOpen = _this$getState2.isOpen, highlightedIndex = _this$getState2.highlightedIndex;
          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);
            if (item == null || itemNode && itemNode.hasAttribute("disabled")) {
              return;
            }
            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape: function Escape(event) {
          event.preventDefault();
          this.reset(_extends2({
            type: keyDownEscape
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }
      };
      _this.buttonKeyDownHandlers = _extends2({}, _this.keyDownHandlers, {
        " ": function _(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      });
      _this.inputKeyDownHandlers = _extends2({}, _this.keyDownHandlers, {
        Home: function Home(event) {
          var _this4 = this;
          var _this$getState3 = this.getState(), isOpen = _this$getState3.isOpen;
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          var itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          var newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, function(index) {
            return _this4.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End: function End(event) {
          var _this5 = this;
          var _this$getState4 = this.getState(), isOpen = _this$getState4.isOpen;
          if (!isOpen) {
            return;
          }
          event.preventDefault();
          var itemCount = this.getItemCount();
          if (itemCount <= 0 || !isOpen) {
            return;
          }
          var newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, function(index) {
            return _this5.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      });
      _this.getToggleButtonProps = function(_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3, onClick = _ref3.onClick;
        _ref3.onPress;
        var onKeyDown = _ref3.onKeyDown, onKeyUp = _ref3.onKeyUp, onBlur = _ref3.onBlur, rest = _objectWithoutPropertiesLoose2(_ref3, _excluded2$3);
        var _this$getState5 = _this.getState(), isOpen = _this$getState5.isOpen;
        var enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return _extends2({
          type: "button",
          role: "button",
          "aria-label": isOpen ? "close menu" : "open menu",
          "aria-haspopup": true,
          "data-toggle": true
        }, eventHandlers, rest);
      };
      _this.buttonHandleKeyUp = function(event) {
        event.preventDefault();
      };
      _this.buttonHandleKeyDown = function(event) {
        var key = normalizeArrowKey(event);
        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
        }
      };
      _this.buttonHandleClick = function(event) {
        event.preventDefault();
        if (_this.props.environment.document.activeElement === _this.props.environment.document.body) {
          event.target.focus();
        }
        if (false) {
          _this.toggleMenu({
            type: clickButton
          });
        } else {
          _this.internalSetTimeout(function() {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };
      _this.buttonHandleBlur = function(event) {
        var blurTarget = event.target;
        _this.internalSetTimeout(function() {
          if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget) {
            _this.reset({
              type: blurButton
            });
          }
        });
      };
      _this.getLabelProps = function(props) {
        return _extends2({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };
      _this.getInputProps = function(_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4, onKeyDown = _ref4.onKeyDown, onBlur = _ref4.onBlur, onChange = _ref4.onChange, onInput = _ref4.onInput;
        _ref4.onChangeText;
        var rest = _objectWithoutPropertiesLoose2(_ref4, _excluded3$2);
        var onChangeKey;
        var eventHandlers = {};
        {
          onChangeKey = "onChange";
        }
        var _this$getState6 = _this.getState(), inputValue = _this$getState6.inputValue, isOpen = _this$getState6.isOpen, highlightedIndex = _this$getState6.highlightedIndex;
        if (!rest.disabled) {
          var _eventHandlers;
          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }
        return _extends2({
          "aria-autocomplete": "list",
          "aria-activedescendant": isOpen && typeof highlightedIndex === "number" && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          "aria-controls": isOpen ? _this.menuId : null,
          "aria-labelledby": _this.labelId,
          autoComplete: "off",
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, rest);
      };
      _this.inputHandleKeyDown = function(event) {
        var key = normalizeArrowKey(event);
        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
        }
      };
      _this.inputHandleChange = function(event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };
      _this.inputHandleBlur = function() {
        _this.internalSetTimeout(function() {
          var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);
          if (!_this.isMouseDown && !downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };
      _this.menuRef = function(node) {
        _this._menuNode = node;
      };
      _this.getMenuProps = function(_temp5, _temp6) {
        var _extends3;
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, props = _objectWithoutPropertiesLoose2(_ref5, _excluded4$1);
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$suppressRefErro = _ref6.suppressRefError, suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;
        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return _extends2((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = "listbox", _extends3["aria-labelledby"] = props && props["aria-label"] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };
      _this.getItemProps = function(_temp7) {
        var _enabledEventHandlers;
        var _ref7 = _temp7 === void 0 ? {} : _temp7, onMouseMove = _ref7.onMouseMove, onMouseDown = _ref7.onMouseDown, onClick = _ref7.onClick;
        _ref7.onPress;
        var index = _ref7.index, _ref7$item = _ref7.item, item = _ref7$item === void 0 ? false ? void 0 : requiredProp("getItemProps", "item") : _ref7$item, rest = _objectWithoutPropertiesLoose2(_ref7, _excluded5$1);
        if (index === void 0) {
          _this.items.push(item);
          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }
        var onSelectKey = "onClick";
        var customClickHandler = onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          onMouseMove: callAllEventHandlers(onMouseMove, function() {
            if (index === _this.getState().highlightedIndex) {
              return;
            }
            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            });
            _this.avoidScrolling = true;
            _this.internalSetTimeout(function() {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function(event) {
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function() {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers);
        var eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return _extends2({
          id: _this.getItemId(index),
          role: "option",
          "aria-selected": _this.getState().highlightedIndex === index
        }, eventHandlers, rest);
      };
      _this.clearItems = function() {
        _this.items = [];
      };
      _this.reset = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(function(_ref8) {
          var selectedItem = _ref8.selectedItem;
          return _extends2({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };
      _this.toggleMenu = function(otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }
        otherStateToSet = pickState(otherStateToSet);
        _this.internalSetState(function(_ref9) {
          var isOpen = _ref9.isOpen;
          return _extends2({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, otherStateToSet);
        }, function() {
          var _this$getState7 = _this.getState(), isOpen = _this$getState7.isOpen, highlightedIndex = _this$getState7.highlightedIndex;
          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === "number") {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }
          cbToCb(cb)();
        });
      };
      _this.openMenu = function(cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };
      _this.closeMenu = function(cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };
      _this.updateStatus = debounce2(function() {
        var state = _this.getState();
        var item = _this.items[state.highlightedIndex];
        var resultCount = _this.getItemCount();
        var status = _this.props.getA11yStatusMessage(_extends2({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount,
          highlightedItem: item
        }, state));
        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200);
      var _this$props = _this.props, defaultHighlightedIndex = _this$props.defaultHighlightedIndex, _this$props$initialHi = _this$props.initialHighlightedIndex, _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi, defaultIsOpen = _this$props.defaultIsOpen, _this$props$initialIs = _this$props.initialIsOpen, _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs, _this$props$initialIn = _this$props.initialInputValue, _inputValue = _this$props$initialIn === void 0 ? "" : _this$props$initialIn, _this$props$initialSe = _this$props.initialSelectedItem, _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;
      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });
      if (_state.selectedItem != null && _this.props.initialInputValue === void 0) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }
      _this.state = _state;
      return _this;
    }
    var _proto = Downshift3.prototype;
    _proto.internalClearTimeouts = function internalClearTimeouts() {
      this.timeoutIds.forEach(function(id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    };
    _proto.getState = function getState$1(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }
      return getState(stateToMerge, this.props);
    };
    _proto.getItemCount = function getItemCount2() {
      var itemCount = this.items.length;
      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== void 0) {
        itemCount = this.props.itemCount;
      }
      return itemCount;
    };
    _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };
    _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    };
    _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      var _this6 = this;
      var itemCount = this.getItemCount();
      var _this$getState8 = this.getState(), highlightedIndex = _this$getState8.highlightedIndex;
      if (itemCount > 0) {
        var nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, function(index) {
          return _this6.getItemNodeFromIndex(index);
        });
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    };
    _proto.getStateAndHelpers = function getStateAndHelpers() {
      var _this$getState9 = this.getState(), highlightedIndex = _this$getState9.highlightedIndex, inputValue = _this$getState9.inputValue, selectedItem = _this$getState9.selectedItem, isOpen = _this$getState9.isOpen;
      var itemToString2 = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps, getToggleButtonProps = this.getToggleButtonProps, getLabelProps = this.getLabelProps, getMenuProps = this.getMenuProps, getInputProps = this.getInputProps, getItemProps = this.getItemProps, openMenu = this.openMenu, closeMenu = this.closeMenu, toggleMenu = this.toggleMenu, selectItem = this.selectItem, selectItemAtIndex = this.selectItemAtIndex, selectHighlightedItem = this.selectHighlightedItem, setHighlightedIndex = this.setHighlightedIndex, clearSelection = this.clearSelection, clearItems = this.clearItems, reset = this.reset, setItemCount = this.setItemCount, unsetItemCount = this.unsetItemCount, setState = this.internalSetState;
      return {
        getRootProps,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getItemProps,
        reset,
        openMenu,
        closeMenu,
        toggleMenu,
        selectItem,
        selectItemAtIndex,
        selectHighlightedItem,
        setHighlightedIndex,
        clearSelection,
        clearItems,
        setItemCount,
        unsetItemCount,
        setState,
        itemToString: itemToString2,
        id,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      };
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this7 = this;
      if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      {
        var onMouseDown = function onMouseDown2() {
          _this7.isMouseDown = true;
        };
        var onMouseUp = function onMouseUp2(event) {
          _this7.isMouseDown = false;
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment);
          if (!contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: mouseUp
            }, function() {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };
        var onTouchStart = function onTouchStart2() {
          _this7.isTouchMove = false;
        };
        var onTouchMove = function onTouchMove2() {
          _this7.isTouchMove = true;
        };
        var onTouchEnd = function onTouchEnd2(event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment, false);
          if (!_this7.isTouchMove && !contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: touchEnd
            }, function() {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };
        var environment = this.props.environment;
        environment.addEventListener("mousedown", onMouseDown);
        environment.addEventListener("mouseup", onMouseUp);
        environment.addEventListener("touchstart", onTouchStart);
        environment.addEventListener("touchmove", onTouchMove);
        environment.addEventListener("touchend", onTouchEnd);
        this.cleanup = function() {
          _this7.internalClearTimeouts();
          _this7.updateStatus.cancel();
          environment.removeEventListener("mousedown", onMouseDown);
          environment.removeEventListener("mouseup", onMouseUp);
          environment.removeEventListener("touchstart", onTouchStart);
          environment.removeEventListener("touchmove", onTouchMove);
          environment.removeEventListener("touchend", onTouchEnd);
        };
      }
    };
    _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
      var _ref10 = this.props.highlightedIndex === void 0 ? this.getState() : this.props, currentHighlightedIndex = _ref10.highlightedIndex;
      var _ref11 = prevProps.highlightedIndex === void 0 ? prevState : prevProps, prevHighlightedIndex = _ref11.highlightedIndex;
      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      var scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }
      if (isControlledProp(this.props, "selectedItem") && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }
      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      {
        this.updateStatus();
      }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cleanup();
    };
    _proto.render = function render() {
      var children = unwrapArray(this.props.children, noop);
      this.clearItems();
      this.getRootProps.called = false;
      this.getRootProps.refKey = void 0;
      this.getRootProps.suppressRefError = void 0;
      this.getMenuProps.called = false;
      this.getMenuProps.refKey = void 0;
      this.getMenuProps.suppressRefError = void 0;
      this.getLabelProps.called = false;
      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));
      if (!element) {
        return null;
      }
      if (this.getRootProps.called || this.props.suppressRefError) {
        if (!this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }
        return element;
      } else if (isDOMElement(element)) {
        return /* @__PURE__ */ cloneElement3(element, this.getRootProps(getElementProps(element)));
      }
      if (true) {
        throw new Error("downshift: If you return a non-DOM element, you must apply the getRootProps function");
      }
      return void 0;
    };
    return Downshift3;
  }(Component);
  Downshift2.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage$1,
    itemToString: function itemToString2(i) {
      if (i == null) {
        return "";
      }
      if (isPlainObject(i) && !i.hasOwnProperty("toString")) {
        console.warn("downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.", "The object that was passed:", i);
      }
      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === "undefined" ? {} : window,
    stateReducer: function stateReducer2(state, stateToSet) {
      return stateToSet;
    },
    suppressRefError: false,
    scrollIntoView
  };
  Downshift2.stateChangeTypes = stateChangeTypes$3;
  return Downshift2;
}();
true ? Downshift.propTypes = {
  children: import_prop_types.default.func,
  defaultHighlightedIndex: import_prop_types.default.number,
  defaultIsOpen: import_prop_types.default.bool,
  initialHighlightedIndex: import_prop_types.default.number,
  initialSelectedItem: import_prop_types.default.any,
  initialInputValue: import_prop_types.default.string,
  initialIsOpen: import_prop_types.default.bool,
  getA11yStatusMessage: import_prop_types.default.func,
  itemToString: import_prop_types.default.func,
  onChange: import_prop_types.default.func,
  onSelect: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onInputValueChange: import_prop_types.default.func,
  onUserAction: import_prop_types.default.func,
  onOuterClick: import_prop_types.default.func,
  selectedItemChanged: import_prop_types.default.func,
  stateReducer: import_prop_types.default.func,
  itemCount: import_prop_types.default.number,
  id: import_prop_types.default.string,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  }),
  suppressRefError: import_prop_types.default.bool,
  scrollIntoView: import_prop_types.default.func,
  selectedItem: import_prop_types.default.any,
  isOpen: import_prop_types.default.bool,
  inputValue: import_prop_types.default.string,
  highlightedIndex: import_prop_types.default.number,
  labelId: import_prop_types.default.string,
  inputId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func
} : void 0;
function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;
  if (!node) {
    console.error('downshift: The ref prop "' + refKey + '" from getMenuProps was not applied correctly on your menu element.');
  }
}
function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey;
  var refKeySpecified = refKey !== "ref";
  var isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified && !(0, import_react_is.isForwardRef)(element)) {
    console.error("downshift: You returned a non-DOM element. You must specify a refKey in getRootProps");
  } else if (!isComposite && refKeySpecified) {
    console.error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + refKey + '"');
  }
  if (!(0, import_react_is.isForwardRef)(element) && !getElementProps(element)[refKey]) {
    console.error('downshift: You must apply the ref prop "' + refKey + '" from getRootProps onto your root element.');
  }
}
var _excluded$3 = ["isInitialMount", "highlightedIndex", "items", "environment"];
var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ""
};
function callOnChangeProps(action, state, newState) {
  var props = action.props, type = action.type;
  var changes = {};
  Object.keys(state).forEach(function(key) {
    invokeOnChangeHandler(key, action, state, newState);
    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });
  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(_extends2({
      type
    }, changes));
  }
}
function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props, type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";
  if (props[handler] && newState[key] !== void 0 && newState[key] !== state[key]) {
    props[handler](_extends2({
      type
    }, newState));
  }
}
function stateReducer(s, a) {
  return a.changes;
}
function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem, itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : "";
}
var updateA11yStatus = debounce2(function(getA11yMessage, document2) {
  setStatus(getA11yMessage(), document2);
}, 200);
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect4 : useEffect10;
function useElementIds(_ref) {
  var _ref$id = _ref.id, id = _ref$id === void 0 ? "downshift-" + generateId() : _ref$id, labelId = _ref.labelId, menuId = _ref.menuId, getItemId = _ref.getItemId, toggleButtonId = _ref.toggleButtonId, inputId = _ref.inputId;
  var elementIdsRef = useRef13({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function(index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}
function getItemIndex(index, item, items) {
  if (index !== void 0) {
    return index;
  }
  if (items.length === 0) {
    return -1;
  }
  return items.indexOf(item);
}
function itemToString(item) {
  return item ? String(item) : "";
}
function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
function useLatestRef(val) {
  var ref = useRef13(val);
  ref.current = val;
  return ref;
}
function useEnhancedReducer(reducer, initialState, props) {
  var prevStateRef = useRef13();
  var actionRef = useRef13();
  var enhancedReducer = useCallback6(function(state2, action2) {
    actionRef.current = action2;
    state2 = getState(state2, action2.props);
    var changes = reducer(state2, action2);
    var newState = action2.props.stateReducer(state2, _extends2({}, action2, {
      changes
    }));
    return newState;
  }, [reducer]);
  var _useReducer = useReducer(enhancedReducer, initialState), state = _useReducer[0], dispatch = _useReducer[1];
  var propsRef = useLatestRef(props);
  var dispatchWithProps = useCallback6(function(action2) {
    return dispatch(_extends2({
      props: propsRef.current
    }, action2));
  }, [propsRef]);
  var action = actionRef.current;
  useEffect10(function() {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }
    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
function useControlledReducer$1(reducer, initialState, props) {
  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
  return [getState(state, props), dispatch];
}
var defaultProps$3 = {
  itemToString,
  stateReducer,
  getA11ySelectionMessage,
  scrollIntoView,
  circularNavigation: false,
  environment: typeof window === "undefined" ? {} : window
};
function getDefaultValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  var defaultPropKey = "default" + capitalizeString(propKey);
  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }
  return defaultStateValues2[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues2) {
  if (defaultStateValues2 === void 0) {
    defaultStateValues2 = dropdownDefaultStateValues;
  }
  if (propKey in props) {
    return props[propKey];
  }
  var initialPropKey = "initial" + capitalizeString(propKey);
  if (initialPropKey in props) {
    return props[initialPropKey];
  }
  return getDefaultValue$1(props, propKey, defaultStateValues2);
}
function getInitialState$2(props) {
  var selectedItem = getInitialValue$1(props, "selectedItem");
  var isOpen = getInitialValue$1(props, "isOpen");
  var highlightedIndex = getInitialValue$1(props, "highlightedIndex");
  var inputValue = getInitialValue$1(props, "inputValue");
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
function getHighlightedIndexOnOpen(props, state, offset2, getItemNodeFromIndex) {
  var items = props.items, initialHighlightedIndex = props.initialHighlightedIndex, defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem, highlightedIndex = state.highlightedIndex;
  if (items.length === 0) {
    return -1;
  }
  if (initialHighlightedIndex !== void 0 && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }
  if (defaultHighlightedIndex !== void 0) {
    return defaultHighlightedIndex;
  }
  if (selectedItem) {
    if (offset2 === 0) {
      return items.indexOf(selectedItem);
    }
    return getNextWrappingIndex(offset2, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }
  if (offset2 === 0) {
    return -1;
  }
  return offset2 < 0 ? items.length - 1 : 0;
}
function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  var mouseAndTouchTrackersRef = useRef13({
    isMouseDown: false,
    isTouchMove: false
  });
  useEffect10(function() {
    var onMouseDown = function onMouseDown2() {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };
    var onMouseUp = function onMouseUp2(event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;
      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function(ref) {
        return ref.current;
      }), environment)) {
        handleBlur();
      }
    };
    var onTouchStart = function onTouchStart2() {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };
    var onTouchMove = function onTouchMove2() {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };
    var onTouchEnd = function onTouchEnd2(event) {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function(ref) {
        return ref.current;
      }), environment, false)) {
        handleBlur();
      }
    };
    environment.addEventListener("mousedown", onMouseDown);
    environment.addEventListener("mouseup", onMouseUp);
    environment.addEventListener("touchstart", onTouchStart);
    environment.addEventListener("touchmove", onTouchMove);
    environment.addEventListener("touchend", onTouchEnd);
    return function cleanup() {
      environment.removeEventListener("mousedown", onMouseDown);
      environment.removeEventListener("mouseup", onMouseUp);
      environment.removeEventListener("touchstart", onTouchStart);
      environment.removeEventListener("touchmove", onTouchMove);
      environment.removeEventListener("touchend", onTouchEnd);
    };
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
var useGetterPropsCalledChecker = function useGetterPropsCalledChecker2() {
  return noop;
};
if (true) {
  useGetterPropsCalledChecker = function useGetterPropsCalledChecker3() {
    var isInitialMountRef = useRef13(true);
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    var getterPropsCalledRef = useRef13(propKeys.reduce(function(acc, propKey) {
      acc[propKey] = {};
      return acc;
    }, {}));
    useEffect10(function() {
      Object.keys(getterPropsCalledRef.current).forEach(function(propKey) {
        var propCallInfo = getterPropsCalledRef.current[propKey];
        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
            return;
          }
        }
        var suppressRefError = propCallInfo.suppressRefError, refKey = propCallInfo.refKey, elementRef = propCallInfo.elementRef;
        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          console.error('downshift: The ref prop "' + refKey + '" from ' + propKey + " was not applied correctly on your element.");
        }
      });
      isInitialMountRef.current = false;
    });
    var setGetterPropCallInfo = useCallback6(function(propKey, suppressRefError, refKey, elementRef) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError,
        refKey,
        elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}
function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  var isInitialMount = _ref2.isInitialMount, highlightedIndex = _ref2.highlightedIndex, items = _ref2.items, environment = _ref2.environment, rest = _objectWithoutPropertiesLoose2(_ref2, _excluded$3);
  useEffect10(function() {
    if (isInitialMount || false) {
      return;
    }
    updateA11yStatus(function() {
      return getA11yMessage(_extends2({
        highlightedIndex,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length
      }, rest));
    }, environment.document);
  }, dependencyArray);
}
function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex, isOpen = _ref3.isOpen, itemRefs = _ref3.itemRefs, getItemNodeFromIndex = _ref3.getItemNodeFromIndex, menuElement = _ref3.menuElement, scrollIntoViewProp = _ref3.scrollIntoView;
  var shouldScrollRef = useRef13(true);
  useIsomorphicLayoutEffect2(function() {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }
    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    }
  }, [highlightedIndex]);
  return shouldScrollRef;
}
var useControlPropsValidator = noop;
if (true) {
  useControlPropsValidator = function useControlPropsValidator2(_ref4) {
    var isInitialMount = _ref4.isInitialMount, props = _ref4.props, state = _ref4.state;
    var prevPropsRef = useRef13(props);
    useEffect10(function() {
      if (isInitialMount) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}
function downshiftCommonReducer(state, action, stateChangeTypes2) {
  var type = action.type, props = action.props;
  var changes;
  switch (type) {
    case stateChangeTypes2.ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;
    case stateChangeTypes2.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;
    case stateChangeTypes2.ToggleButtonClick:
    case stateChangeTypes2.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;
    case stateChangeTypes2.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;
    case stateChangeTypes2.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;
    case stateChangeTypes2.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;
    case stateChangeTypes2.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        isOpen: getDefaultValue$1(props, "isOpen"),
        selectedItem: getDefaultValue$1(props, "selectedItem"),
        inputValue: getDefaultValue$1(props, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends2({}, state, changes);
}
function getItemIndexByCharacterKey(_a) {
  var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString2 = _a.itemToString, getItemNodeFromIndex = _a.getItemNodeFromIndex;
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
  for (var index = 0; index < items.length; index++) {
    var offsetIndex = (index + highlightedIndex + 1) % items.length;
    var item = items[offsetIndex];
    if (item !== void 0 && itemToString2(item).toLowerCase().startsWith(lowerCasedKeysSoFar)) {
      var element = getItemNodeFromIndex(offsetIndex);
      if (!(element === null || element === void 0 ? void 0 : element.hasAttribute("disabled"))) {
        return offsetIndex;
      }
    }
  }
  return highlightedIndex;
}
var propTypes$2 = {
  items: import_prop_types.default.array.isRequired,
  itemToString: import_prop_types.default.func,
  getA11yStatusMessage: import_prop_types.default.func,
  getA11ySelectionMessage: import_prop_types.default.func,
  circularNavigation: import_prop_types.default.bool,
  highlightedIndex: import_prop_types.default.number,
  defaultHighlightedIndex: import_prop_types.default.number,
  initialHighlightedIndex: import_prop_types.default.number,
  isOpen: import_prop_types.default.bool,
  defaultIsOpen: import_prop_types.default.bool,
  initialIsOpen: import_prop_types.default.bool,
  selectedItem: import_prop_types.default.any,
  initialSelectedItem: import_prop_types.default.any,
  defaultSelectedItem: import_prop_types.default.any,
  id: import_prop_types.default.string,
  labelId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func,
  toggleButtonId: import_prop_types.default.string,
  stateReducer: import_prop_types.default.func,
  onSelectedItemChange: import_prop_types.default.func,
  onHighlightedIndexChange: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onIsOpenChange: import_prop_types.default.func,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
function getA11yStatusMessage(_a) {
  var isOpen = _a.isOpen, resultCount = _a.resultCount, previousResultCount = _a.previousResultCount;
  if (!isOpen) {
    return "";
  }
  if (!resultCount) {
    return "No results are available.";
  }
  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
  }
  return "";
}
var defaultProps$2 = __assign(__assign({}, defaultProps$3), {getA11yStatusMessage});
var validatePropTypes$2 = noop;
if (true) {
  validatePropTypes$2 = function(options, caller) {
    import_prop_types.default.checkPropTypes(propTypes$2, options, "prop", caller.name);
  };
}
var MenuKeyDownArrowDown = true ? "__menu_keydown_arrow_down__" : 0;
var MenuKeyDownArrowUp = true ? "__menu_keydown_arrow_up__" : 1;
var MenuKeyDownEscape = true ? "__menu_keydown_escape__" : 2;
var MenuKeyDownHome = true ? "__menu_keydown_home__" : 3;
var MenuKeyDownEnd = true ? "__menu_keydown_end__" : 4;
var MenuKeyDownEnter = true ? "__menu_keydown_enter__" : 5;
var MenuKeyDownSpaceButton = true ? "__menu_keydown_space_button__" : 6;
var MenuKeyDownCharacter = true ? "__menu_keydown_character__" : 7;
var MenuBlur = true ? "__menu_blur__" : 8;
var MenuMouseLeave$1 = true ? "__menu_mouse_leave__" : 9;
var ItemMouseMove$1 = true ? "__item_mouse_move__" : 10;
var ItemClick$1 = true ? "__item_click__" : 11;
var ToggleButtonClick$1 = true ? "__togglebutton_click__" : 12;
var ToggleButtonKeyDownArrowDown = true ? "__togglebutton_keydown_arrow_down__" : 13;
var ToggleButtonKeyDownArrowUp = true ? "__togglebutton_keydown_arrow_up__" : 14;
var ToggleButtonKeyDownCharacter = true ? "__togglebutton_keydown_character__" : 15;
var FunctionToggleMenu$1 = true ? "__function_toggle_menu__" : 16;
var FunctionOpenMenu$1 = true ? "__function_open_menu__" : 17;
var FunctionCloseMenu$1 = true ? "__function_close_menu__" : 18;
var FunctionSetHighlightedIndex$1 = true ? "__function_set_highlighted_index__" : 19;
var FunctionSelectItem$1 = true ? "__function_select_item__" : 20;
var FunctionSetInputValue$1 = true ? "__function_set_input_value__" : 21;
var FunctionReset$2 = true ? "__function_reset__" : 22;
var stateChangeTypes$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown,
  MenuKeyDownArrowUp,
  MenuKeyDownEscape,
  MenuKeyDownHome,
  MenuKeyDownEnd,
  MenuKeyDownEnter,
  MenuKeyDownSpaceButton,
  MenuKeyDownCharacter,
  MenuBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$2
});
function downshiftSelectReducer(state, action) {
  var type = action.type, props = action.props, shiftKey = action.shiftKey;
  var changes;
  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index]
      };
      break;
    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var inputValue = "" + state.inputValue + lowercasedKey;
        var itemIndex = getItemIndexByCharacterKey({
          keysSoFar: inputValue,
          highlightedIndex: state.selectedItem ? props.items.indexOf(state.selectedItem) : -1,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = _extends2({
          inputValue
        }, itemIndex >= 0 && {
          selectedItem: props.items[itemIndex]
        });
      }
      break;
    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;
    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = _extends2({
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex")
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;
    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;
    case MenuKeyDownCharacter:
      {
        var _lowercasedKey = action.key;
        var _inputValue = "" + state.inputValue + _lowercasedKey;
        var highlightedIndex = getItemIndexByCharacterKey({
          keysSoFar: _inputValue,
          highlightedIndex: state.highlightedIndex,
          items: props.items,
          itemToString: props.itemToString,
          getItemNodeFromIndex: action.getItemNodeFromIndex
        });
        changes = _extends2({
          inputValue: _inputValue
        }, highlightedIndex >= 0 && {
          highlightedIndex
        });
      }
      break;
    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;
    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }
  return _extends2({}, state, changes);
}
var _excluded$2 = ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"];
var _excluded2$2 = ["onClick", "onKeyDown", "refKey", "ref"];
var _excluded3$1 = ["item", "index", "onMouseMove", "onClick", "refKey", "ref"];
useSelect.stateChangeTypes = stateChangeTypes$2;
function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$2(userProps, useSelect);
  var props = _extends2({}, defaultProps$2, userProps);
  var items = props.items, scrollIntoView2 = props.scrollIntoView, environment = props.environment, initialIsOpen = props.initialIsOpen, defaultIsOpen = props.defaultIsOpen, itemToString2 = props.itemToString, getA11ySelectionMessage2 = props.getA11ySelectionMessage, getA11yStatusMessage2 = props.getA11yStatusMessage;
  var initialState = getInitialState$2(props);
  var _useControlledReducer = useControlledReducer$1(downshiftSelectReducer, initialState, props), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
  var toggleButtonRef = useRef13(null);
  var menuRef = useRef13(null);
  var itemRefs = useRef13({});
  var shouldBlurRef = useRef13(true);
  var clearTimeoutRef = useRef13(null);
  var elementIds = useElementIds(props);
  var previousResultCountRef = useRef13();
  var isInitialMountRef = useRef13(true);
  var latest = useLatestRef({
    state,
    props
  });
  var getItemNodeFromIndex = useCallback6(function(index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], _extends2({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2
  }, state));
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], _extends2({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2
  }, state));
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView2,
    getItemNodeFromIndex
  });
  useEffect10(function() {
    clearTimeoutRef.current = debounce2(function(outerDispatch) {
      outerDispatch({
        type: FunctionSetInputValue$1,
        inputValue: ""
      });
    }, 500);
    return function() {
      clearTimeoutRef.current.cancel();
    };
  }, []);
  useEffect10(function() {
    if (!inputValue) {
      return;
    }
    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  useEffect10(function() {
    if (isInitialMountRef.current) {
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (isOpen) {
      if (menuRef.current) {
        menuRef.current.focus();
      }
      return;
    }
    if (environment.document.activeElement === menuRef.current) {
      if (toggleButtonRef.current) {
        shouldBlurRef.current = false;
        toggleButtonRef.current.focus();
      }
    }
  }, [isOpen]);
  useEffect10(function() {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, function() {
    dispatch({
      type: MenuBlur
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getMenuProps", "getToggleButtonProps");
  useEffect10(function() {
    isInitialMountRef.current = false;
  }, []);
  useEffect10(function() {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  var toggleButtonKeyDownHandlers = useMemo10(function() {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowDown,
          getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowUp,
          getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      }
    };
  }, [dispatch, getItemNodeFromIndex]);
  var menuKeyDownHandlers = useMemo10(function() {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowDown,
          getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowUp,
          getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      Home: function Home(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownHome,
          getItemNodeFromIndex
        });
      },
      End: function End(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnd,
          getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        dispatch({
          type: MenuKeyDownEscape
        });
      },
      Enter: function Enter(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnter
        });
      },
      " ": function _(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownSpaceButton
        });
      }
    };
  }, [dispatch, getItemNodeFromIndex]);
  var toggleMenu = useCallback6(function() {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  var closeMenu = useCallback6(function() {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  var openMenu = useCallback6(function() {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  var setHighlightedIndex = useCallback6(function(newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = useCallback6(function(newSelectedItem) {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var reset = useCallback6(function() {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  var setInputValue = useCallback6(function(newInputValue) {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var getLabelProps = useCallback6(function(labelProps) {
    return _extends2({
      id: elementIds.labelId,
      htmlFor: elementIds.toggleButtonId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = useCallback6(function(_temp, _temp2) {
    var _extends22;
    var _ref = _temp === void 0 ? {} : _temp, onMouseLeave = _ref.onMouseLeave, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, onKeyDown = _ref.onKeyDown, onBlur = _ref.onBlur, ref = _ref.ref, rest = _objectWithoutPropertiesLoose2(_ref, _excluded$2);
    var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$suppressRefErro = _ref2.suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
    var latestState = latest.current.state;
    var menuHandleKeyDown = function menuHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && menuKeyDownHandlers[key]) {
        menuKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: MenuKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    var menuHandleBlur = function menuHandleBlur2() {
      if (shouldBlurRef.current === false) {
        shouldBlurRef.current = true;
        return;
      }
      var shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
      if (shouldBlur) {
        dispatch({
          type: MenuBlur
        });
      }
    };
    var menuHandleMouseLeave = function menuHandleMouseLeave2() {
      dispatch({
        type: MenuMouseLeave$1
      });
    };
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return _extends2((_extends22 = {}, _extends22[refKey] = handleRefs(ref, function(menuNode) {
      menuRef.current = menuNode;
    }), _extends22.id = elementIds.menuId, _extends22.role = "listbox", _extends22["aria-labelledby"] = elementIds.labelId, _extends22.tabIndex = -1, _extends22), latestState.isOpen && latestState.highlightedIndex > -1 && {
      "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
    }, {
      onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
      onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
      onBlur: callAllEventHandlers(onBlur, menuHandleBlur)
    }, rest);
  }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  var getToggleButtonProps = useCallback6(function(_temp3, _temp4) {
    var _extends3;
    var _ref3 = _temp3 === void 0 ? {} : _temp3, onClick = _ref3.onClick, onKeyDown = _ref3.onKeyDown, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, rest = _objectWithoutPropertiesLoose2(_ref3, _excluded2$2);
    var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$suppressRefErro = _ref4.suppressRefError, suppressRefError = _ref4$suppressRefErro === void 0 ? false : _ref4$suppressRefErro;
    var toggleButtonHandleClick = function toggleButtonHandleClick2() {
      dispatch({
        type: ToggleButtonClick$1
      });
    };
    var toggleButtonHandleKeyDown = function toggleButtonHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key,
          getItemNodeFromIndex
        });
      }
    };
    var toggleProps = _extends2((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends3.id = elementIds.toggleButtonId, _extends3["aria-haspopup"] = "listbox", _extends3["aria-expanded"] = latest.current.state.isOpen, _extends3["aria-labelledby"] = elementIds.labelId + " " + elementIds.toggleButtonId, _extends3), rest);
    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }
    setGetterPropCallInfo("getToggleButtonProps", suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  var getItemProps = useCallback6(function(_temp5) {
    var _extends4;
    var _ref5 = _temp5 === void 0 ? {} : _temp5, item = _ref5.item, index = _ref5.index, onMouseMove = _ref5.onMouseMove, onClick = _ref5.onClick, _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, rest = _objectWithoutPropertiesLoose2(_ref5, _excluded3$1);
    var _latest$current = latest.current, latestState = _latest$current.state, latestProps = _latest$current.props;
    var itemHandleMouseMove = function itemHandleMouseMove2() {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index
      });
    };
    var itemHandleClick = function itemHandleClick2() {
      dispatch({
        type: ItemClick$1,
        index
      });
    };
    var itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    var itemProps = _extends2((_extends4 = {
      role: "option",
      "aria-selected": "" + (itemIndex === latestState.highlightedIndex),
      id: elementIds.getItemId(itemIndex)
    }, _extends4[refKey] = handleRefs(ref, function(itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
      }
    }), _extends4), rest);
    if (!rest.disabled) {
      itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }
    return itemProps;
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  return {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    selectItem,
    reset,
    setInputValue,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var InputKeyDownArrowDown = true ? "__input_keydown_arrow_down__" : 0;
var InputKeyDownArrowUp = true ? "__input_keydown_arrow_up__" : 1;
var InputKeyDownEscape = true ? "__input_keydown_escape__" : 2;
var InputKeyDownHome = true ? "__input_keydown_home__" : 3;
var InputKeyDownEnd = true ? "__input_keydown_end__" : 4;
var InputKeyDownEnter = true ? "__input_keydown_enter__" : 5;
var InputChange = true ? "__input_change__" : 6;
var InputBlur = true ? "__input_blur__" : 7;
var MenuMouseLeave = true ? "__menu_mouse_leave__" : 8;
var ItemMouseMove = true ? "__item_mouse_move__" : 9;
var ItemClick = true ? "__item_click__" : 10;
var ToggleButtonClick = true ? "__togglebutton_click__" : 11;
var FunctionToggleMenu = true ? "__function_toggle_menu__" : 12;
var FunctionOpenMenu = true ? "__function_open_menu__" : 13;
var FunctionCloseMenu = true ? "__function_close_menu__" : 14;
var FunctionSetHighlightedIndex = true ? "__function_set_highlighted_index__" : 15;
var FunctionSelectItem = true ? "__function_select_item__" : 16;
var FunctionSetInputValue = true ? "__function_set_input_value__" : 17;
var FunctionReset$1 = true ? "__function_reset__" : 18;
var ControlledPropUpdatedSelectedItem = true ? "__controlled_prop_updated_selected_item__" : 19;
var stateChangeTypes$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown,
  InputKeyDownArrowUp,
  InputKeyDownEscape,
  InputKeyDownHome,
  InputKeyDownEnd,
  InputKeyDownEnter,
  InputChange,
  InputBlur,
  MenuMouseLeave,
  ItemMouseMove,
  ItemClick,
  ToggleButtonClick,
  FunctionToggleMenu,
  FunctionOpenMenu,
  FunctionCloseMenu,
  FunctionSetHighlightedIndex,
  FunctionSelectItem,
  FunctionSetInputValue,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem
});
function getInitialState$1(props) {
  var initialState = getInitialState$2(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;
  if (inputValue === "" && selectedItem && props.defaultInputValue === void 0 && props.initialInputValue === void 0 && props.inputValue === void 0) {
    inputValue = props.itemToString(selectedItem);
  }
  return _extends2({}, initialState, {
    inputValue
  });
}
var propTypes$1 = {
  items: import_prop_types.default.array.isRequired,
  itemToString: import_prop_types.default.func,
  getA11yStatusMessage: import_prop_types.default.func,
  getA11ySelectionMessage: import_prop_types.default.func,
  circularNavigation: import_prop_types.default.bool,
  highlightedIndex: import_prop_types.default.number,
  defaultHighlightedIndex: import_prop_types.default.number,
  initialHighlightedIndex: import_prop_types.default.number,
  isOpen: import_prop_types.default.bool,
  defaultIsOpen: import_prop_types.default.bool,
  initialIsOpen: import_prop_types.default.bool,
  selectedItem: import_prop_types.default.any,
  initialSelectedItem: import_prop_types.default.any,
  defaultSelectedItem: import_prop_types.default.any,
  inputValue: import_prop_types.default.string,
  defaultInputValue: import_prop_types.default.string,
  initialInputValue: import_prop_types.default.string,
  id: import_prop_types.default.string,
  labelId: import_prop_types.default.string,
  menuId: import_prop_types.default.string,
  getItemId: import_prop_types.default.func,
  inputId: import_prop_types.default.string,
  toggleButtonId: import_prop_types.default.string,
  stateReducer: import_prop_types.default.func,
  onSelectedItemChange: import_prop_types.default.func,
  onHighlightedIndexChange: import_prop_types.default.func,
  onStateChange: import_prop_types.default.func,
  onIsOpenChange: import_prop_types.default.func,
  onInputValueChange: import_prop_types.default.func,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
function useControlledReducer(reducer, initialState, props) {
  var previousSelectedItemRef = useRef13();
  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
  useEffect10(function() {
    if (isControlledProp(props, "selectedItem")) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
}
var validatePropTypes$1 = noop;
if (true) {
  validatePropTypes$1 = function validatePropTypes2(options, caller) {
    import_prop_types.default.checkPropTypes(propTypes$1, options, "prop", caller.name);
  };
}
var defaultProps$1 = _extends2({}, defaultProps$3, {
  getA11yStatusMessage: getA11yStatusMessage$1,
  circularNavigation: true
});
function downshiftUseComboboxReducer(state, action) {
  var type = action.type, props = action.props, shiftKey = action.shiftKey;
  var changes;
  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;
    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }
      break;
    case InputKeyDownEnter:
      changes = _extends2({}, state.isOpen && state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        isOpen: getDefaultValue$1(props, "isOpen"),
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;
    case InputKeyDownEscape:
      changes = _extends2({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;
    case InputBlur:
      changes = _extends2({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && action.selectItem && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;
    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue$1(props, "highlightedIndex"),
        inputValue: action.inputValue
      };
      break;
    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;
    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;
    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }
  return _extends2({}, state, changes);
}
var _excluded$1 = ["onMouseLeave", "refKey", "ref"];
var _excluded2$1 = ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"];
var _excluded3 = ["onClick", "onPress", "refKey", "ref"];
var _excluded4 = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"];
var _excluded5 = ["refKey", "ref"];
useCombobox.stateChangeTypes = stateChangeTypes$1;
function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes$1(userProps, useCombobox);
  var props = _extends2({}, defaultProps$1, userProps);
  var initialIsOpen = props.initialIsOpen, defaultIsOpen = props.defaultIsOpen, items = props.items, scrollIntoView2 = props.scrollIntoView, environment = props.environment, getA11yStatusMessage2 = props.getA11yStatusMessage, getA11ySelectionMessage2 = props.getA11ySelectionMessage, itemToString2 = props.itemToString;
  var initialState = getInitialState$1(props);
  var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, initialState, props), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
  var menuRef = useRef13(null);
  var itemRefs = useRef13({});
  var inputRef = useRef13(null);
  var toggleButtonRef = useRef13(null);
  var comboboxRef = useRef13(null);
  var isInitialMountRef = useRef13(true);
  var elementIds = useElementIds(props);
  var previousResultCountRef = useRef13();
  var latest = useLatestRef({
    state,
    props
  });
  var getItemNodeFromIndex = useCallback6(function(index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]);
  useA11yMessageSetter(getA11yStatusMessage2, [isOpen, highlightedIndex, inputValue, items], _extends2({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2
  }, state));
  useA11yMessageSetter(getA11ySelectionMessage2, [selectedItem], _extends2({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items,
    environment,
    itemToString: itemToString2
  }, state));
  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex,
    isOpen,
    itemRefs,
    scrollIntoView: scrollIntoView2,
    getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  useEffect10(function() {
    var focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;
    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect10(function() {
    if (isInitialMountRef.current) {
      return;
    }
    previousResultCountRef.current = items.length;
  });
  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, function() {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getInputProps", "getComboboxProps", "getMenuProps");
  useEffect10(function() {
    isInitialMountRef.current = false;
  }, []);
  useEffect10(function() {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  var inputKeyDownHandlers = useMemo10(function() {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex
        });
      },
      Home: function Home(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownHome,
          getItemNodeFromIndex
        });
      },
      End: function End(event) {
        if (!latest.current.state.isOpen) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd,
          getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        var latestState = latest.current.state;
        if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
          dispatch({
            type: InputKeyDownEscape
          });
        }
      },
      Enter: function Enter(event) {
        var latestState = latest.current.state;
        if (!latestState.isOpen || latestState.highlightedIndex < 0 || event.which === 229) {
          return;
        }
        event.preventDefault();
        dispatch({
          type: InputKeyDownEnter,
          getItemNodeFromIndex
        });
      }
    };
  }, [dispatch, latest, getItemNodeFromIndex]);
  var getLabelProps = useCallback6(function(labelProps) {
    return _extends2({
      id: elementIds.labelId,
      htmlFor: elementIds.inputId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = useCallback6(function(_temp, _temp2) {
    var _extends22;
    var _ref = _temp === void 0 ? {} : _temp, onMouseLeave = _ref.onMouseLeave, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest = _objectWithoutPropertiesLoose2(_ref, _excluded$1);
    var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$suppressRefErro = _ref2.suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
    setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
    return _extends2((_extends22 = {}, _extends22[refKey] = handleRefs(ref, function(menuNode) {
      menuRef.current = menuNode;
    }), _extends22.id = elementIds.menuId, _extends22.role = "listbox", _extends22["aria-labelledby"] = elementIds.labelId, _extends22.onMouseLeave = callAllEventHandlers(onMouseLeave, function() {
      dispatch({
        type: MenuMouseLeave
      });
    }), _extends22), rest);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getItemProps = useCallback6(function(_temp3) {
    var _extends3, _ref4;
    var _ref3 = _temp3 === void 0 ? {} : _temp3, item = _ref3.item, index = _ref3.index, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onMouseMove = _ref3.onMouseMove, onClick = _ref3.onClick;
    _ref3.onPress;
    var rest = _objectWithoutPropertiesLoose2(_ref3, _excluded2$1);
    var _latest$current = latest.current, latestProps = _latest$current.props, latestState = _latest$current.state;
    var itemIndex = getItemIndex(index, item, latestProps.items);
    if (itemIndex < 0) {
      throw new Error("Pass either item or item index in getItemProps!");
    }
    var onSelectKey = "onClick";
    var customClickHandler = onClick;
    var itemHandleMouseMove = function itemHandleMouseMove2() {
      if (index === latestState.highlightedIndex) {
        return;
      }
      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index
      });
    };
    var itemHandleClick = function itemHandleClick2() {
      dispatch({
        type: ItemClick,
        index
      });
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    return _extends2((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
      }
    }), _extends3.role = "option", _extends3["aria-selected"] = "" + (itemIndex === latestState.highlightedIndex), _extends3.id = elementIds.getItemId(itemIndex), _extends3), !rest.disabled && (_ref4 = {
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove)
    }, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, itemHandleClick), _ref4), rest);
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  var getToggleButtonProps = useCallback6(function(_temp4) {
    var _extends4;
    var _ref5 = _temp4 === void 0 ? {} : _temp4, onClick = _ref5.onClick;
    _ref5.onPress;
    var _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, rest = _objectWithoutPropertiesLoose2(_ref5, _excluded3);
    var toggleButtonHandleClick = function toggleButtonHandleClick2() {
      dispatch({
        type: ToggleButtonClick
      });
      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return _extends2((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function(toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends2({}, {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest);
  }, [dispatch, latest, elementIds]);
  var getInputProps = useCallback6(function(_temp5, _temp6) {
    var _extends5;
    var _ref6 = _temp5 === void 0 ? {} : _temp5, onKeyDown = _ref6.onKeyDown, onChange = _ref6.onChange, onInput = _ref6.onInput, onBlur = _ref6.onBlur;
    _ref6.onChangeText;
    var _ref6$refKey = _ref6.refKey, refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey, ref = _ref6.ref, rest = _objectWithoutPropertiesLoose2(_ref6, _excluded4);
    var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$suppressRefErro = _ref7.suppressRefError, suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;
    setGetterPropCallInfo("getInputProps", suppressRefError, refKey, inputRef);
    var latestState = latest.current.state;
    var inputHandleKeyDown = function inputHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };
    var inputHandleChange = function inputHandleChange2(event) {
      dispatch({
        type: InputChange,
        inputValue: event.target.value
      });
    };
    var inputHandleBlur = function inputHandleBlur2() {
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    var onChangeKey = "onChange";
    var eventHandlers = {};
    if (!rest.disabled) {
      var _eventHandlers;
      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
    }
    return _extends2((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function(inputNode) {
      inputRef.current = inputNode;
    }), _extends5.id = elementIds.inputId, _extends5["aria-autocomplete"] = "list", _extends5["aria-controls"] = elementIds.menuId, _extends5), latestState.isOpen && latestState.highlightedIndex > -1 && {
      "aria-activedescendant": elementIds.getItemId(latestState.highlightedIndex)
    }, {
      "aria-labelledby": elementIds.labelId,
      autoComplete: "off",
      value: latestState.inputValue
    }, eventHandlers, rest);
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);
  var getComboboxProps = useCallback6(function(_temp7, _temp8) {
    var _extends6;
    var _ref8 = _temp7 === void 0 ? {} : _temp7, _ref8$refKey = _ref8.refKey, refKey = _ref8$refKey === void 0 ? "ref" : _ref8$refKey, ref = _ref8.ref, rest = _objectWithoutPropertiesLoose2(_ref8, _excluded5);
    var _ref9 = _temp8 === void 0 ? {} : _temp8, _ref9$suppressRefErro = _ref9.suppressRefError, suppressRefError = _ref9$suppressRefErro === void 0 ? false : _ref9$suppressRefErro;
    setGetterPropCallInfo("getComboboxProps", suppressRefError, refKey, comboboxRef);
    return _extends2((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function(comboboxNode) {
      comboboxRef.current = comboboxNode;
    }), _extends6.role = "combobox", _extends6["aria-haspopup"] = "listbox", _extends6["aria-owns"] = elementIds.menuId, _extends6["aria-expanded"] = latest.current.state.isOpen, _extends6), rest);
  }, [latest, setGetterPropCallInfo, elementIds]);
  var toggleMenu = useCallback6(function() {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = useCallback6(function() {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = useCallback6(function() {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = useCallback6(function(newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = useCallback6(function(newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = useCallback6(function(newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = useCallback6(function() {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    getItemProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getToggleButtonProps,
    toggleMenu,
    openMenu,
    closeMenu,
    setHighlightedIndex,
    setInputValue,
    selectItem,
    reset,
    highlightedIndex,
    isOpen,
    selectedItem,
    inputValue
  };
}
var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
function getInitialValue(props, propKey) {
  return getInitialValue$1(props, propKey, defaultStateValues);
}
function getDefaultValue(props, propKey) {
  return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState(props) {
  var activeIndex = getInitialValue(props, "activeIndex");
  var selectedItems = getInitialValue(props, "selectedItems");
  return {
    activeIndex,
    selectedItems
  };
}
function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }
  var element = event.target;
  if (element instanceof HTMLInputElement && element.value !== "" && (element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }
  return true;
}
function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem, itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}
var propTypes = {
  selectedItems: import_prop_types.default.array,
  initialSelectedItems: import_prop_types.default.array,
  defaultSelectedItems: import_prop_types.default.array,
  itemToString: import_prop_types.default.func,
  getA11yRemovalMessage: import_prop_types.default.func,
  stateReducer: import_prop_types.default.func,
  activeIndex: import_prop_types.default.number,
  initialActiveIndex: import_prop_types.default.number,
  defaultActiveIndex: import_prop_types.default.number,
  onActiveIndexChange: import_prop_types.default.func,
  onSelectedItemsChange: import_prop_types.default.func,
  keyNavigationNext: import_prop_types.default.string,
  keyNavigationPrevious: import_prop_types.default.string,
  environment: import_prop_types.default.shape({
    addEventListener: import_prop_types.default.func,
    removeEventListener: import_prop_types.default.func,
    document: import_prop_types.default.shape({
      getElementById: import_prop_types.default.func,
      activeElement: import_prop_types.default.any,
      body: import_prop_types.default.any
    })
  })
};
var defaultProps = {
  itemToString: defaultProps$3.itemToString,
  stateReducer: defaultProps$3.stateReducer,
  environment: defaultProps$3.environment,
  getA11yRemovalMessage,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
};
var validatePropTypes = noop;
if (true) {
  validatePropTypes = function validatePropTypes2(options, caller) {
    import_prop_types.default.checkPropTypes(propTypes, options, "prop", caller.name);
  };
}
var SelectedItemClick = true ? "__selected_item_click__" : 0;
var SelectedItemKeyDownDelete = true ? "__selected_item_keydown_delete__" : 1;
var SelectedItemKeyDownBackspace = true ? "__selected_item_keydown_backspace__" : 2;
var SelectedItemKeyDownNavigationNext = true ? "__selected_item_keydown_navigation_next__" : 3;
var SelectedItemKeyDownNavigationPrevious = true ? "__selected_item_keydown_navigation_previous__" : 4;
var DropdownKeyDownNavigationPrevious = true ? "__dropdown_keydown_navigation_previous__" : 5;
var DropdownKeyDownBackspace = true ? "__dropdown_keydown_backspace__" : 6;
var DropdownClick = true ? "__dropdown_click__" : 7;
var FunctionAddSelectedItem = true ? "__function_add_selected_item__" : 8;
var FunctionRemoveSelectedItem = true ? "__function_remove_selected_item__" : 9;
var FunctionSetSelectedItems = true ? "__function_set_selected_items__" : 10;
var FunctionSetActiveIndex = true ? "__function_set_active_index__" : 11;
var FunctionReset = true ? "__function_reset__" : 12;
var stateChangeTypes = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  SelectedItemClick,
  SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace,
  DropdownClick,
  FunctionAddSelectedItem,
  FunctionRemoveSelectedItem,
  FunctionSetSelectedItems,
  FunctionSetActiveIndex,
  FunctionReset
});
function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type, index = action.index, props = action.props, selectedItem = action.selectedItem;
  var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
  var changes;
  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;
    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;
    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;
    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete: {
      var newActiveIndex = activeIndex;
      if (selectedItems.length === 1) {
        newActiveIndex = -1;
      } else if (activeIndex === selectedItems.length - 1) {
        newActiveIndex = selectedItems.length - 2;
      }
      changes = _extends2({
        selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
      }, {
        activeIndex: newActiveIndex
      });
      break;
    }
    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;
    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;
    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [].concat(selectedItems, [selectedItem])
      };
      break;
    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;
    case FunctionRemoveSelectedItem: {
      var _newActiveIndex = activeIndex;
      var selectedItemIndex = selectedItems.indexOf(selectedItem);
      if (selectedItems.length === 1) {
        _newActiveIndex = -1;
      } else if (selectedItemIndex === selectedItems.length - 1) {
        _newActiveIndex = selectedItems.length - 2;
      }
      changes = _extends2({
        selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1))
      }, {
        activeIndex: _newActiveIndex
      });
      break;
    }
    case FunctionSetSelectedItems: {
      var newSelectedItems = action.selectedItems;
      changes = {
        selectedItems: newSelectedItems
      };
      break;
    }
    case FunctionSetActiveIndex: {
      var _newActiveIndex2 = action.activeIndex;
      changes = {
        activeIndex: _newActiveIndex2
      };
      break;
    }
    case FunctionReset:
      changes = {
        activeIndex: getDefaultValue(props, "activeIndex"),
        selectedItems: getDefaultValue(props, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return _extends2({}, state, changes);
}
var _excluded = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"];
var _excluded2 = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
useMultipleSelection.stateChangeTypes = stateChangeTypes;
function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  validatePropTypes(userProps, useMultipleSelection);
  var props = _extends2({}, defaultProps, userProps);
  var getA11yRemovalMessage2 = props.getA11yRemovalMessage, itemToString2 = props.itemToString, environment = props.environment, keyNavigationNext = props.keyNavigationNext, keyNavigationPrevious = props.keyNavigationPrevious;
  var _useControlledReducer = useControlledReducer$1(downshiftMultipleSelectionReducer, getInitialState(props), props), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
  var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
  var isInitialMountRef = useRef13(true);
  var dropdownRef = useRef13(null);
  var previousSelectedItemsRef = useRef13(selectedItems);
  var selectedItemRefs = useRef13();
  selectedItemRefs.current = [];
  var latest = useLatestRef({
    state,
    props
  });
  useEffect10(function() {
    if (isInitialMountRef.current) {
      return;
    }
    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      var removedSelectedItem = previousSelectedItemsRef.current.find(function(item) {
        return selectedItems.indexOf(item) < 0;
      });
      setStatus(getA11yRemovalMessage2({
        itemToString: itemToString2,
        resultCount: selectedItems.length,
        removedSelectedItem,
        activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }
    previousSelectedItemsRef.current = selectedItems;
  }, [selectedItems.length]);
  useEffect10(function() {
    if (isInitialMountRef.current) {
      return;
    }
    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props,
    state
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps");
  useEffect10(function() {
    isInitialMountRef.current = false;
  }, []);
  var selectedItemKeyDownHandlers = useMemo10(function() {
    var _ref;
    return _ref = {}, _ref[keyNavigationPrevious] = function() {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    }, _ref[keyNavigationNext] = function() {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    }, _ref.Delete = function Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    }, _ref.Backspace = function Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }, _ref;
  }, [dispatch, keyNavigationNext, keyNavigationPrevious]);
  var dropdownKeyDownHandlers = useMemo10(function() {
    var _ref2;
    return _ref2 = {}, _ref2[keyNavigationPrevious] = function(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    }, _ref2.Backspace = function Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }, _ref2;
  }, [dispatch, keyNavigationPrevious]);
  var getSelectedItemProps = useCallback6(function(_temp) {
    var _extends22;
    var _ref3 = _temp === void 0 ? {} : _temp, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onClick = _ref3.onClick, onKeyDown = _ref3.onKeyDown, selectedItem = _ref3.selectedItem, index = _ref3.index, rest = _objectWithoutPropertiesLoose2(_ref3, _excluded);
    var latestState = latest.current.state;
    var itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);
    if (itemIndex < 0) {
      throw new Error("Pass either selectedItem or index in getSelectedItemProps!");
    }
    var selectedItemHandleClick = function selectedItemHandleClick2() {
      dispatch({
        type: SelectedItemClick,
        index
      });
    };
    var selectedItemHandleKeyDown = function selectedItemHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    };
    return _extends2((_extends22 = {}, _extends22[refKey] = handleRefs(ref, function(selectedItemNode) {
      if (selectedItemNode) {
        selectedItemRefs.current.push(selectedItemNode);
      }
    }), _extends22.tabIndex = index === latestState.activeIndex ? 0 : -1, _extends22.onClick = callAllEventHandlers(onClick, selectedItemHandleClick), _extends22.onKeyDown = callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown), _extends22), rest);
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  var getDropdownProps = useCallback6(function(_temp2, _temp3) {
    var _extends3;
    var _ref4 = _temp2 === void 0 ? {} : _temp2, _ref4$refKey = _ref4.refKey, refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey, ref = _ref4.ref, onKeyDown = _ref4.onKeyDown, onClick = _ref4.onClick, _ref4$preventKeyActio = _ref4.preventKeyAction, preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio, rest = _objectWithoutPropertiesLoose2(_ref4, _excluded2);
    var _ref5 = _temp3 === void 0 ? {} : _temp3, _ref5$suppressRefErro = _ref5.suppressRefError, suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;
    setGetterPropCallInfo("getDropdownProps", suppressRefError, refKey, dropdownRef);
    var dropdownHandleKeyDown = function dropdownHandleKeyDown2(event) {
      var key = normalizeArrowKey(event);
      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    };
    var dropdownHandleClick = function dropdownHandleClick2() {
      dispatch({
        type: DropdownClick
      });
    };
    return _extends2((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(dropdownNode) {
      if (dropdownNode) {
        dropdownRef.current = dropdownNode;
      }
    }), _extends3), !preventKeyAction && {
      onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
      onClick: callAllEventHandlers(onClick, dropdownHandleClick)
    }, rest);
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);
  var addSelectedItem = useCallback6(function(selectedItem) {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  var removeSelectedItem = useCallback6(function(selectedItem) {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem
    });
  }, [dispatch]);
  var setSelectedItems = useCallback6(function(newSelectedItems) {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  var setActiveIndex = useCallback6(function(newActiveIndex) {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  var reset = useCallback6(function() {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  return {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    setSelectedItems,
    setActiveIndex,
    reset,
    selectedItems,
    activeIndex
  };
}

// app/hooks/useLatest.ts
import {useEffect as useEffect11, useRef as useRef14} from "react";
function useLatest(value) {
  const ref = useRef14(value);
  useEffect11(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

// app/hooks/useUpdateEffect.ts
import {
  useEffect as useEffect12,
  useRef as useRef15
} from "react";
var useUpdateEffect = (effect4, deps) => {
  const isMountedRef = useRef15(false);
  useEffect12(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      return effect4();
    }
  }, deps);
};
var useUpdateEffect_default = useUpdateEffect;

// app/ui/icons/Chevron.tsx
function ChevronIcon(props) {
  return /* @__PURE__ */ createElement(Icon, {
    ...props
  }, /* @__PURE__ */ createElement("path", {
    d: "M6 9L12 15L18 9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// app/createRepl/Menu.tsx
function Menu2({children}) {
  return /* @__PURE__ */ createElement(Surface, {
    tag: "ul",
    elevated: true,
    css: [
      {
        zIndex: 2,
        maxHeight: 300,
        position: "absolute",
        overflowY: "auto",
        width: "100%",
        left: 0,
        top: vars.space8,
        border: "1px solid",
        borderColor: vars.outlineDimmest,
        listStyle: "none"
      },
      rcss.borderRadius(8)
    ]
  }, children);
}

// app/createRepl/MenuItem.tsx
import {
  cloneElement as cloneElement4
} from "react";

// app/components/Dropdown.tsx
import React9 from "react";
var escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var ExactMatchSubString = ({
  source,
  match
}) => {
  if (!source.toLowerCase().includes(match.toLowerCase())) {
    return /* @__PURE__ */ createElement(Fragment, null, source);
  }
  const [start2, end2] = source.split(new RegExp(`${escapeRegExp(match)}(.+)?`, "i"));
  return /* @__PURE__ */ createElement(Fragment, null, [
    start2,
    /* @__PURE__ */ createElement("b", {
      key: match
    }, source.substr(start2.length, match.length)),
    end2
  ]);
};

// app/createRepl/MenuItem.tsx
import {css as css8} from "@emotion/react";
var menuItemStyles = ({
  highlighted,
  selected
}) => css8([
  rcss.rowWithGap(8),
  rcss.align.center,
  rcss.p(8),
  {
    cursor: "pointer"
  },
  highlighted && {
    backgroundColor: interactive.listItem[":not([disabled])"][":active"].backgroundColor
  },
  selected && {
    backgroundColor: vars.accentPrimaryDefault,
    color: vars.foregroundDefault
  }
]);
function MenuItem2(props) {
  const title = props.filter ? /* @__PURE__ */ createElement(ExactMatchSubString, {
    source: props.title,
    match: props.filter
  }) : props.title;
  const icon = props.icon ? cloneElement4(props.icon, {
    size: props.subtitle ? 24 : 16
  }) : null;
  if (props.subtitle) {
    return /* @__PURE__ */ createElement(View, {
      css: menuItemStyles(props)
    }, icon, /* @__PURE__ */ createElement(View, {
      css: [rcss.colWithGap(2), rcss.flex.growAndShrink(1)]
    }, /* @__PURE__ */ createElement(ForwardedText, null, title), /* @__PURE__ */ createElement(ForwardedText, {
      variant: "small",
      css: !props.selected && rcss.color.foregroundDimmer
    }, props.subtitle)));
  }
  return /* @__PURE__ */ createElement(View, {
    css: menuItemStyles(props)
  }, icon, /* @__PURE__ */ createElement(ForwardedText, null, title));
}

// app/rui/Select.tsx
function Select({
  id,
  items,
  initialSelectedItem,
  onChange,
  placeholder,
  ...props
}) {
  const select = useSelect({
    items,
    initialSelectedItem
  });
  const onChangeRef = useLatest(onChange);
  useUpdateEffect_default(() => {
    if (!select.selectedItem) {
      return;
    }
    onChangeRef.current(select.selectedItem);
  }, [select.selectedItem, onChangeRef]);
  return /* @__PURE__ */ createElement(View, {
    id
  }, /* @__PURE__ */ createElement("button", {
    type: "button",
    css: [
      interactive.filled,
      rcss.p(8),
      {
        border: "0 none",
        outline: "0 none",
        color: vars.foregroundDefault
      }
    ],
    ...props,
    ...select.getToggleButtonProps()
  }, /* @__PURE__ */ createElement(View, {
    css: [rcss.align.center, rcss.rowWithGap(8)]
  }, select.selectedItem ? /* @__PURE__ */ createElement(Fragment, null, select.selectedItem.icon ? cloneElement5(select.selectedItem.icon, {size: 16}) : null, /* @__PURE__ */ createElement(ForwardedText, {
    css: [rcss.flex.growAndShrink(1), {textAlign: "left"}]
  }, select.selectedItem.title)) : /* @__PURE__ */ createElement(ForwardedText, {
    color: "dimmer",
    css: [rcss.flex.growAndShrink(1), {textAlign: "left"}]
  }, placeholder), /* @__PURE__ */ createElement(ChevronIcon, null))), /* @__PURE__ */ createElement("div", {
    ...select.getMenuProps(),
    css: {position: "relative"}
  }, select.isOpen && items.length > 0 ? /* @__PURE__ */ createElement(Menu2, null, items.map((item, index) => /* @__PURE__ */ createElement("li", {
    key: item.title,
    ...select.getItemProps({item, index})
  }, /* @__PURE__ */ createElement(MenuItem2, {
    highlighted: index === select.highlightedIndex,
    selected: item === select.selectedItem,
    icon: item.icon,
    title: item.title
  })))) : null));
}

// app/ui/icons/Code.tsx
function CodeIcon(props) {
  return /* @__PURE__ */ createElement(Icon, {
    ...props
  }, /* @__PURE__ */ createElement("path", {
    d: "M16 18L22 12L16 6M8 6L2 12L8 18",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// app/rui/standalone/index.tsx
function Root({
  theme = "light",
  children
}) {
  return /* @__PURE__ */ createElement("div", {
    className: `${ROOT_THEME_CLASS} ${theme}`
  }, /* @__PURE__ */ createElement(Global, {
    styles: globalStyles
  }), /* @__PURE__ */ createElement(Surface, null, children));
}
export {
  Button_default as Button,
  Checkbox,
  CodeIcon,
  ForwardedHeader as Header,
  IconButton,
  Menu,
  Root,
  Select,
  Surface,
  ForwardedText as Text,
  Tooltip,
  View,
  globalStyles,
  rcss,
  vars
};
