
///<reference types="cypress" /> 
import { faker } from '@faker-js/faker';


describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html');
    });

    it('Deve realizar o cadastro com sucesso', () => {

        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Jovani Souza');
        cy.get('#email').type(email);
        cy.get('#phone').type('6798979495');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        //resultado esperado
        cy.url().should('include', 'dashboard');
    });

    it('Deve realizar o cadastro com sucesso, usando Faker', () => {

        let email = faker.internet.email();
        let name = faker.person.fullName();
        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#phone').type('6798979495');
        cy.get('#password').type('Teste@123');
        cy.get('#confirm-password').type('Teste@123');
        cy.get('#terms-agreement').check();
        cy.get('#register-btn').click();
        //resultado esperado
        cy.url().should('include', 'dashboard');
    });
});

