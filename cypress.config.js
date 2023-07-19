const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://re7.r-smart.com/v2/#",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      
      // implement node event listeners here
    },


  },

  projectId: "5zxfuo",
  viewportHeight: 960,
  viewportWidth: 1536
  
  

});


  
