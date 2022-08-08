// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import 'cypress-mochawesome-reporter/register'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

// Assign a video file to each test result
import addContext from 'mochawesome/addContext'
Cypress.on("test:after:run", (test, runnable) => {
    let videoName = Cypress.spec.name
    videoName = videoName.replace('/.js.*', '.js')
    const videoUrl = 'videos/' + videoName + '.mp4'
    addContext({ test }, videoUrl)
});

// load and register the grep feature using "require" function
// https://github.com/cypress-io/cypress-grep
const registerCypressGrep = require('cypress-grep')
registerCypressGrep()