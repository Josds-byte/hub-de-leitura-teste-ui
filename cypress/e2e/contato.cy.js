describe('Contato', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it.only('Deve preencher o formulário de contato com sucesso', () => {
 
    cy.get('[name="name"]').type('Jovani');
    cy.get('[name="email"]').type('jovani@example.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('testes');
    cy.get('#btn-submit').click();
    //resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist');
  });




  it('Deve exibir mensagem de erro ao não preencher o campo nome', () => {
   
    cy.get('[name="name"]').clear();
    cy.get('[name="email"]').type('jovani@example.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('testes');
    cy.get('#btn-submit').click();
    //resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.');
  });

  it.only('Deve exibir mensagem de erro ao não preencher o campo e-mail', () => {
    
    cy.get('[name="name"]').type('Jovani');
    cy.get('[name="email"]').clear();
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('testes');
    cy.get('#btn-submit').click();
    //resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.');

  });

  it.only('Deve exibir mensagem de erro ao não preencher o campo Assunto', () => {
    
    cy.get('[name="name"]').type('Jovani');
    cy.get('[name="email"]').type('jovani@example.com');
    // cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('testes');
    cy.get('#btn-submit').click();
    //resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.');
  });

it.only('Deve exibir mensagem de erro ao não preencher o campo Mensagem', () => {
    
    cy.get('[name="name"]').type('Jovani');
    cy.get('[name="email"]').type('jovani@example.com');
   cy.get('[name="subject"]').select('Sugestões');
 // cy.get('[name="message"]').type('testes');
    cy.get('#btn-submit').click();
    //resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.');
  });
});
