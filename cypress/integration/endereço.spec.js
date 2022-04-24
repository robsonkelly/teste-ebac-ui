///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/enedereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereço - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit ('minha-conta')
        cy.fixture('perfil').then (dados =>{
            cy.login(dados.usuario, dados.senha)        
        })
        
    });
    
    it ('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.EditarEnderecoFaturamento ('ROBIM' , 'BRAGA' , 'EBAC', 'BRASIL', 'AVENIDA BRASIL', '2000' , 'SÃO PAULO', 'SÃO PAULO', '76485000', '6233816271', 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain' ,'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso, usando massa de dados', () => {
        EnderecoPage.EditarEnderecoFaturamento ( 
            dadosEndereco[1]. nome,
            dadosEndereco[1]. sobrenome,
            dadosEndereco[1]. empresa,
            dadosEndereco[1]. pais,
            dadosEndereco[1]. endereco,
            dadosEndereco[1]. numero,
            dadosEndereco[1]. cidade,
            dadosEndereco[1]. estado,
            dadosEndereco[1]. cep,
            dadosEndereco[1]. telefone,
            dadosEndereco[1]. email

            )
        cy.get('.woocommerce-message').should('contain' ,'Endereço alterado com sucesso.')
    });


});