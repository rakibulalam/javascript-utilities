"use strict";
// 123456780,9123456.50
type zeroToNumber = {
    [key: string]: string;
};
const ZERO_TO_LESS_THAN_THOUSEND: zeroToNumber = {
    0: "শুন্য",
    1: "এক",
    2: "দুই",
    3: "তিন",
    4: "চার",
    5: "পাঁচ",
    6: "ছয়",
    7: "সাত",
    8: "আট",
    9: "নয়",
    10: "দশ",
    11: "এগারো",
    12: "বারো",
    13: "তেরো",
    14: "চৌদ্দ",
    15: "পনেরো",
    16: "ষোল",
    17: "সতেরো",
    18: "আঠারো",
    19: "ঊনিশ",
    20: "বিশ",
    21: "একুশ",
    22: "বাইশ",
    23: "তেইশ",
    24: "চব্বিশ",
    25: "পঁচিশ",
    26: "ছাব্বিশ",
    27: "সাতাশ",
    28: "আঠাশ",
    29: "ঊনত্রিশ",
    30: "ত্রিশ",
    31: "একত্রিশ",
    32: "বত্রিশ",
    33: "তেত্রিশ",
    34: "চৌত্রিশ",
    35: "পঁয়ত্রিশ",
    36: "ছত্রিশ",
    37: "সাইত্রিশ",
    38: "আটত্রিশ",
    39: "ঊনচল্লিশ",
    40: "চল্লিশ",
    41: "একচল্লিশ",
    42: "বিয়াল্লিশ",
    43: "তেতাল্লিশ",
    44: "চুয়াল্লিশ",
    45: "পঁয়তাল্লিশ",
    46: "ছেচল্লিশ",
    47: "সাতচল্লিশ",
    48: "আটচল্লিশ",
    49: "ঊনপঞ্চাশ",
    50: "পঞ্চাশ",
    51: "একান্ন",
    52: "বায়ান্ন",
    53: "তিপ্পান্ন",
    54: "চুয়ান্ন",
    55: "পঞ্চান্ন",
    56: "ছাপ্পান্ন",
    57: "সাতান্ন",
    58: "আটান্ন",
    59: "ঊনষাট",
    60: "ষাট",
    61: "একষট্টি",
    62: "বাষট্টি",
    63: "তেষট্টি",
    64: "চৌষট্টি",
    65: "পঁয়ষট্টি",
    66: "ছেষট্টি",
    67: "সাতষট্টি",
    68: "আটষট্টি",
    69: "ঊনসত্তর",
    70: "সত্তর",
    71: "একাত্তর",
    72: "বাহাত্তর",
    73: "তিয়াত্তর",
    74: "চুয়াত্তর",
    75: "পঁচাত্তর",
    76: "ছিয়াত্তর",
    77: "সাতাত্তর",
    78: "আটাত্তর",
    79: "ঊনআশি",
    80: "আশি",
    81: "একাশি",
    82: "বিরাশি",
    83: "তিরাশি",
    84: "চুরাশি",
    85: "পঁচাশি",
    86: "ছিয়াশি",
    87: "সাতাশি",
    88: "আটাশি",
    89: "ঊননব্বই",
    90: "নব্বই",
    91: "একানব্বই",
    92: "বিরানব্বই",
    93: "তিরানব্বই",
    94: "চুরানব্বই",
    95: "পঁচানব্বই",
    96: "ছিয়ানব্বই",
    97: "সাতানব্বই",
    98: "আটানব্বই",
    99: "নিরানব্বই",
    100: "একশো",
    200: "দুইশো",
    300: "তিনশো",
    400: "চারশো",
    500: "পাঁচশো",
    600: "ছয়শো",
    700: "সাতশো",
    800: "আটশো",
    900: "নয়শো",
};
export const toFixed = (
    value: number,
    fixed: number,
    isRoundPrecision: boolean = false
): number => {
    if (value && isRoundPrecision === false) {
        const [fixValue]: string[] = value
            .toString()
            .match(
                new RegExp("^-?\\d+(?:.\\d{1," + (fixed || -1) + "})?")
            ) as string[];
        console.log(fixValue, "fixvalue");
        return parseFloat(fixValue);
    } else {
        return parseFloat(value.toFixed(fixed));
    }
};

export default (
    number: number = 0,
    currencyTitle: string = "টাকা",
    coinTitle: string = "পয়সা"
): string | undefined => {
    let [hasValue, hasCoin] = number.toString().split(".");

    let value: number = parseInt(hasValue);

    let words: string = "";
    const toWords = (digit: number, determinantor: string, and?: boolean) => {
        let result: string = "";
        const division: number = Math.floor(value / digit);
        if (division > 0) {
            value = value % digit; //remainder
            console.log(value, "valueooooo");

            result = ZERO_TO_LESS_THAN_THOUSEND[division];

            if (!result) {
                result =
                    ZERO_TO_LESS_THAN_THOUSEND[
                        Math.floor(division / 100) * 100
                    ];
                result += " " + ZERO_TO_LESS_THAN_THOUSEND[division % 100];
            }
            result +=
                (determinantor.length > 0 ? " " : "") +
                determinantor +
                (value === 0 ? "" : " ");
        }
        return result;
    };
    words += toWords(100000000000000, "কোটি");
    words += toWords(1000000000000, "লাখ");
    words += toWords(10000000000, "হাজার");

    words += toWords(10000000, "কোটি");

    words += toWords(100000, "লাখ");
    words += toWords(1000, "হাজার");

    words += words !== "" && !hasCoin ? "এবং " : "";
    words += toWords(1, currencyTitle, !hasCoin);

    if (hasCoin) {
        value = parseInt((hasCoin + "00").substring(0, 2));

        console.log(
            value,
            "hasCoin value",
            hasCoin + "00",
            (hasCoin + "00").substring(0, 1)
        );

        words += words !== "" ? " এবং " : "";

        words += toWords(1, coinTitle, true);
    }

    return words;
};
