"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports["default"] = void 0);
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
            "core",
            "lakh",
            "thousand",
            "hundred",
        ],
        OVERFLOW_MESSAGE: "overflow",
        IS_SHOW_ONLY: !0,
    },
    _default = function (value) {
        var options =
            1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : optionsType;
        if (0 === value) return "";
        var number = value.toString();
        /** if number has no value */ if (0 === number.length) return "";
        /** if number has floating point */ var _number$split = number.split(
                "."
            ),
            _number$split2 = _slicedToArray(_number$split, 2),
            decimalValue = _number$split2[0],
            fractionValue = _number$split2[1];
        if (15 < decimalValue.length) return "overflow";
        var n = ("000000000000000" + decimalValue)
            .substr(-15)
            .match(
                /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/
            );
        if (n) {
            var a = options.LESS_THAN_TWENTY,
                b = options.TENTHS_LESS_THAN_HUNDRED,
                d = options.QUADRILLION_TO_HUNDRED,
                words = "",
                isCoin = !!fractionValue,
                numberToWord = function (index) {
                    n = 0 === index && !0 == isCoin ? [fractionValue] : n;
                    var aIndexValue = +n[index][1],
                        bIndexValue = +n[index][0],
                        dIndexValue = d[index - 1],
                        nIndexValue = +n[index],
                        result =
                            "" !== words &&
                            ((8 === index && !1 === isCoin) ||
                                (0 === index && !0 === isCoin))
                                ? "and "
                                : "";
                    return (
                        (result +=
                            0 === index && isCoin && "0" === fractionValue[0]
                                ? "zero "
                                : ""),
                        0 !== nIndexValue &&
                            ((result +=
                                19 >= nIndexValue
                                    ? a[nIndexValue] + " "
                                    : (a[nIndexValue] || b[bIndexValue]) +
                                      " " +
                                      (a[aIndexValue]
                                          ? a[aIndexValue] + " "
                                          : "")),
                            (result += dIndexValue ? dIndexValue + " " : "")),
                        result
                    );
                };
            return (
                (words += numberToWord(1)),
                (words += numberToWord(2)),
                (words += numberToWord(3)),
                (words += numberToWord(4)),
                (words += numberToWord(5)),
                (words += numberToWord(6)),
                (words += numberToWord(7)),
                (words += numberToWord(8)),
                (words += numberToWord(0)),
                (words += isCoin ? "cent only" : "only"),
                words
            );
        }
    };
exports["default"] = _default;
