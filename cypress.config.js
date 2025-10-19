const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://telnyx.com",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },

    env: {
      CI: process.env.CI === "true",
    },
  },
});
