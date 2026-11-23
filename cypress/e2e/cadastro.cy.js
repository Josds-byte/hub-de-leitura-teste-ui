
///<reference types="cypress" /> 
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro();
    });

    afterEach(() => {
        cy.screenshot();
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

    it('Deve realizar o cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let name = faker.person.fullName();
        cy.preencherCadastro(
            'Jovani Souza',
            'jovani@teste.com',
            '6798979495',
            'Teste@123',
            'Teste@123'
        );
        //resultado esperado

    });

    it('Deve realizar o cadastro com sucesso - Usando Page Object', () => {
        let email = `teste${Date.now()}@teste.com`
        let name = faker.person.fullName();

        cadastroPage.preencherCadastro(
            name,
            email,
            '6798979495',
            'Teste@123',
            'Teste@123'
        )
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {

        cadastroPage.preencherCadastro(
            '',
            'jovani@teste.com',
            '6798979495',
            'Teste@123',
            'Teste@123'
        )

        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres');
    })
});