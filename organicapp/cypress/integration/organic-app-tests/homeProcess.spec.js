/// <reference types="cypress" />
import Chance from "Chance";
const chance = new Chance();

context("Home page", () => {
  beforeEach(() => {
    cy.generalLogin();
  });

  it("get all app users functionality", () => {
    //click on get all app users
    cy.getallappusers();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all fruit functionality", () => {
    //click on get all fruits
    cy.getallfruit();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all legume functionality", () => {
    //click on get all legumes
    cy.getalllegume();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all organic products functionality", () => {
    //click on get all organicproducts
    cy.getallorganicproducts();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all staplefood functionality", () => {
    //click on get all staplefood in RethinkDb
    cy.getallstaplefood();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all sweet ", () => {
    //click on get all sweet in RethinkDb
    cy.getallsweet();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("add new fruit and verify if it added it ", () => {
    cy.get('[data-test-id="addFRUIT"]')
      .should("exist")
      .should("be.visible")
      .should("have.attr", "href", "/food/products/fruit")
      .click();

    //verify if we landed on new page with new fruit form
    cy.url().should("eq", "http://localhost:3000/food/products/fruit");

    //New fruit page header
    cy.get('[data-test-id="add-new-fruit-header"]')
      .should("exist")
      .should("be.visible")
      .contains("Add new fruit");

    //New fruit page body text
    cy.get('[data-test-id="add-new-fruit-body-text"]')
      .should("exist")
      .should("be.visible")
      .contains("his form allows you to add new fruit to RethinkDB database");

    //New fruit page form elements

    //new-fruit-form-label-color
    cy.get('[data-test-id="new-fruit-form-label-color"]')
      .should("exist")
      .should("be.visible")
      .contains("Color:");
    //new-fruit-form-label-property
    cy.get('[data-test-id="new-fruit-form-label-property"]')
      .should("exist")
      .should("be.visible")
      .contains("Property:");
    //new-fruit-form-label-Id
    cy.get('[data-test-id="new-fruit-form-label-Id"]')
      .should("exist")
      .should("be.visible")
      .contains("Id:");
    //new-fruit-form-label-Name
    cy.get('[data-test-id="new-fruit-form-label-Name"]')
      .should("exist")
      .should("be.visible")
      .contains("Name:");

    const randInt = chance.integer({ min: 2022, max: 9007199254740991 });
    const randColor = chance.color();
    const randSyllable = chance.syllable();
    //new-fruit-form-label-color
    cy.get('[data-test-id="new-fruit-form-input-color"]')
      .should("exist")
      .should("be.visible")
      .type("" + randColor + "", { delay: 250 })
      .should("have.value", "" + randColor + "");

    //new-fruit-form-label-property
    cy.get('[data-test-id="new-fruit-form-input-property"]')
      .should("exist")
      .should("be.visible")
      .type("" + randSyllable + "", { delay: 250 })
      .should("have.value", "" + randSyllable + "");

    //new-fruit-form-label-Id
    cy.get('input[name="id"]')
      .should("exist")
      .should("be.visible")
      .type("" + randInt + "", { delay: 250 })
      .should("have.value", "" + randInt + "");

    //new-fruit-form-label-Name
    cy.get('input[name="name"]')
      .should("exist")
      .should("be.visible")
      .type("KIWAWA", { delay: 250 })
      .should("have.value", "KIWAWA");

    cy.get("#newFruitForm").submit();

    //check for newly inserted fruit
    cy.getallfruit();
    cy.contains("" + randInt + "");
  });

  it("edit existing sweet ", () => {
    cy.getallsweet();
    cy.checkforreturneddata();
    const randNum = chance.integer({ min: 2022, max: 9007199254740991 });

    cy.get('button:contains("EDIT")')
      .first()
      .should("exist")
      .should("be.visible")
      .click();
    cy.get('[data-test-id="edit-sweet-color"]')
      .clear()
      .type("EDITED" + randNum + "", { delay: 250 })
      .should("have.value", "EDITED" + randNum + "");
    cy.get('[data-test-id="edit-sweet-component"]')
      .clear()
      .type("EDITED-Component", { delay: 250 })
      .should("have.value", "EDITED-Component");
    
    cy.get('[data-test-id="edit-sweet-name"]')
      .clear()
      .type("EDITED-Name", { delay: 250 })
      .should("have.value", "EDITED-Name");
    cy.get('button:contains("Submit")').click();

    cy.getallsweet();
    cy.contains("EDITED" + randNum + "");
  });

  it("delete existing sweet ", () => {
    cy.getallsweet();
    cy.checkforreturneddata();
    const randNum = chance.integer({ min: 2024, max: 9007199254740991 });
    cy.get('button:contains("DELETE")')
      .first()
      .should("exist")
      .should("be.visible")
      .click();
    cy.contains("Deleted");
  });
});
