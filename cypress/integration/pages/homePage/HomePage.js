

class HomePage {

    selectEnglishLanguage(){
        cy.visit('/ar/?ncr=1')
        Cypress.on('uncaught:exception', () => {
            return false
        })
        cy.get('[data-testid="Header__LanguageSwitch"]').then((lang =>{
            cy.log("current language is: " + lang.text().toString())
            if (lang.text().toString() == "English"){
                cy.get('[data-testid="Header__LanguageSwitch"]').click()
            }
        }))
    }

    headerVerifications(){
        cy.get('[data-testid="Header__SignInButton"]').contains('Sign in')
        cy.get('[href="https://wa.me/966554400000"]').contains('+966554400000')
        cy.get('[data-testid="Header__RetrieveMyBooking"]').contains('Retrieve my booking')
        cy.get('[data-testid="Header__LanguageSwitch"]').contains('العربية')
        cy.get('[data-testid="Header__CurrencySelector"]').contains('AED')
    }

    tabsVerifications(){
        cy.get('#uncontrolled-tab-example-tab-hotels').contains('Hotels')
        cy.get('#uncontrolled-tab-example-tab-flights').contains('Flights')
    }

    serviceVerifications(){
        cy.get('h4').contains('Car rental')
        cy.get('h4').contains('Transfers')
        cy.get('h4').contains('Activities')
        cy.get('h4').contains('More services')
    }

    selectFlightTab(){
        cy.get('#uncontrolled-tab-example-tab-flights').click()

    }

}

export default HomePage
