import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import home_page from '../pages/home_page';
import login_page from '../pages/login_page';
import data from '../../fixtures/invalid_data.json'

import { random } from "../pages/user_register_page"

Given('I am on the Login screen', () => {
    home_page.visitHomePage();
    home_page.elementFromHomePage();
    login_page.loginPageVisit();
});

When('I click on the Login button', () => {
    login_page.btnLoginClick();
});

Then('I should see the Login error message {string}', (message) => {
    login_page.errorMessage(message);
});

When('I fill the email wrong email', () => {
    login_page.fillEmail(data.wrong_email);
})

When('I fill the login email', () => {
    login_page.fillEmail(random.fields.email);
})

When('I fill the login wrong password', () => {
    login_page.fillPassword(random.fields.wrongPassword);
})

When('I fill the login right password', () => {
    login_page.fillPassword(random.fields.password);
})

Then('I should see the success Login title {string}', (message) => {
    login_page.successTitleMessage(message);
})

Then('I should see the success Login subtitle {string}', (message) => {
    login_page.successSubtitleMessage(`${message} ${random.fields.email}`);
})

When('I click on the Ainda não tem conta button', () => {
    login_page.newRegisterBtnClick();
})

Then('I should see the Register page', () => {
    login_page.newRegisterPageLink()
})

Then('I should see the Register title {string}', (message) => {
    login_page.newRegisterPageTitle(message)
})

When('I fill my Login credentials correctly', () => {
    login_page.fillEmail(random.fields.email);
    login_page.fillPassword(random.fields.password);
})

Then('I check the Remember me checkbox', () => {
    login_page.checkRememberMeCheckbox()
})

Then('I uncheck the Remember me checkbox', () => {
    login_page.uncheckRememberMeCheckbox()
})