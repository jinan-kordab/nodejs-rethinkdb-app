Cypress.Commands.add("login", () => {
  cy.visit("http://localhost:3000/login");

  //Type into user name field
  cy.get('[data-test-id="login-username-textbox"]')
    .should("exist")
    .should("be.visible");
  cy.get('[data-test-id="login-password-textbox"]')
    .should("exist")
    .should("be.visible");

  //Type into the username field
  cy.get('[data-test-id="login-username-textbox"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  //Type into the password field
  cy.get('[data-test-id="login-password-textbox"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  //Click on Submit butotnlogin-page-submit-button
  cy.get('[data-test-id="login-page-submit-button"]').click();
});
//Hyperlink for landing page before login
Cypress.Commands.add("generalNavbar", () => {
  cy.get('[data-test-id="login-navbar-home-href"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/")
    .click();
  cy.url().should("eq", "http://localhost:3000/");
});
//Hyperlink for landing page after authentication
Cypress.Commands.add("customNavbarHomeHref", () => {
  cy.get('[data-test-id="login-navbar-home-href"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/")
    .click();
  cy.url().should("eq", "http://localhost:3000/");
});
//Admin hyperlink visibility for authenticated users
Cypress.Commands.add("customNavbarAdminHref", () => {
  cy.get('[data-test-id="login-navbar-home-admin"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/admin/")
    .click();
  cy.url().should("eq", "http://localhost:3000/admin/");
});
//ipad responsive admin hyperlink visibility + existence
Cypress.Commands.add("customNavbarAdminHrefResponsive", () => {
  cy.get(".navbar-toggler").should("exist").should("be.visible").click();

  cy.get('[data-test-id="login-navbar-home-admin"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/admin/")
    .click();

  cy.url().should("eq", "http://localhost:3000/admin/");
});

//logout hyperlink for authenticated users
Cypress.Commands.add("customNavbarLogoutHref", () => {
  cy.get('[data-test-id="login-navbar-home-logout"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/logout/")
    .click();
  cy.url().should("eq", "http://localhost:3000/login");
});
//Logout hyperlink for authenticate users
Cypress.Commands.add("customNavbarLogoutHrefResponsive", () => {
  cy.get(".navbar-toggler").should("exist").should("be.visible").click();

  cy.get('[data-test-id="login-navbar-home-logout"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/logout/")
    .click();
  cy.url().should("eq", "http://localhost:3000/login");
});
//Signing up new user
Cypress.Commands.add("AddCustomLoginUser", () => {
  cy.visit("http://localhost:3000/signup");

  cy.get('[data-test-id="signup-username"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  cy.get('[data-test-id="signup-password"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  cy.get('[data-test-id="signup-submit-button"]').click();
});
//Logging in with e2e condition test for RethinkDb (if user exists)
Cypress.Commands.add("generalLogin", () => {
  cy.visit("http://localhost:3000/login");

  //User name field is visible
  cy.get('[data-test-id="login-username-textbox"]')
    .should("exist")
    .should("be.visible");
  cy.get('[data-test-id="login-password-textbox"]')
    .should("exist")
    .should("be.visible");

  //Type into the username field
  cy.get('[data-test-id="login-username-textbox"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  //Type into the password field
  cy.get('[data-test-id="login-password-textbox"]')
    .type("kk", { delay: 250 })
    .should("have.value", "kk");

  //Click on Submit butotnlogin-page-submit-button
  cy.get('[data-test-id="login-page-submit-button"]').click();

  cy.get("body").then((body) => {
    if (body.find('[data-test-id="main-page-data-header"]').length > 0) {
      cy.url().should("be.equal", "http://localhost:3000/home");
    } else {
      cy.visit("http://localhost:3000/signup");

      cy.get('[data-test-id="signup-username"]')
        .type("kk", { delay: 250 })
        .should("have.value", "kk");

      cy.get('[data-test-id="signup-password"]')
        .type("kk", { delay: 250 })
        .should("have.value", "kk");

      cy.get('[data-test-id="signup-submit-button"]').click();
    }
  });
});
//Gets all appusers table data
Cypress.Commands.add("getallappusers", () => {
  cy.get('[data-test-id="getallAPPUSERS"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/appusers")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//Gets all fruit table data
Cypress.Commands.add("getallfruit", () => {
  cy.get('[data-test-id="getallFRUIT"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/fruit")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//Gets all Legume table data
Cypress.Commands.add("getalllegume", () => {
  cy.get('[data-test-id="getallLEGUME"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/legume")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//Gets all organicproducts table data
Cypress.Commands.add("getallorganicproducts", () => {
  cy.get('[data-test-id="getallORGANICPRODUCTS"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/organicproducts")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//Gets all staplefood table data
Cypress.Commands.add("getallstaplefood", () => {
  cy.get('[data-test-id="getallSTAPLEFOOD"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/staplefood")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//Gets all sweet table data
Cypress.Commands.add("getallsweet", () => {
  cy.get('[data-test-id="getallSWEET"]')
    .should("exist")
    .should("be.visible")
    .should("have.attr", "href", "/food/sweet")
    .click();

  cy.get('[data-test-id="Results"]').scrollIntoView({ duration: 2000 });
});
//E2E test verification helper for returned data from RethinkDb
Cypress.Commands.add("checkforreturneddata", () => {
  cy.get('[data-test-id="Results-Body"]')
    .children()
    .its("length")
    .should("be.gte", 1);
});
