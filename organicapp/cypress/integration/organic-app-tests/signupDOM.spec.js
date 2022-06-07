/// <reference types="cypress" />
context('Signup', () => {

  before(() => {
    cy.visit('http://localhost:3000/signup')
  })

  it('signup header', () => {
    cy.get('[data-test-id="singup-title"]')
      .should("exist")
      .should("be.visible")
  })

  it('signup header body', () => {
    cy.get('[data-test-id="sinup-text"]')
      .should("exist")
      .should("be.visible")
  })

  it('username', () => {
    cy.get('[data-test-id="signup-username"]')
      .should("exist")
      .should("be.visible")
  })

  it('username label', () => {
    cy.get('[data-test-id="signup-username-label"]')
      .should("exist")
      .should("be.visible")
  })

  it('password', () => {
    cy.get('[data-test-id="signup-password"]')
      .should("exist")
      .should("be.visible")
  })

  it('password label', () => {
    cy.get('[data-test-id="signup-password-label"]')
      .should("exist")
      .should("be.visible")
  })

  it('signup button', () => {
    cy.get('[data-test-id="signup-submit-button"]')
      .should("exist")
      .should("be.visible")
  })

  it('user terms of use', () => {
    cy.get('[data-test-id="signup-terms-of-use"]')
      .should("exist")
      .should("be.visible")
  })

})