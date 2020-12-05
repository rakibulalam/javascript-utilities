module.exports = {
    extends: "get-off-my-lawn",
    // plugins: ["get-off-my-lawn"],

    rules: {
        "import/no-extraneous-dependencies": 0,
        "node/no-extraneous-import": 0,
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        // 'object-literal-sort-keys': 1
    },

    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        /*
         * "sort-imports": [
         *     "error",
         *     {
         *         ignoreCase: false,
         *         ignoreDeclarationSort: false,
         *         ignoreMemberSort: false,
         *         memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
         *     },
         * ],
         */
    },
};
