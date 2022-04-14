/// <reference types="cypress" />

describe('funcionalidade pagina de produto', () => {

   beforeEach (() =>{
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

   });
    it ('Deve selecionar um produto da lista', () => {
      cy.get ('[class="product-block grid"] ')
      //.first()
      //.last()
      //.eq(3)
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()

    });
    it.only('Deve adicionar um produto no carrinho', () => {
        var quantidade = 3
        cy.get ('[class="product-block grid"] ')
        .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should ('contain',  quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

                
    });



});
