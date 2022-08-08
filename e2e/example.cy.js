/// <reference types="cypress" />

describe('example e2e tests', () => {

  it('basic test', () => {
    cy.visit('/');
    cy.contains('type').click();
    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions');
    // Get an input, type into it and verify
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
    });

    // Data-Driven Test
    const urls = require('../fixtures/urls.json');
    for (const url of urls) {
      it(`check ${url}`, () => {
        cy.visit(url);
      });
    };
  
  });
