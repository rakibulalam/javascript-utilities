"use strict"; // 123456780,9123456.50
Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports["default"] = exports.toFixed = void 0);
function _slicedToArray(arr, i) {
    return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _unsupportedIterableToArray(o, minLen) {
    if (o) {
        if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
                ? Array.from(o)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? _arrayLikeToArray(o, minLen)
                : void 0
        );
    }
}
function _arrayLikeToArray(arr, len) {
    (null == len || len > arr.length) && (len = arr.length);
    for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
        var _arr = [],
            _n = !0,
            _d = !1,
            _e = void 0;
        try {
            for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !(i && _arr.length === i));
                _n = !0
            );
        } catch (err) {
            (_d = !0), (_e = err);
        } finally {
            try {
                _n || null == _i["return"] || _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var ZERO_TO_LESS_THAN_THOUSEND = {
        0: "\u09B6\u09C1\u09A8\u09CD\u09AF",
        1: "\u098F\u0995",
        2: "\u09A6\u09C1\u0987",
        3: "\u09A4\u09BF\u09A8",
        4: "\u099A\u09BE\u09B0",
        5: "\u09AA\u09BE\u0981\u099A",
        6: "\u099B\u09DF",
        7: "\u09B8\u09BE\u09A4",
        8: "\u0986\u099F",
        9: "\u09A8\u09DF",
        10: "\u09A6\u09B6",
        11: "\u098F\u0997\u09BE\u09B0\u09CB",
        12: "\u09AC\u09BE\u09B0\u09CB",
        13: "\u09A4\u09C7\u09B0\u09CB",
        14: "\u099A\u09CC\u09A6\u09CD\u09A6",
        15: "\u09AA\u09A8\u09C7\u09B0\u09CB",
        16: "\u09B7\u09CB\u09B2",
        17: "\u09B8\u09A4\u09C7\u09B0\u09CB",
        18: "\u0986\u09A0\u09BE\u09B0\u09CB",
        19: "\u098A\u09A8\u09BF\u09B6",
        20: "\u09AC\u09BF\u09B6",
        21: "\u098F\u0995\u09C1\u09B6",
        22: "\u09AC\u09BE\u0987\u09B6",
        23: "\u09A4\u09C7\u0987\u09B6",
        24: "\u099A\u09AC\u09CD\u09AC\u09BF\u09B6",
        25: "\u09AA\u0981\u099A\u09BF\u09B6",
        26: "\u099B\u09BE\u09AC\u09CD\u09AC\u09BF\u09B6",
        27: "\u09B8\u09BE\u09A4\u09BE\u09B6",
        28: "\u0986\u09A0\u09BE\u09B6",
        29: "\u098A\u09A8\u09A4\u09CD\u09B0\u09BF\u09B6",
        30: "\u09A4\u09CD\u09B0\u09BF\u09B6",
        31: "\u098F\u0995\u09A4\u09CD\u09B0\u09BF\u09B6",
        32: "\u09AC\u09A4\u09CD\u09B0\u09BF\u09B6",
        33: "\u09A4\u09C7\u09A4\u09CD\u09B0\u09BF\u09B6",
        34: "\u099A\u09CC\u09A4\u09CD\u09B0\u09BF\u09B6",
        35: "\u09AA\u0981\u09DF\u09A4\u09CD\u09B0\u09BF\u09B6",
        36: "\u099B\u09A4\u09CD\u09B0\u09BF\u09B6",
        37: "\u09B8\u09BE\u0987\u09A4\u09CD\u09B0\u09BF\u09B6",
        38: "\u0986\u099F\u09A4\u09CD\u09B0\u09BF\u09B6",
        39: "\u098A\u09A8\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        40: "\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        41: "\u098F\u0995\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        42: "\u09AC\u09BF\u09DF\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",
        43: "\u09A4\u09C7\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",
        44: "\u099A\u09C1\u09DF\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",
        45: "\u09AA\u0981\u09DF\u09A4\u09BE\u09B2\u09CD\u09B2\u09BF\u09B6",
        46: "\u099B\u09C7\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        47: "\u09B8\u09BE\u09A4\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        48: "\u0986\u099F\u099A\u09B2\u09CD\u09B2\u09BF\u09B6",
        49: "\u098A\u09A8\u09AA\u099E\u09CD\u099A\u09BE\u09B6",
        50: "\u09AA\u099E\u09CD\u099A\u09BE\u09B6",
        51: "\u098F\u0995\u09BE\u09A8\u09CD\u09A8",
        52: "\u09AC\u09BE\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",
        53: "\u09A4\u09BF\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",
        54: "\u099A\u09C1\u09AF\u09BC\u09BE\u09A8\u09CD\u09A8",
        55: "\u09AA\u099E\u09CD\u099A\u09BE\u09A8\u09CD\u09A8",
        56: "\u099B\u09BE\u09AA\u09CD\u09AA\u09BE\u09A8\u09CD\u09A8",
        57: "\u09B8\u09BE\u09A4\u09BE\u09A8\u09CD\u09A8",
        58: "\u0986\u099F\u09BE\u09A8\u09CD\u09A8",
        59: "\u098A\u09A8\u09B7\u09BE\u099F",
        60: "\u09B7\u09BE\u099F",
        61: "\u098F\u0995\u09B7\u099F\u09CD\u099F\u09BF",
        62: "\u09AC\u09BE\u09B7\u099F\u09CD\u099F\u09BF",
        63: "\u09A4\u09C7\u09B7\u099F\u09CD\u099F\u09BF",
        64: "\u099A\u09CC\u09B7\u099F\u09CD\u099F\u09BF",
        65: "\u09AA\u0981\u09AF\u09BC\u09B7\u099F\u09CD\u099F\u09BF",
        66: "\u099B\u09C7\u09B7\u099F\u09CD\u099F\u09BF",
        67: "\u09B8\u09BE\u09A4\u09B7\u099F\u09CD\u099F\u09BF",
        68: "\u0986\u099F\u09B7\u099F\u09CD\u099F\u09BF",
        69: "\u098A\u09A8\u09B8\u09A4\u09CD\u09A4\u09B0",
        70: "\u09B8\u09A4\u09CD\u09A4\u09B0",
        71: "\u098F\u0995\u09BE\u09A4\u09CD\u09A4\u09B0",
        72: "\u09AC\u09BE\u09B9\u09BE\u09A4\u09CD\u09A4\u09B0",
        73: "\u09A4\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",
        74: "\u099A\u09C1\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",
        75: "\u09AA\u0981\u099A\u09BE\u09A4\u09CD\u09A4\u09B0",
        76: "\u099B\u09BF\u09AF\u09BC\u09BE\u09A4\u09CD\u09A4\u09B0",
        77: "\u09B8\u09BE\u09A4\u09BE\u09A4\u09CD\u09A4\u09B0",
        78: "\u0986\u099F\u09BE\u09A4\u09CD\u09A4\u09B0",
        79: "\u098A\u09A8\u0986\u09B6\u09BF",
        80: "\u0986\u09B6\u09BF",
        81: "\u098F\u0995\u09BE\u09B6\u09BF",
        82: "\u09AC\u09BF\u09B0\u09BE\u09B6\u09BF",
        83: "\u09A4\u09BF\u09B0\u09BE\u09B6\u09BF",
        84: "\u099A\u09C1\u09B0\u09BE\u09B6\u09BF",
        85: "\u09AA\u0981\u099A\u09BE\u09B6\u09BF",
        86: "\u099B\u09BF\u09AF\u09BC\u09BE\u09B6\u09BF",
        87: "\u09B8\u09BE\u09A4\u09BE\u09B6\u09BF",
        88: "\u0986\u099F\u09BE\u09B6\u09BF",
        89: "\u098A\u09A8\u09A8\u09AC\u09CD\u09AC\u0987",
        90: "\u09A8\u09AC\u09CD\u09AC\u0987",
        91: "\u098F\u0995\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        92: "\u09AC\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        93: "\u09A4\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        94: "\u099A\u09C1\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        95: "\u09AA\u0981\u099A\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        96: "\u099B\u09BF\u09AF\u09BC\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        97: "\u09B8\u09BE\u09A4\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        98: "\u0986\u099F\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        99: "\u09A8\u09BF\u09B0\u09BE\u09A8\u09AC\u09CD\u09AC\u0987",
        100: "\u098F\u0995\u09B6\u09CB",
        200: "\u09A6\u09C1\u0987\u09B6\u09CB",
        300: "\u09A4\u09BF\u09A8\u09B6\u09CB",
        400: "\u099A\u09BE\u09B0\u09B6\u09CB",
        500: "\u09AA\u09BE\u0981\u099A\u09B6\u09CB",
        600: "\u099B\u09DF\u09B6\u09CB",
        700: "\u09B8\u09BE\u09A4\u09B6\u09CB",
        800: "\u0986\u099F\u09B6\u09CB",
        900: "\u09A8\u09DF\u09B6\u09CB",
    },
    toFixed = function (value, fixed) {
        var isRoundPrecision =
            !!(2 < arguments.length && arguments[2] !== void 0) && arguments[2];
        if (value && !1 === isRoundPrecision) {
            var _ref = value
                    .toString()
                    .match(
                        new RegExp("^-?\\d+(?:.\\d{1," + (fixed || -1) + "})?")
                    ),
                _ref2 = _slicedToArray(_ref, 1),
                fixValue = _ref2[0];
            return console.log(fixValue, "fixvalue"), parseFloat(fixValue);
        }
        return parseFloat(value.toFixed(fixed));
    };
exports.toFixed = toFixed;
var _default = function () {
    var number =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
        currencyTitle =
            1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : "\u099F\u09BE\u0995\u09BE",
        coinTitle =
            2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : "\u09AA\u09DF\u09B8\u09BE",
        _number$toString$spli = number.toString().split("."),
        _number$toString$spli2 = _slicedToArray(_number$toString$spli, 2),
        hasValue = _number$toString$spli2[0],
        hasCoin = _number$toString$spli2[1],
        value = parseInt(hasValue),
        words = "",
        toWords = function (digit, determinantor) {
            var result = "",
                division = Math.floor(value / digit);
            return (
                0 < division &&
                    ((value %= digit),
                    console.log(value, "valueooooo"),
                    (result = ZERO_TO_LESS_THAN_THOUSEND[division]),
                    !result &&
                        ((result =
                            ZERO_TO_LESS_THAN_THOUSEND[
                                100 * Math.floor(division / 100)
                            ]),
                        (result +=
                            " " + ZERO_TO_LESS_THAN_THOUSEND[division % 100])),
                    (result +=
                        (0 < determinantor.length ? " " : "") +
                        determinantor +
                        (0 === value ? "" : " "))),
                result
            );
        };
    return (
        (words += toWords(1e14, "\u0995\u09CB\u099F\u09BF")),
        (words += toWords(1e12, "\u09B2\u09BE\u0996")),
        (words += toWords(1e10, "\u09B9\u09BE\u099C\u09BE\u09B0")),
        (words += toWords(1e7, "\u0995\u09CB\u099F\u09BF")),
        (words += toWords(1e5, "\u09B2\u09BE\u0996")),
        (words += toWords(1e3, "\u09B9\u09BE\u099C\u09BE\u09B0")),
        (words += "" === words || hasCoin ? "" : "\u098F\u09AC\u0982 "),
        (words += toWords(1, currencyTitle, !hasCoin)),
        hasCoin &&
            ((value = parseInt((hasCoin + "00").substring(0, 2))),
            console.log(
                value,
                "hasCoin value",
                hasCoin + "00",
                (hasCoin + "00").substring(0, 1)
            ),
            (words += "" === words ? "" : " \u098F\u09AC\u0982 "),
            (words += toWords(1, coinTitle, !0))),
        words
    );
};
exports["default"] = _default;
