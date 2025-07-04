const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cypressOnFix = require('cypress-on-fix'); // Importa apenas uma vez
const addContext = require('./node_modules/mochawesome/src/addContext')


module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  //video: true,
  //retries: 1,
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationpratice.com.br/",
    execTimeout: 5000,
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // Corrige o 'on' com o fix apenas uma vez
      const fixedOn = cypressOnFix(on);

      require('cypress-mochawesome-reporter/plugin')(fixedOn);
      require('cypress-split')(fixedOn, config);
      require('cypress-watch-and-reload/plugins')(fixedOn, config);
      require('@bahmutov/cypress-code-coverage/plugin')(fixedOn, config);

      addCucumberPreprocessorPlugin(fixedOn, config);

      fixedOn(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )
      return config;
    },
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});
