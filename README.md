# cypress-automation-framework

------Work in progres-----

Notes:
npm init

npm install --save-dev cypress@12.6.0

Delete node_modules and upload to git
npm install (to get node_modules)

To launch Cypress:
./node_modules/.bin/cypress open

Useful Extensions in VS:
E56 Mocha Snippets
Material Icon Theme
Code Runner

it. only -- to execyte a particular test case


Chrome addon- Ranorex Selocity

Xpath support:
npm install --save-dev @cypress/xpath 
Add require('@cypress/xpath'); in support/e2e.js file

Assertion Library- Chai

Cypress headless run command:
./node_modules/.bin/cypress run

Cypress headed run command:
./node_modules/.bin/cypress run --headed
./node_modules/.bin/cypress run

Chrome browser run:
./node_modules/.bin/cypress run --browser chrome

Run a particular test:
./node_modules/.bin/cypress run cypress-automation-framework/cypress/e2e/webdriver-uni/contact-us.js

Run all test cases from a folder:
./node_modules/.bin/cypress run cypress-automation-framework/cypress/e2e/webdriver-uni/**
