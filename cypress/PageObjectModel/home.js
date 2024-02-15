// Klasa odpowiadająca za akcje dziejące się na stronie głównej
// dodajemy getter - metodę get, która najpierw nam otworzy samą zakładkę, a dopiero potem do niej przejdzie (z Taba Women są opcje przejścia do podkategorii, mozemy klicknać, najechać kursorem - trzeba to rozróznić)

class Home {
    get WomanTab() {
        return cy.get("a.sf-with-ul[title=Women]")
    }

    goToWomenTab() {
        this.WomanTab.click();
    }

    hoverOnWomanTab() {
       this.WomanTab.hover(); 
    }
}
export default new Home();  