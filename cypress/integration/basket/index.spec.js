/// <reference types="cypress" />

describe("Testing basket screen", () => {
    it("should set the auth token on the page", () => {
        cy.setCookie(
            "user",
            "%7B%22id%22%3A1%2C%22email%22%3A%22nathanpimlott%40hotmail.co.uk%22%2C%22password%22%3A%22%242b%2412%24CYjE7aioUw%2FsoGDTR4vwb.iVsHWSdpIjA%2FpqDVNDUqgqD1Bttasm6%22%2C%22forename%22%3A%22Nathan%22%2C%22surname%22%3A%22Pimlott%22%2C%22createdAt%22%3A%222021-04-22T19%3A45%3A39.000Z%22%2C%22updatedAt%22%3A%222021-04-23T13%3A02%3A33.000Z%22%7D"
        );
        cy.setCookie(
            "basket_items",
            "%5B%7B%22id%22%3A1%2C%22name%22%3A%22Mens%20home%20shirt%22%2C%22description%22%3A%22Mens%20home%20shirt%202021%2F22%22%2C%22img%22%3A%22https%3A%2F%2Fstore.liverpoolfc.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fad88a4d5f872b1db6c1439f07276a36d%2Fd%2Fb%2Fdb2560r_1.jpg%22%2C%22gender%22%3A%22mens%22%2C%22color%22%3A%22red%22%2C%22price%22%3A64.99%2C%22createdAt%22%3A%222021-04-24T18%3A22%3A29.000Z%22%2C%22updatedAt%22%3A%222021-06-17T19%3A44%3A44.000Z%22%2C%22quantity%22%3A1%7D%5D"
        );
        cy.visit("/basket");
    });
    describe("Testing basket index", () => {
        it("should render the basket title", () => {
            cy.get("#basket-title").should("be.visible");
        });
        it("should render the basket title", () => {
            cy.get("#basket-title").should("be.visible");
        });
        it("should render the product image", () => {
            cy.get("#basket-product-image").should("be.visible");
        });
        it("should render the product name", () => {
            cy.get("#basket-product-name").should("be.visible");
        });
        it("should render the product description", () => {
            cy.get("#basket-product-description").should("be.visible");
        });
        it("should render the product price", () => {
            cy.get("#basket-product-price").should("be.visible");
        });
        it("should render the product quantity label", () => {
            cy.get("#basket-product-quantity-label").should("be.visible");
        });
        it("should render the product quantity", () => {
            cy.get("#basket-product-quantity")
                .click()
                .get("#basket-product-quantity-5")
                .click();
        });
        it("should render the basket total title", () => {
            cy.get("#basket-total-title").should("be.visible");
        });
        it("should render the basket subtotal label", () => {
            cy.get("#basket-subtotal-label").should("be.visible");
        });
        it("should render the basket subtotal", () => {
            cy.get("#basket-subtotal").should("be.visible");
        });
        it("should render the basket shipping label", () => {
            cy.get("#basket-shipping-label").should("be.visible");
        });
        it("should render the basket shipping", () => {
            cy.get("#basket-shipping").should("be.visible");
        });
        it("should render the basket total label", () => {
            cy.get("#basket-total-label").should("be.visible");
        });
        it("should render the basket total", () => {
            cy.get("#basket-total").should("be.visible");
        });
        it("should render the checkout button", () => {
            cy.get("#basket-checkout-button").click();
        });
        it("should render the basket payments label", () => {
            cy.get("#basket-payments-label").should("be.visible");
        });
        it("should remove the product from the basket", () => {
            cy.get("#basket-remove-product").click();
        });
        it("should render the empty basket title", () => {
            cy.get("#basket-empty-title").should("be.visible");
        });
    });
});
