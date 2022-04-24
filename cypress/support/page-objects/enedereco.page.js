class EnderecoPage {

    EditarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type('fabvio')
        cy.get('#billing_last_name').clear().type('braga')
        cy.get('#billing_company').clear().type('ebac')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Avenida das neves')
        cy.get('#billing_address_2').clear().type('1000')
        cy.get('#billing_city').clear().type('Estrela do Norte')
        cy.get('#select2-billing_state-container').click().type('Goiás{enter}')
        cy.get('#billing_postcode').clear().type('76485000')
        cy.get('#billing_phone').clear().type('6233816271')
        cy.get('#billing_email').clear().type('teste@teste.com')
        cy.get(':nth-child(2) > .button').click()




    }
    EditarEnderecoEntrega (){
        // elementos mais açoes
    }    
    

}
export default new EnderecoPage()
