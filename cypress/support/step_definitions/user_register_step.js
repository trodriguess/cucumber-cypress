import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import home_page from '../pages/home_page';
import user_register_page from '../pages/user_register_page';
import { random } from '../pages/user_register_page';
import invalid_data from "../../fixtures/invalid_data.json"

Given('I am on the Register screen', () => {
    home_page.visitHomePage()
    home_page.elementFromHomePage()
    user_register_page.registerPageVisit()
})

When ('I click on the Register button', () => {
    user_register_page.registerButtonClick()
})

Then("I should see the Register error message {string}", (message) => {
    user_register_page.errorMessage(message)
})

When('I fill the name', () => {
    user_register_page.fillName(random.fields.name)
})  

When('I fill the email with an invalid format', () => {
    user_register_page.fillEmail(invalid_data.wrong_email)
})

When('I fill the email with a valid format', () => {
    user_register_page.fillEmail(random.fields.email)
})

When('I fill the password with less than 6 characters', () => {
    user_register_page.fillPassword(invalid_data.wrong_password)
})

When('I fill my credentials correctly', () => {
    user_register_page.fillName(random.fields.name)
    user_register_page.fillEmail(random.fields.email)
    user_register_page.fillPassword(random.fields.password)
})

Then("I should see the successful title {string}", (message) => {
    user_register_page.successTitle(message)
})

Then("I should see the successful subtitle {string}", (message) => {
    user_register_page.successSubtitle(message)
})