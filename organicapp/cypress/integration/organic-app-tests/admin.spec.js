/// <reference types="cypress" />
import Chance from "Chance";
const chance = new Chance();

//Testing Changefeeds in RethinkDB

context("Admin page", () => {
  beforeEach(() => {
    cy.generalLogin();
  });

  it("navigate to admin page and add new sweet", () => {
    //Navigate
    cy.visit("http://localhost:3000/admin");
    cy.contains("Welcome!");
    //Generate random sweet ID
    const randNum = chance.integer({ min: 2022, max: 9007199254740991 });
    // Add new sweet manually using POST
    cy.request({
      method: "POST",
      url: "/food/products/sweet/",
      form: true,
      body: {
        color: "CYPRESS-Color",
        property: "CYPRESS-Property",
        id: "" + randNum + "",
        name: "CYPRESS-Name",
      },
    }).as("sweet");
    cy.get("@sweet").should((response) => {
      cy.wait(500);
    });

    // // //Check if our newly added sweet is found
    cy.contains("" + randNum + "");
  });
});
