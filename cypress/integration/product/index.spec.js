/// <reference types="cypress" />

describe("Testing product overview screen", () => {
    it("should set the auth token on the page", () => {
        cy.setCookie(
            "user",
            "%7B%22id%22%3A1%2C%22email%22%3A%22nathanpimlott%40hotmail.co.uk%22%2C%22password%22%3A%22%242b%2412%24CYjE7aioUw%2FsoGDTR4vwb.iVsHWSdpIjA%2FpqDVNDUqgqD1Bttasm6%22%2C%22forename%22%3A%22Nathan%22%2C%22surname%22%3A%22Pimlott%22%2C%22createdAt%22%3A%222021-04-22T19%3A45%3A39.000Z%22%2C%22updatedAt%22%3A%222021-04-23T13%3A02%3A33.000Z%22%7D"
        );
        cy.visit("/product/1");
    });
    describe("Testing product overview index", () => {
        it("should render the product's title", () => {
            cy.get("#product-title").should("be.visible");
        });
        it("should render the product image", () => {
            cy.get("#product-image").should("be.visible");
        });
        it("should render the product description", () => {
            cy.get("#product-description").should("be.visible");
        });
        it("should render the product price", () => {
            cy.get("#product-price").should("be.visible");
        });
        it("should be able to select a size", () => {
            cy.get("#product-size").click().get("#product-size-m").click();
        });
        it("should render the product colour", () => {
            cy.get("#product-color").should("be.visible");
        });
        it("should be able to add product to basket", () => {
            cy.get("#product-add-to-basket").click();
        });
    });
});
