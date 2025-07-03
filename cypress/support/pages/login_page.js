/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        loginPage: '.fa-user',
        btnLogin: '#btnLogin',
        newRegisterBtn: '#createAccount',
        rememverMeCheckbox: '#materialUnchecked'
    },
    messages: {
        errorMessage: '.invalid_input',
        loginTitle: '#swal2-title',
        loginSubtitle: '#swal2-html-container',
        newRegisterTitle: '.account_form > h3'
    },
    fields: {
        email: '#user',
        password: '#password'
    }
}

export default {

    loginPageVisit() {
        cy.get(elements.buttons.loginPage).click()
            .url().should('include', '/login')
        cy.get(elements.buttons.btnLogin).should('have.text', 'login')
    },

    btnLoginClick() {
        cy.get(elements.buttons.btnLogin)
            .should('be.visible')
            .click();
    },
    errorMessage(message) {
        cy.get(elements.messages.errorMessage)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)
            })
    },
    fillEmail(user_email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(user_email)
    },

    fillPassword(user_password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(user_password)
    },
    successTitleMessage(message) {
        cy.get(elements.messages.loginTitle)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)
            })
    },
    successSubtitleMessage(message) {
        cy.get(elements.messages.loginSubtitle)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)
            })
    },
    newRegisterBtnClick() {
        cy.get(elements.buttons.newRegisterBtn)
            .should('be.visible')
            .click();
    },
    newRegisterPageLink() {
        cy.url().should('include', '/register')
    },
    newRegisterPageTitle(message) {
        cy.get(elements.messages.newRegisterTitle)
            .should('have.text', message)
    },
    checkRememberMeCheckbox() {
        cy.get(elements.buttons.rememverMeCheckbox)
            .check();
    },
    uncheckRememberMeCheckbox() {
        cy.get(elements.buttons.rememverMeCheckbox)
            .uncheck();
    }
}

