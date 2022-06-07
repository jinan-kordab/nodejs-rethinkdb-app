/// <reference types="cypress" />
context('Landing', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
    cy.generalNavbar();
  })

  it('verify landing page header text', () => {
    cy.get('[data-test-id="landing-header"]').should("exist").should("be.visible");
  })

  it('verify landing page header body text', () => {
    cy.get('[data-test-id="landing-description-text"]')
  })

  it('login button', () => {
    cy.get('[data-test-id="landing-login-btn"]').should("exist").should("be.visible");
  })

  it('signup button', () => {
    cy.get('[data-test-id="landing-signup-btn"]').should("exist").should("be.visible");
  })
})