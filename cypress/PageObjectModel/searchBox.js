
class Search {
    get SearchBox(){
        return cy.get("input#search_query_top");
    }

    clickSearchBox() {
        this.SearchBox.click();
    }

    typeSearchBoxPhrase(searchValue) {
        this.SearchBox.type(searchValue);
    }

    clearSearchBox(){
        this.SearchBox.clear();
    }
}

export default new Search();
