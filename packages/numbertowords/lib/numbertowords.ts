"use strict";

export type numberToWordOptionTypes = {
    LESS_THAN_TWENTY: string[];
    TENTHS_LESS_THAN_HUNDRED: string[];
    QUADRILLION_TO_HUNDRED: string[];
    OVERFLOW_MESSAGE: string;
    IS_SHOW_ONLY: boolean;
};
const optionsType: numberToWordOptionTypes = {
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
    IS_SHOW_ONLY: true,
};
export default (
    value: number,
    options: numberToWordOptionTypes = optionsType
) => {
    if (value === 0) return "";
    const number = value.toString();
    /** if number has no value */
    if (number.length === 0) return "";

    /** if number has floating point */

    const [decimalValue, fractionValue]: string[] = number.split(".");

    if (decimalValue.length > 15) return "overflow";

    let n: string[] = ("000000000000000" + decimalValue)
        .substr(-15)
        .match(
            /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/
        ) as string[];
    if (!n) return;
    const {
        LESS_THAN_TWENTY: a,
        TENTHS_LESS_THAN_HUNDRED: b,
        QUADRILLION_TO_HUNDRED: d,
    } = options;

    let words: string = "";
    const isCoin: boolean = !!fractionValue;
    // const coin = fractionValue && fractionValue.length>1?fractionValue :fractionValue+"0";

    //   (a[Number(n[index][1])] ? a[Number(n[index][1])] + " " : "") +
    const numberToWord = (index: number): string => {
        /** if coin existed */

        n = index === 0 && isCoin == true ? [fractionValue] : n;

        const aIndexValue = Number(n[index][1]);
        const bIndexValue = Number(n[index][0]);
        const dIndexValue = d[index - 1];
        const nIndexValue = Number(n[index]);

        let result =
            words !== "" &&
            ((index === 8 && isCoin === false) ||
                (index === 0 && isCoin === true))
                ? "and "
                : "";
        result +=
            index === 0 && isCoin && fractionValue[0] === "0" ? "zero " : "";
        if (nIndexValue !== 0) {
            if (nIndexValue <= 19) {
                result += a[nIndexValue] + " ";
            } else {
                result +=
                    (a[nIndexValue] || b[bIndexValue]) +
                    " " +
                    (a[aIndexValue] ? a[aIndexValue] + " " : "");
            }
            result += dIndexValue ? dIndexValue + " " : "";
        }
        return result;
    };

    words += numberToWord(1);
    words += numberToWord(2);
    words += numberToWord(3);
    words += numberToWord(4);
    words += numberToWord(5);
    words += numberToWord(6);
    words += numberToWord(7);
    words += numberToWord(8);
    words += numberToWord(0);

    words += isCoin ? "cent only" : "only";

    return words;
};
