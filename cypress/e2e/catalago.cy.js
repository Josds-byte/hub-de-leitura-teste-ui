///<reference types="cypress" /> 

describe('Funcionalidade: Catálogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });

        it('Deve clicar no botão Adicionar à cesta', () => {
            cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click();
            cy.get('#cart-count').should('contain', 1);
        });

        it('Deve clicar no primeiro botão Adicionar à cesta', () => {
            cy.get('.btn-primary').click({multiple: true});
        });

        it('Deve clicar no primeiro botão Adicionar à cesta', () => {
            cy.get('.btn-primary').first().click();
        
        });    
        
         it.only('Deve clicar no ultimo botão Adicionar à cesta', () => {
            cy.get('.btn-primary').last().click();
        
        });
    });