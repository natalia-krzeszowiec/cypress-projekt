// W kazdym teście mamy jedną metodę (funkcję), która słuzy do otwierania strony głównej. Zamiast pisać ją zawsze ręcznie, robimy klasę w js, która będzie jej odpowiadała. (class Nazwa) i potem ją wyeksportujemy (export default new Nazwa) do uzytku. 
// Aby móc korzystać z tych klas i metod musimy jeszcze zaimportować te klasy do plików z poszczególnymi testami. import Base from "../PageObjectModel/base"; - na górze kazdego testu
// Asercji nigdy nie umieszczamy w klasach

class Base {
    OpenHomePage() {
        cy.visit("/")        
    }
}
export default new Base();  

