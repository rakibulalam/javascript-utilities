'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const optionsType = {
    LESS_THAN_TWENTY: ['',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'],
    TENTHS_LESS_THAN_HUNDRED: ['',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'],
    QUADRILLION_TO_HUNDRED: ['quadrillion', 'trillion', 'billion', 'crore', 'lakh', 'thousand', 'hundread'],
    OVERFLOW_MESSAGE: 'overflow',
    IS_SHOW_ONLY: true,
};
exports.default = (value, options = optionsType) => {
    const number = value.toString();
    if (number.length === 0)
        return;
    const [decimalValue, fractionValue] = number.split('.');
    if (decimalValue.length > 15)
        return 'overflow';
    const n = ('000000000000000' + decimalValue).substr(-15).match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n)
        return;
    const { LESS_THAN_TWENTY: a, TENTHS_LESS_THAN_HUNDRED: b, QUADRILLION_TO_HUNDRED: d } = options;
    let words = '';
    words += (Number(n[1]) !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + d[0] + ' ' : '';
    words += (Number(n[2]) !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + d[1] + ' ' : '';
    words += (Number(n[3]) !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + d[2] + ' ' : '';
    words += (Number(n[4]) !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + d[3] + ' ' : '';
    words += (Number(n[5]) !== 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + d[4] + ' ' : '';
    words += (Number(n[6]) !== 0) ? (a[Number(n[6])] || b[n[6][0]] + ' ' + a[n[6][1]]) + d[5] + ' ' : '';
    words += (Number(n[7]) !== 0) ? (a[Number(n[7])] || b[n[7][0]] + ' ' + a[n[7][1]]) + d[6] + ' ' : '';
    if (fractionValue) {
        const coin = fractionValue.length === 1 ? fractionValue + '0' : fractionValue;
        words += (Number(n[8]) !== 0) ? (a[Number(n[8])] || b[n[8][0]] + ' ' + a[n[8][1]]) : '';
        words += (coin != 0) ? ((words != '') ? 'and ' : '') + (a[Number(coin)] || b[coin[0]] + ' ' + a[coin[1]]) + 'cent only ' : '';
    }
    else {
        words += (Number(n[8]) !== 0) ? ((words != '') ? 'and ' : '') + (a[Number(n[8])] || b[n[8][0]] + ' ' + a[n[8][1]]) + 'only ' : '';
    }
    return words;
};
//# sourceMappingURL=numbertowords.js.map