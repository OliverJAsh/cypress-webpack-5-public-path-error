const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        supportFile: false,

        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            on(
                "file:preprocessor",
                webpackPreprocessor({
                    webpackOptions: {},
                })
            );
        },
    },
});
