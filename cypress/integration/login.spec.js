///<reference types="cypress" />

context ('Funcionalidade Login', () =>{
    it ('Deve fazer Login com sucesso' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('a > .hidden-xs') .should ('contain' , 'Welcome') 

    })
    it ('Deve exibir uma mensagem de erro ao inserir usuario ' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error > li') .should ('contain', 'desconhecido')
            })
     it ('Deve exibir uma mensagem de erro ao inserir senha errada invalida ' , () => {
                cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
                cy.get('#username').type ('aluno_ebac@teste.com')
                cy.get('#password').type ('teste@teste')
                cy.get('.woocommerce-form > .button').click ()
                cy.get('.woocommerce-error > li') .should ('contain', 'Erro')
     })

})