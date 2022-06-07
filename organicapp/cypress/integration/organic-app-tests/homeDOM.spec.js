/// <reference types="cypress" />
context("Home page", () => {
  beforeEach(() => {
    cy.generalLogin();
  });

  it("custom navbar Home Href", () => {
    cy.customNavbarHomeHref();
  });

  it("custom navbar Admin Href", () => {
    cy.customNavbarAdminHref();
  });
  
  it("custom navbar Logout Href", () => {
    cy.customNavbarLogoutHref();
  });

it("main page data header text", () => {
  cy.get('[data-test-id="main-page-data-header"]')
  .should("exist")
  .should("be.visible").contains('Tables', { matchCase: true })
});
  
it("All tables exist", () => {
  cy.get('[data-test-id="tableAPPUSERS"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableAPPUSERS"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableFRUIT"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableLEGUME"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableORGANICPRODUCTS"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableSTAPLEFOOD"]')
    .should("exist")
    .should("be.visible");
  
    cy.get('[data-test-id="tableSWEET"]')
    .should("exist")
    .should("be.visible");
  
});
  
  
  it("All buttons exist", () => {
  //get all buttons for each table
    cy.get('[data-test-id="getallAPPUSERS"]')
      .should("exist")
      .should("be.visible");
    
      cy.get('[data-test-id="getallFRUIT"]')
      .should("exist")
      .should("be.visible");
    
      cy.get('[data-test-id="getallLEGUME"]')
      .should("exist")
      .should("be.visible");
    
      cy.get('[data-test-id="getallORGANICPRODUCTS"]')
      .should("exist")
      .should("be.visible");
    
      cy.get('[data-test-id="getallSTAPLEFOOD"]')
      .should("exist")
      .should("be.visible");
    
      cy.get('[data-test-id="getallSWEET"]')
      .should("exist")
      .should("be.visible");
    
    //All add buttons(href) exist and visible

    cy.get('[data-test-id="addFRUIT"]')
    .should("exist")
      .should("be.visible");
      
    cy.get('[data-test-id="addLEGUME"]')
      .should("exist")
      .should("be.visible");
    
    cy.get('[data-test-id="addORGANICPRODUCTS"]')
      .should("exist")
      .should("be.visible");
    
    cy.get('[data-test-id="addSTAPLEFOOD"]')
      .should("exist")
      .should("be.visible");
    
    cy.get('[data-test-id="addSWEET"]')
      .should("exist")
      .should("be.visible");

}); 
  
});
