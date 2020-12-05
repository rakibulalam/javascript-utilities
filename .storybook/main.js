module.exports = {
    stories: ["../packages/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-viewport/register",
        "@storybook/addon-actions/register",
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("babel-loader"),
                },
                // Optional
                {
                    loader: require.resolve("react-docgen-typescript-loader"),
                },
            ],
        });
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};
