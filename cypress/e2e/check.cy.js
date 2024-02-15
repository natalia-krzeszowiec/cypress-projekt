/// <reference types="cypress"/>
import Base from "../PageObjectModel/base";
import Home from "../PageObjectModel/home";
import Women from "../PageObjectModel/women";

describe("Selecting checkbox", () => {
    it("Select Women tab", () => {
        //cy.visit("/"); - to zostanie zastapione klasa Base - robi to samo, ale jest globalna dla wszystkich testów
        Base.OpenHomePage();
        //cy.get("a.sf-with-ul[title=Women]").click(); -  - to zostanie zastapione klasą Home - robi to samo, ale jest globalna dla wszystkich testów
        Home.goToWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
     }) //cy.wait(3000);

   it("Check checkboxes in Women tab", () => {
        // cy.get("#layered_category_4").check() - to zostanie zastapione klasa Women z getterem check - robi to samo, ale jest globalna dla wszystkich testów
        Women.checkTopsCheckbox();
        Women.TopsCheckbox.should("be.checked");
        //cy.get("#layered_category_4").should("be.checked") //not.be.checked - kiedy chcemy zeby byl niezaznaczony checkbox  --> w asercji zmieniamy lokalizator do tego checkboxa 

        // cy.get("#layered_category_8").check() - to zostanie zastapione klasa Women z getterem check - robi to samo, ale jest globalna dla wszystkich testów
        Women.checkDressessCheckbox();
        Women.DressessCheckbox.should("have.checked");
        cy.get("#layered_category_8").should("have.checked")

        // cy.get("#ul_layered_id_attribute_group_1 input").check() - - to zostanie zastapione klasa Women z getterem check - robi to samo, ale jest globalna dla wszystkich testów
        Women.checkAllSizeCheckbox();

    })
})