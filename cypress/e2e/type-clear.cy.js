/// <reference types="cypress"/>
import Base from "../PageObjectModel/base";
import Search from "../PageObjectModel/searchBox";
import { searchPhrase, notFoundProduct} from '../fixtures/search.Data.json';
import resultPage from "../PageObjectModel/resultPage";

describe("Typing text into search box", () => {
    it("Type text", () => {
        //cy.visit("/");
        Base.OpenHomePage();

        // cy.get("input#search_query_top").click().type("Example text");
        Search.typeSearchBoxPhrase(searchPhrase);

        Search.SearchBox.should("have.value", searchPhrase)
        cy.wait(3000);

        //cy.get("input#search_query_top").clear();
        Search.clearSearchBox();
        cy.wait(3000);

        //Search.SearchBox().type("Example text {enter}");
        Search.typeSearchBoxPhrase(`$(searchValue) {enter}`); 
        resultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct);
        //cy.get("p.alert").should("be.visible").and("include.text", "No results");

        Search.SearchBox.should("have.class", "search_query");
        Search.SearchBox.should("have.css", "margin-right", "1px")
        })
})