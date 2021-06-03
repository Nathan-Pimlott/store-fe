/// <reference types="cypress" />

describe("Testing authentication", () => {
    it("should go to the web app", () => {
        cy.visit("http://localhost:8080");
    });
    it("should clear the cookies on the page", () => {
        cy.clearCookies();
    });
    it("should have an email field", () => {
        cy.get("#email")
            .type("invalid@email.com")
            .should("have.value", "invalid@email.com");
    });
    it("should have a password field", () => {
        cy.get("#password")
            .type("Password123")
            .should("have.value", "Password123");
    });
    it("should have a login button", () => {
        cy.get("#auth-login-button").click();
    });
    it("should show an error message with a bad email and password", () => {
        cy.get("#auth-login-error").should("be.visible");
    });
});
