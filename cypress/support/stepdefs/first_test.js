import { Given, When, Then,And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from "../../integration/pages/homePage/HomePage";
import Flights from "../../integration/pages/flights/Flights";
import CartPage from "../../integration/pages/cartPage/CartPage";


const homePage = new HomePage();
const flights = new Flights();
const cartPage = new CartPage();

Given('user select english language', () => {
    homePage.selectEnglishLanguage()
});

Then('user validate home page', () => {
      homePage.headerVerifications()
      homePage.tabsVerifications()
      homePage.serviceVerifications()
});

When('user navigate to flights-home page', () => {
      homePage.selectFlightTab()
});


Then('user validate flights-home page', () => {
    flights.flightWidgetVerifications()
});
When('user select random flight search with origin {string} and {string}', (origin,destination) => {
    flights.randomOriginValues(origin)
    flights.randomDestinationValues(destination)
});
Then('no results has been returned', () => {
    flights.noResults()
});

When('user select his flight search with origin {string} and {string}', (origin,destination) => {
    flights.specificOriginValues(origin)
    flights.randomDestinationValues(destination)
});

And('user select dates', () => {
       flights.selectDates()
});


And('user search for flights', () => {
    flights.userSearchForFlight()
});

And('select first lowest point of stops', () => {
       flights.userSelectLowestStep()
});

And('user select flight', () => {
      flights.userSelectFlight()
});

When('user fill contact data info', () => {
    cartPage.contactInfo()
});


Then('warning message should display', () => {
   cartPage.userVerifyWarningMessages()
});
