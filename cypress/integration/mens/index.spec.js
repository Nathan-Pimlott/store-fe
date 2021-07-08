/// <reference types="cypress" />

describe("Testing mens screen", () => {
    it("should set the auth token on the page", () => {
        cy.setCookie(
            "user",
            "%7B%22id%22%3A1%2C%22email%22%3A%22nathanpimlott%40hotmail.co.uk%22%2C%22password%22%3A%22%242b%2412%24CYjE7aioUw%2FsoGDTR4vwb.iVsHWSdpIjA%2FpqDVNDUqgqD1Bttasm6%22%2C%22forename%22%3A%22Nathan%22%2C%22surname%22%3A%22Pimlott%22%2C%22createdAt%22%3A%222021-04-22T19%3A45%3A39.000Z%22%2C%22updatedAt%22%3A%222021-04-23T13%3A02%3A33.000Z%22%7D"
        );
        cy.visit("/mens");
    });
    describe("Testing mens index", () => {
        it("should render the men's title", () => {
            cy.get("#mens-title").should("be.visible");
        });
        it("should render the filter title", () => {
            cy.get("#mens-filter-title").should("be.visible");
        });
        it("should be able to select a size to filter", () => {
            cy.get("#mens-filter-size")
                .click()
                .get("#mens-filter-size-m")
                .click();
        });
        it("should be able to select a colour to filter", () => {
            cy.get("#mens-filter-color")
                .click()
                .get("#mens-filter-color-red")
                .click();
        });
    });
});
