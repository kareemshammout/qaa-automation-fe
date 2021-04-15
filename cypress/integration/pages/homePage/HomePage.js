

class HomePage {

    selectEnglishLanguage(){
        cy.visit('/')
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
        cy.get('[data-testid="Header__CurrencySelector"]').contains('SAR')
    }

    tabsVerifications(){
        cy.get('#uncontrolled-tab-example-tab-hotels').contains('Hotels')
        cy.get('#uncontrolled-tab-example-tab-flights').contains('Flights')
    }

    serviceVerifications(){
        cy.get('[href="https://www.almosafer.com/en/page/car-rental?no-cache=1&&ncr=1"]').contains('Car rental')
        cy.get('[href="/en/packages"]').contains('Domestic packages')
        cy.get('h4').contains('Cruise packages')
    }

    selectFlightTab(){
        cy.get('#uncontrolled-tab-example-tab-flights').click()

    }

}

export default HomePage
