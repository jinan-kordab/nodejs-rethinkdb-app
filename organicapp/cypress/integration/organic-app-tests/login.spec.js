/// <reference types="cypress" />

context("Log in page", () => {
  before(() => {
    cy.login();
  });

  it("checking if we have logged in", () => {
    cy.get("body").then((body) => {
      if (body.find('[data-test-id="main-page-data-header"]').length > 0) {
        cy.url().should("be.equal", "http://localhost:3000/home");
      } else {
        cy.AddCustomLoginUser();
      }
    });
  });
});
