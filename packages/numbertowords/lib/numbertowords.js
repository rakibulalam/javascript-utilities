"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports["default"] = void 0;

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
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
        ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

var optionsType = {
    LESS_THAN_TWENTY: [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ],
    TENTHS_LESS_THAN_HUNDRED: [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ],
    QUADRILLION_TO_HUNDRED: [
        "quadrillion",
        "trillion",
        "billion",
        "crore",
        "lakh",
        "thousand",
        "hundread",
    ],
    OVERFLOW_MESSAGE: "overflow",
    IS_SHOW_ONLY: true,
};

var _default = function _default(value) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : optionsType;
    var number = value.toString();
    /** if number has no value */

    if (number.length === 0) return;
    /** if number has floating point */

    var _number$split = number.split("."),
        _number$split2 = _slicedToArray(_number$split, 2),
        decimalValue = _number$split2[0],
        fractionValue = _number$split2[1];

    if (decimalValue.length > 15) return "overflow";
    var n = ("000000000000000" + decimalValue)
        .substr(-15)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var a = options.LESS_THAN_TWENTY,
        b = options.TENTHS_LESS_THAN_HUNDRED,
        d = options.QUADRILLION_TO_HUNDRED;
    var words = "";
    words +=
        Number(n[1]) !== 0
            ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + d[0] + " "
            : "";
    words +=
        Number(n[2]) !== 0
            ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + d[1] + " "
            : "";
    words +=
        Number(n[3]) !== 0
            ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + d[2] + " "
            : "";
    words +=
        Number(n[4]) !== 0
            ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + d[3] + " "
            : "";
    words +=
        Number(n[5]) !== 0
            ? (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) + d[4] + " "
            : "";
    words +=
        Number(n[6]) !== 0
            ? (a[Number(n[6])] || b[n[6][0]] + " " + a[n[6][1]]) + d[5] + " "
            : "";
    words +=
        Number(n[7]) !== 0
            ? (a[Number(n[7])] || b[n[7][0]] + " " + a[n[7][1]]) + d[6] + " "
            : "";

    if (fractionValue) {
        var coin =
            fractionValue.length === 1 ? fractionValue + "0" : fractionValue;
        words +=
            Number(n[8]) !== 0
                ? a[Number(n[8])] || b[n[8][0]] + " " + a[n[8][1]]
                : "";
        words +=
            coin != 0
                ? (words != "" ? "and " : "") +
                  (a[Number(coin)] || b[coin[0]] + " " + a[coin[1]]) +
                  "cent only "
                : "";
    } else {
        words +=
            Number(n[8]) !== 0
                ? (words != "" ? "and " : "") +
                  (a[Number(n[8])] || b[n[8][0]] + " " + a[n[8][1]]) +
                  "only "
                : "";
    }

    return words;
};

exports["default"] = _default;
