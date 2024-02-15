/// <reference types="cypress"/>
import { login, passwd} from '../fixtures/loginData.json';

describe("Custom Commends", () => {
    it("Login to automationpractice.pl", () => {
        cy.login(login, passwd);
    })
});
