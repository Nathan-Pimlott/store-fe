/// <reference types="cypress" />

describe("Testing login screen", () => {
    it("should go to the web app", () => {
        cy.visit("http://localhost:8080");
    });
    it("should clear the cookies on the page", () => {
        cy.clearCookies();
    });
    describe("Testing all components are rendered", () => {
        it("should have a email field", () => {
            cy.get("#login-email").should("be.visible");
        });
        it("should have a password field", () => {
            cy.get("#login-password").should("be.visible");
        });
        it("should have a login button", () => {
            cy.get("#login-button").should("be.visible");
        });
        it("should have a register link", () => {
            cy.get("#login-register-link").should("be.visible");
        });
    });
    describe("Testing validation for blank fields", () => {
        it("should click the login button with blank fields to render the errors", () => {
            cy.get("#login-button").click();
        });
        it("should error if email is not entered", () => {
            cy.get("#login-email-error")
                .invoke("text")
                .should("eq", "Email is a required field");
        });
        it("should error if password is not entered", () => {
            cy.get("#login-password-error")
                .invoke("text")
                .should("eq", "Password is a required field");
        });
    });
    describe("Testing validation for invalid fields", () => {
        it("should render error if invalid email is entered", () => {
            cy.get("#login-email").clear().type("123");
            cy.get("#login-email-error").should(
                "have.text",
                "Invalid email address"
            );
        });
        it("should render error if invalid password is entered (no upper case)", () => {
            cy.get("#login-password").clear().type("password123");
            cy.get("#login-password-error").should(
                "have.text",
                "Password must contain an upper case letter and a number"
            );
        });
        it("should render error if invalid password is entered (no number)", () => {
            cy.get("#login-password").clear().type("Password");
            cy.get("#login-password-error").should(
                "have.text",
                "Password must contain an upper case letter and a number"
            );
        });
    });
    describe("Testing validation for valid fields", () => {
        it("should not render an error if a valid email is entered", () => {
            cy.get("#login-email").clear().type("test@email.com");
            cy.get("#login-email-error").should("not.be.visible");
        });
        it("should not render an error if a  valid password is entered", () => {
            cy.get("#login-password").clear().type("Password123");
            cy.get("#login-password-error").should("not.be.visible");
        });
    });
});
