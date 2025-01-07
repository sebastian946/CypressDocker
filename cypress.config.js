const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gh-users-search.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.js', 
  },
});
