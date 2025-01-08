const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report/", 
    charts: true,               
    reportFilename: "my-report", 
    reportPageTitle: "Docker report", 
    embeddedScreenshots: true,   
    inlineAssets: true,          
    overwrite: true,             
    html: true,                  
    json: false,                 
  },
  e2e: {
    baseUrl: 'https://gh-users-search.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.js', 
  },

});
