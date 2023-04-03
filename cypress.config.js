const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/**/*.{ts,tsx,js,jsx,feature}"
  },
});

// //local-ui-api-juiceShop
// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     specPattern: "cypress/e2e/**/*.js"
//   },
// });

