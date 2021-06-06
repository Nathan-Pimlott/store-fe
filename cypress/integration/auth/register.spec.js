/// <reference types="cypress" />

describe("Testing login screen", () => {
    it("should go to the web app", () => {
        cy.visit("register");
    });
    it("should clear the cookies on the page", () => {
        cy.clearCookies();
    });
    describe("Testing all components are rendered", () => {
        it("should have a email field", () => {
            cy.get("#register-email").should("be.visible");
        });
        it("should have a password field", () => {
            cy.get("#register-password").should("be.visible");
        });
        it("should have a forename field", () => {
            cy.get("#register-forename").should("be.visible");
        });
        it("should have a surname field", () => {
            cy.get("#register-surname").should("be.visible");
        });
        it("should have a register button", () => {
            cy.get("#register-button").should("be.visible");
        });
        it("should have a login link", () => {
            cy.get("#register-login-link").should("be.visible");
        });
    });
    describe("Testing validation for blank fields", () => {
        it("should click the login button with blank fields to render the errors", () => {
            cy.get("#register-button").click();
        });
        it("should error if email is not entered", () => {
            cy.get("#register-email-error")
                .invoke("text")
                .should("eq", "Email is a required field");
        });
        it("should error if password is not entered", () => {
            cy.get("#register-password-error")
                .invoke("text")
                .should("eq", "Password is a required field");
        });
        it("should error if forename is not entered", () => {
            cy.get("#register-forename-error")
                .invoke("text")
                .should("eq", "Forename is a required field");
        });
        it("should error if surname is not entered", () => {
            cy.get("#register-surname-error")
                .invoke("text")
                .should("eq", "Surname is a required field");
        });
    });
    describe("Testing validation for invalid fields", () => {
        it("should render error if invalid email is entered", () => {
            cy.get("#register-email").clear().type("123");
            cy.get("#register-email-error").should(
                "have.text",
                "Invalid email address"
            );
        });
        it("should render error if invalid password is entered (no upper case)", () => {
            cy.get("#register-password").clear().type("password123");
            cy.get("#register-password-error").should(
                "have.text",
                "Password must contain an upper case letter and a number"
            );
        });
        it("should render error if invalid password is entered (no number)", () => {
            cy.get("#register-password").clear().type("Password");
            cy.get("#register-password-error").should(
                "have.text",
                "Password must contain an upper case letter and a number"
            );
        });
        it("should render error if invalid confirm password is entered (doesn't match password)", () => {
            cy.get("#register-password").clear().type("Password");
            cy.get("#register-confirm-password").clear().type("NotPassword");
            cy.get("#register-confirm-password-error").should(
                "have.text",
                "Passwords do not match"
            );
        });
    });
    describe("Testing validation for valid fields", () => {
        it("should not render an error if a valid email is entered", () => {
            cy.get("#register-email").clear().type("test@email.com");
            cy.get("#register-email-error").should("not.be.visible");
        });
        it("should not render an error if a  valid password is entered", () => {
            cy.get("#register-password").clear().type("Password123");
            cy.get("#register-password-error").should("not.be.visible");
        });
        it("should not render an error if a  valid confirm password is entered", () => {
            cy.get("#register-confirm-password").clear().type("Password123");
            cy.get("#register-confirm-password-error").should("not.be.visible");
        });
        it("should not render an error if a  valid forename is entered", () => {
            cy.get("#register-forename").clear().type("Test");
            cy.get("#register-forename-error").should("not.be.visible");
        });
        it("should not render an error if a  valid surname is entered", () => {
            cy.get("#register-surname").clear().type("Test");
            cy.get("#register-surname-error").should("not.be.visible");
        });
    });
});
