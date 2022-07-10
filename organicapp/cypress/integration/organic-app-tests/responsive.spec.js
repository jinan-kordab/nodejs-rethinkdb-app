/// <reference types="cypress" />

import Chance from "Chance";
const chance = new Chance();

context("Admin page", () => {
  beforeEach(() => {
    cy.viewport("ipad-2");
  });

  it("landing page header text", () => {
    cy.visit("http://localhost:3000/");
    cy.generalNavbar();
    cy.get('[data-test-id="landing-header"]')
      .should("exist")
      .should("be.visible");
  });

  it("landing page body text", () => {
    cy.visit("http://localhost:3000/");
    cy.generalNavbar();
    cy.get('[data-test-id="landing-description-text"]');
  });

  it("login button existence+visibility", () => {
    cy.visit("http://localhost:3000/");
    cy.generalNavbar();
    cy.get('[data-test-id="landing-login-btn"]')
      .should("exist")
      .should("be.visible");
  });

  it("signup button existence + visibility", () => {
    cy.visit("http://localhost:3000/");
    cy.generalNavbar();
    cy.get('[data-test-id="landing-signup-btn"]')
      .should("exist")
      .should("be.visible");
  });

  it("have we logged in ?", () => {
    cy.login();
    cy.get("body").then((body) => {
      if (body.find('[data-test-id="main-page-data-header"]').length > 0) {
        cy.url().should("be.equal", "http://localhost:3000/home");
      } else {
        cy.AddCustomLoginUser();
      }
    });
  });

  it("signup page title visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="singup-title"]')
      .should("exist")
      .should("be.visible");
  });

  it("signup page body text visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="sinup-text"]').should("exist").should("be.visible");
  });

  it("username input visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-username"]')
      .should("exist")
      .should("be.visible");
  });

  it("username label visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-username-label"]')
      .should("exist")
      .should("be.visible");
  });

  it("password input visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-password"]')
      .should("exist")
      .should("be.visible");
  });

  it("password label visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-password-label"]')
      .should("exist")
      .should("be.visible");
  });

  it("signup button visibility ", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-submit-button"]')
      .should("exist")
      .should("be.visible");
  });

  it("terms of use visibility", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get('[data-test-id="signup-terms-of-use"]')
      .should("exist")
      .should("be.visible");
  });

  //home dom
  it("authenticated user navbar Home hyperlink", () => {
    cy.generalLogin();
    cy.customNavbarHomeHref();
  });

  it("authenticated user navbar Admin hyperlink", () => {
    cy.generalLogin();
    cy.customNavbarAdminHrefResponsive();
  });

  it("authenticated user navbar Logout hyperlink", () => {
    cy.generalLogin();
    cy.customNavbarLogoutHrefResponsive();
  });

  it("home page data header text", () => {
    cy.generalLogin();
    cy.get('[data-test-id="main-page-data-header"]')
      .should("exist")
      .should("be.visible")
      .contains("Tables", { matchCase: true });
  });

  it("all tables exist on home page", () => {
    cy.generalLogin();
    cy.get('[data-test-id="tableAPPUSERS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="tableAPPUSERS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="tableFRUIT"]').should("exist").should("be.visible");

    cy.get('[data-test-id="tableLEGUME"]').should("exist").should("be.visible");

    cy.get('[data-test-id="tableORGANICPRODUCTS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="tableSTAPLEFOOD"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="tableSWEET"]').should("exist").should("be.visible");
  });

  it("all buttons on home page (DOM Check)", () => {
    cy.generalLogin();
    //get all buttons for each table
    cy.get('[data-test-id="getallAPPUSERS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="getallFRUIT"]').should("exist").should("be.visible");

    cy.get('[data-test-id="getallLEGUME"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="getallORGANICPRODUCTS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="getallSTAPLEFOOD"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="getallSWEET"]').should("exist").should("be.visible");

    //All add buttons(href) exist and visible

    cy.get('[data-test-id="addFRUIT"]').should("exist").should("be.visible");

    cy.get('[data-test-id="addLEGUME"]').should("exist").should("be.visible");

    cy.get('[data-test-id="addORGANICPRODUCTS"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="addSTAPLEFOOD"]')
      .should("exist")
      .should("be.visible");

    cy.get('[data-test-id="addSWEET"]').should("exist").should("be.visible");
  });

  //Home Process

  it("get all appusers (SELECT RethinkDB) and verify", () => {
    cy.generalLogin();
    //click on get all app users
    cy.getallappusers();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all fruit table (SELECT RethinkDB) and verify", () => {
    cy.generalLogin();
    //click on get all fruits
    cy.getallfruit();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all legume (SELECT RethinkDB ) and verify", () => {
    cy.generalLogin();
    //click on get all legumes
    cy.getalllegume();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all organic products (SELECT RethinkDB ) and verify", () => {
    cy.generalLogin();
    //click on get all organicproducts
    cy.getallorganicproducts();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all staplefood (SELECT RethinkDB) and verify", () => {
    cy.generalLogin();
    //click on get all staplefood in RethinkDb
    cy.getallstaplefood();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("get all sweet (SELECT RethinkDB) and verify", () => {
    cy.generalLogin();
    //click on get all sweet in RethinkDb
    cy.getallsweet();
    //verify that we have appusers data returned form RethinkDb
    cy.checkforreturneddata();
  });

  it("e2e add new fruit and verify if added", () => {
    cy.generalLogin();
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
    cy.generalLogin();
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
    cy.generalLogin();
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

  //Admin

  it("test RethinkDb changefeeds", () => {
    cy.generalLogin();
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
