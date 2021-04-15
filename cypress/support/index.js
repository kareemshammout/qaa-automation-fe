// ***********************************************************
// This example support/index.js is processed and
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
import '@shelex/cypress-allure-plugin';
import 'cypress-wait-until';
require('@shelex/cypress-allure-plugin');

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        cy.allure().attachment("Failure Screenshot",`../cypress/screenshots/${Cypress.spec.name}/${runnable.parent.parent.title} -- ${runnable.parent.title} -- ${test.title} (failed).png`,"image/png")
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
