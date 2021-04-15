
class CartPage {


    contactInfo(){
        Cypress.on('uncaught:exception', () => {
            return false
        })
        cy.get('[name="contact.firstName"]',{timeout:60000}).should('be.visible')
        cy.get('[name="contact.firstName"]').type('kareem',{force: true})
        cy.get('[name="contact.lastName"]').type('auto',{force: true})
        cy.get('[name="contact.email"]').type('kareemshammout@outlook.com',{force: true})
        cy.get('[name="contact.phone"]').type('962796268089',{force: true})
        cy.get('[data-testid="FlightPAX__ContinueToPaymentButton"]').click()
    }

    userVerifyWarningMessages(){
        cy.get('[data-testid="FlightPAX__Adult1__FirstNameErrorLabel"]').contains('Please enter the first name')
        cy.get('[data-testid="FlightPAX__Adult1__LastNameErrorLabel"]').contains('Please enter the last name')
        cy.get('[data-testid="FlightPAX__Adult1__DOBErrorLabel"]').contains('Please enter the date of birth')
        cy.get('[data-testid="FlightPAX__Adult1__NationalityErrorLabel"]').contains('Please select a nationality')
    }

}



export default CartPage