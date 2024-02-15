/// <reference types="cypress"/>

describe("Click on site element", () => {
    it("Click on Contact Us tab", () => {
        cy.visit("/");
        cy.get("div#contact-link a").click();

    })
})