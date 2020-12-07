module.exports = {
    plugins: ["babel-plugin-styled-components"],
    presets: [
        [
            "minify",
            {
                builtIns: false,
                evaluate: false,
                mangle: false,
            },
        ],
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
    ],
};
