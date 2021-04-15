
const originValues = [];
class Flights {


    flightWidgetVerifications() {
        cy.get('[data-testid="FlightSearchBox__FromAirportInput"]').should('be.visible')
        cy.get('[data-testid="FlightSearchBox__ToAirportInput"]').should('be.visible')
    }


    randomOriginValues(origin) {
        cy.get('[data-testid="FlightSearchBox__FromAirportInput"]').type(origin)
        cy.get('[data-testid="AutoCompleteCategoryLabel"]', {timeout: 10000}).should("not.exist")
        cy.get('[data-testid="AutoCompleteResultsList"]>li').each(($el) => {
            cy.log($el.text())
            originValues.push($el.text())
        }).then((originValues) => {
            cy.log("Number of options:" + originValues.length)
            if (originValues.length < 5) {
                cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click()
            } else {
                cy.get('[data-testid="FlightSearchBox__AirportOption5"]').click()
            }
        })
    }


    randomDestinationValues(destination) {
        cy.get('[data-testid="FlightSearchBox__ToAirportInput"]').type(destination)
        cy.get('[data-testid="AutoCompleteCategoryLabel"]', {timeout: 10000}).should("not.exist")
        cy.get('[data-testid="AutoCompleteResultsList"]>li').each(($el) => {
            cy.log($el.text())
            originValues.push($el.text())
        }).then((originValues) => {
            cy.log("Number of options:" + originValues.length)
            if (originValues.length < 5) {
                cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click()
            } else {
                cy.get('[data-testid="FlightSearchBox__AirportOption5"]').click()
            }
        })
    }

    noResults(){
        cy.get('[data-testid="FlightSearchResult__ModifySearchButton"]').contains('Modify search')
    }

    specificOriginValues(origin) {
        cy.get('[data-testid="FlightSearchBox__FromAirportInput"]').type(origin)
        cy.get('[data-testid="AutoCompleteCategoryLabel"]', {timeout: 10000}).should("not.exist")
        cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click()
    }


    specificDestinationValues(destination) {
        cy.get('[data-testid="FlightSearchBox__ToAirportInput"]').type(destination)
        cy.get('[data-testid="AutoCompleteCategoryLabel"]', {timeout: 10000}).should("not.exist")
        cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click()
    }



    selectDates(){
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').click()
        cy.get('[name="year"]').first().select('2021')
        cy.get('[name="month"]').first().select('7')
        cy.get('[data-testid="FlightSearchCalendar__2021-08-17"]').click()
        cy.get('[data-testid="FlightSearchCalendar__2021-09-13"]').click()
    }

    userSearchForFlight(){
        cy.get('[data-testid="FlightSearchBox__SearchButton"]').first().click()
        cy.get('[data-testid="FlightSearchResults__ProgressBar__loading"]', {timeout: 60000}).should("not.exist")
    }

    userSelectFlight(){
        cy.get('[data-testid="Group0__SelectFlightButton"]').click()
        cy.get('[data-testid="FlightPAX__ContinueToPaymentButton"]',{timeout:6000}).should('exist')
    }

    userSelectLowestStep(){
        cy.get('[for="stop-1"]').click()
        cy.get('[data-testid="Reset_StopFilter"]').contains('Reset')
        cy.get('.btn-glow--active').contains('1 Stop or less')
    }
}



export default Flights