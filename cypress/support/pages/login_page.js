/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        loginPage: '.fa-user',
    },
    logos: {
    }
}

export default {

    loginPageVisit() {
        cy.get(elements.buttons.loginPage).click()
            .url().should('include', '/login')
        cy.get('h3').should('have.text', 'Login')
    }
}
