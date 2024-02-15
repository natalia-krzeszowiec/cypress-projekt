/// <reference types="cypress"/>


describe("Select", () => {
    it("Select ", () => {
        cy.visit("/");
        cy.get("a.sf-with-ul[title=Women]").click()
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Selecting filter In stock", () => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value",'quantity:desc');
    })
    it("Selecting filter Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("name:asc");
        cy.get("#selectProductSort").should("have.value",'name:asc');
    })
})
