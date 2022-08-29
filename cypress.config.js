const { defineConfig } = require("cypress");

//For Cucumber Integration
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { config } = require("cypress/types/bluebird");
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin

//const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
//const addCucumberPreprocessorPlugin = require ("cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
//const addCucumberPreprocessorPlugin = require("@testing-library/cypress").addCucumberPreprocessorPlugin
//const createEsbuildPlugin = require ("cypress-cucumber-preprocessor").createEsbuildPlugin;

// module.exports = defineConfig({
//   projectId: 'sg6v2p',
//   e2e: {
//    async setupNodeEvents(on, config) {
//      const bundler = createBundler({
//       plugins: [createEsbuildPlugin(config)],
//      });

//      on("file:preprocessor", bundler);
//      await addCucumberPreprocessorPlugin(on, config);

//      return config;
//    },


const cucumber = require ('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()) 
}

   module.exports = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
    // To use esBuild for the bundler when preprocessing
    on(
      'file:preprocessor',
      createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      })
    )
    return config
  },

{

      specPattern: ["**/*.feature”, “cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
      baseUrl: "https://one.test.lightboxre.com/",
      chromeWebSecurity: false,

    
}
