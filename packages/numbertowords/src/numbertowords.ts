// const TEN = 10;
// const ONE = 1;
// const ONE_HUNDRED = 100;
// const ONE_THOUSAND = 1000;
// const ONE_LAKH = 100000;
// const ONE_CORE = 10000000;
// const ONE_BILLION = 1000000000; //         1.000.000.000 (9)
// const ONE_TRILLION = 1000000000000; //     1.000.000.000.000 (12)
// const ONE_QUADRILLION = 1000000000000000;

const ZERO_TO_NINETEEN: string[] = [
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
];

const ZERO_TEN_TO_NINETY: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

const GLOBAL_NUMBER_SYSTEM: [number, string, string?][] = [
    [1000000000000000, "quadrillion"],
    [1000000000000, "trillion"],
    [1000000000, "billion"],
    [1000000, "million"],
    // [100000, 'lakh'],
    [1000, "thousand"],
    [100, "hundred"],
    [1, ""],
];
const SOUTH_ASIA_NUMBER_SYSTEM: [number, string, string?][] = [
    [1000000000000000, "quadrillion"],
    [10000000000000, "hundred", "lakh core"],
    [1000000000000, "lakh", "core"],
    [10000000000, "thousand", "core"],
    [1000000000, "hundred", "core"],
    [10000000, "core"],
    [100000, "lakh"],
    [1000, "thousand"],
    [100, "hundred"],
    [1, ""],
];
export default (
    number: number = 0,
    isSouthAsiaNumberSystem: boolean = true,
    currencyTitle: string = "taka",
    coinTitle: string = "poisha"
): string | undefined => {
    let [hasValue, hasCoin] = number.toString().split(".");

    if (hasValue.length > 17) return "max limit exceeded";

    let value: number = parseInt(hasValue);
    let result: string = "";
    const numberSystem = isSouthAsiaNumberSystem
        ? SOUTH_ASIA_NUMBER_SYSTEM
        : GLOBAL_NUMBER_SYSTEM;
    result = toWords(value, numberSystem);
    result += result ? " " + currencyTitle : "";
    if (hasCoin) {
        value = parseInt((hasCoin + "00").substring(0, 2));
        result += result !== "" && value > 0 ? " and " : "";
        result += geneRator(value, value, "", "");
        result += coinTitle;
    }
    return result;
};

const toWords = (
    value: number,
    numberSystem: [number, string, string?][],
    hasCoin: boolean = false,
    index: number = 0,
    words: string = ""
) => {
    const [systemValue, determinator, family] = numberSystem[index];
    if (systemValue <= value) {
        const division = Math.floor(value / systemValue);
        if (division > 0) {
            value = value % systemValue;
            words +=
                value === 0 &&
                words &&
                (systemValue === 100 || systemValue === 1)
                    ? "and "
                    : "";
            words += geneRator(value, division, determinator, family);
        }
    }
    if (value && index < numberSystem.length) {
        index++;
        words = toWords(value, numberSystem, hasCoin, index, words);
    }
    return words;
};
const geneRator = (
    value: number,
    division: number,
    determinator: string,
    family: string
) => {
    let words: string = ZERO_TO_NINETEEN[division];
    if (!words) {
        const number: string[] = division.toString().split("");
        const [a, b, c] = number;
        let lastWord = "";
        if (number.length === 3) {
            lastWord = ZERO_TO_NINETEEN[c];
            words = ZERO_TO_NINETEEN[a] + " hundred ";
            words +=
                (ZERO_TO_NINETEEN[b + c] || ZERO_TEN_TO_NINETY[b]) +
                (lastWord !== "" ? "-" + lastWord : "");
        } else {
            lastWord = ZERO_TO_NINETEEN[b];
            words =
                (ZERO_TO_NINETEEN[division] || ZERO_TEN_TO_NINETY[a]) +
                (lastWord !== "" ? "-" + lastWord : "");
        }
    }
    words +=
        (determinator ? " " : "") +
        determinator +
        (value ? " " : family ? " " + family : "");
    return words;
};
