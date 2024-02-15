//Robimy Klasę Woman, która miesci klasy dla lokalizowania poszczególnych checkboxów oraz metody-gettery dla ich zaznaczania
// Na końcu eksportujemy całość i importujemy do testu e2e z checkboxami

class Women {
   get TopsCheckbox () {
    return cy.get("#layered_category_4");
    }

    checkTopsCheckbox() {
        this.TopsCheckbox.check(); 
    }
    //-------

    get DressessCheckbox() {
        return cy.get("#layered_category_8");
    }

    checkDressessCheckbox() {
        this.DressessCheckbox.check();
    }
    //-------

    get AllSizeCheckbox () {
        return cy.get("#ul_layered_id_attribute_group_1 input");
    }

    checkAllSizeCheckbox() {
        this.AllSizeCheckbox.check();
    }
}
export default new Women();