///<reference types="cypress" /> 
import catalago from '../fixtures/livros.json'

describe('Funcionalidade: Busca no catalago', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });

    it('Deve fazer busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984');
        cy.get('.card-title').should('contain', '1984');
    });

    it('Deve fazer busca de um livro de massa de dados', () => {
        cy.get('#search-input').type(catalago[2].livro);
        cy.get('.card-title').should('contain', catalago[2].livro);
    });

});