// Musimy dodać referencje, dostęp do metod i podpowiedzi z biblioteki Cypress
// <reference types="cypress"/>
describe("First automate tast", () => {
    it("Opening website google.com", () => {
        cy.visit("https://google.com")
    })
})