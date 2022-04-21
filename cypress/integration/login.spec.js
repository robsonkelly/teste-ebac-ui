///<reference types="cypress" />

const perfil = require ('../fixtures/perfil.json')

context ('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('minha-conta')
    });
    afterEach ( () => {
        cy.screenshot ()

    } );     
    
    it ('Deve fazer Login com sucesso' , () => {

        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('a > .hidden-xs') .should ('contain' , 'Welcome') 

    })

    it('Deve fazer logim com sucesso - usando banco de dados', () => {
        cy.get('#username').type (perfil.usuario)
        cy.get('#password').type (perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click ()
        cy.get('a > .hidden-xs') .should ('contain' , 'Welcome') 
        
    });
    it.only('faze login - usando fixtures', () => {
        cy.fixture ('perfil').then (dados => { 
        cy.get('#username').type (dados.usuario)
        cy.get('#password').type (dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click ()

        })
        
    });

    it ('Deve exibir uma mensagem de erro ao inserir usuario ' , () => {
  
        cy.get('#username').type ('ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error > li') .should ('contain', 'desconhecido')
            })
     it ('Deve exibir uma mensagem de erro ao inserir senha errada invalida ' , () => {
    
                cy.get('#username').type ('aluno_ebac@teste.com')
                cy.get('#password').type ('teste@teste')
                cy.get('.woocommerce-form > .button').click ()
                cy.get('.woocommerce-error > li') .should ('contain', 'Erro')
     })

})