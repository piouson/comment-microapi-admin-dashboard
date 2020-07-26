/// <reference types="cypress" />

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Queries", () => {
    it("should redirect to the login page", () => {
      cy.url().should("include", "#/login");
    });

    it("should focus on username input", () => {
      cy.get("#username").should("be.focused");
    });

    it("should require username and password", () => {
      cy.get("#username-helper-text").should("not.exist");
      cy.get("#password-helper-text").should("not.exist");
      cy.get("#username").blur();
      cy.get("button[type=submit]").click();
      cy.get("#username-helper-text").should("contain.text", "Required");
      cy.get("#password-helper-text").should("contain.text", "Required");
    });
  });

  describe("Actions", () => {
    it("should have the inputted username value", () => {
      cy.get("#username")
        .type("fake@email.com")
        .should("have.value", "fake@email.com");
    });

    it("should have the inputted password value", () => {
      cy.get("#password")
        .type("fakepassword")
        .should("have.value", "fakepassword");
    });
  });
});
