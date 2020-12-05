module.exports = {
    processors: ["stylelint-processor-styled-components"],
    extends: [
        "stylelint-config-get-off-my-lawn",
        "stylelint-config-styled-components",
    ],
    plugins: ["stylelint-prettier"],
    rules: {
        // disabled because of prettier
        "number-leading-zero": null,
        "prettier/prettier": true,
        // disabled because of styled-components
        "declaration-empty-line-before": null,
        "order/properties-alphabetical-order": null,
        "value-keyword-case": null,
    },
};
