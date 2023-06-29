const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
    "defaultCommandTimeout": 120000,
    "pageLoadTimeout": 180000,
    "chromeWebSecurity": false,
    "baseUrl": "https://example.cypress.io",
    "retries": {
      "runMode": 2, 
      "openMode": 2
    },
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "configFile": "reporter-config.json"
    }    
  },
});
