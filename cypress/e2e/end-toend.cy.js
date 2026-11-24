import { faker } from '@faker-js/faker';

describe('End to End— Cadastro e Login', () => {

         
  it.only('cadastra um novo usuário e fazer login com as credenciais criadas', () => {
   
    // Gera dados dinâmicos com Faker
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    let telefone = faker.phone.number()
    let senha = faker.internet.password({ length: 8, special: false });

    // Passo 1: Acessa a página de cadastro
    // Passo 2: Preenche o formulário
    // Passo 3: Envia e valida o sucesso do cadastro
    cy.cadastrarUsuario(nome, email, telefone, senha);

    // Valida que o cadastro foi bem-sucedido
    // (ex: redirecionamento ao dashboard ou mensagem de sucesso)
    cy.url().should('include', 'dashboard');

    // Limpa a sessão (o cadastro já faz auto-login)
    // Sem isso, o login passaria mesmo quebrado
    cy.clearLocalStorage();

    // Passo 4: Acessa a página de login
    // Passo 5: Preenche e envia o formulário
    // Passo 6: Valida o sucesso do login
    cy.login(email, senha);

    // Valida que o dashboard exibe o nome do usuário
    cy.get('#user-name').should('contain', nome);
  });
});