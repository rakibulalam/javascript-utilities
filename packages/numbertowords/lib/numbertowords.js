"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports["default"] = void 0);
function _slicedToArray(a, b) {
    return (
        _arrayWithHoles(a) ||
        _iterableToArrayLimit(a, b) ||
        _unsupportedIterableToArray(a, b) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _unsupportedIterableToArray(a, b) {
    if (a) {
        if ("string" == typeof a) return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
            "Object" === c && a.constructor && (c = a.constructor.name),
            "Map" === c || "Set" === c
                ? Array.from(a)
                : "Arguments" === c ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                ? _arrayLikeToArray(a, b)
                : void 0
        );
    }
}
function _arrayLikeToArray(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
    return d;
}
function _iterableToArrayLimit(a, b) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) {
        var c = [],
            d = !0,
            e = !1,
            f = void 0;
        try {
            for (
                var g, h = a[Symbol.iterator]();
                !(d = (g = h.next()).done) &&
                (c.push(g.value), !(b && c.length === b));
                d = !0
            );
        } catch (a) {
            (e = !0), (f = a);
        } finally {
            try {
                d || null == h["return"] || h["return"]();
            } finally {
                if (e) throw f;
            }
        }
        return c;
    }
}
function _arrayWithHoles(a) {
    if (Array.isArray(a)) return a;
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
    _default = function (c) {
        var e =
            1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : optionsType;
        if (0 === c) return "";
        var f = c.toString();
        /** if number has no value */ if (0 === f.length) return "";
        /** if number has floating point */ var g = f.split("."),
            h = _slicedToArray(g, 2),
            i = h[0],
            j = h[1];
        if (15 < i.length) return "overflow";
        var k = ("000000000000000" + i)
            .substr(-15)
            .match(
                /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/
            );
        if (k) {
            var l = e.LESS_THAN_TWENTY,
                a = e.TENTHS_LESS_THAN_HUNDRED,
                b = e.QUADRILLION_TO_HUNDRED,
                d = "",
                m = !!j,
                o = function (c) {
                    k = 0 === c && !0 == m ? [j] : k;
                    var e = +k[c][1],
                        f = +k[c][0],
                        g = b[c - 1],
                        h = +k[c],
                        i =
                            "" !== d &&
                            ((8 === c && !1 === m) || (0 === c && !0 === m))
                                ? "and "
                                : "";
                    return (
                        (i += 0 === c && m && "0" === j[0] ? "zero " : ""),
                        0 !== h &&
                            ((i +=
                                19 >= h
                                    ? l[h] + " "
                                    : (l[h] || a[f]) +
                                      " " +
                                      (l[e] ? l[e] + " " : "")),
                            (i += g ? g + " " : "")),
                        i
                    );
                };
            return (
                (d += o(1)),
                (d += o(2)),
                (d += o(3)),
                (d += o(4)),
                (d += o(5)),
                (d += o(6)),
                (d += o(7)),
                (d += o(8)),
                (d += o(0)),
                (d += m ? "cent only" : "only"),
                d
            );
        }
    };
exports["default"] = _default;
