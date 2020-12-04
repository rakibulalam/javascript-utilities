export declare type numberToWordOptionTypes = {
    LESS_THAN_TWENTY: string[];
    TENTHS_LESS_THAN_HUNDRED: string[];
    QUADRILLION_TO_HUNDRED: string[];
    OVERFLOW_MESSAGE: string;
    IS_SHOW_ONLY: boolean;
};
declare const _default: (value: number, options?: numberToWordOptionTypes) => string;
export default _default;
