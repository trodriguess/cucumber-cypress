/// <reference types="cypress" />

import { faker, Faker } from "@faker-js/faker"

// Elementos
const elements = {
    buttons: {
        registerPage: '.fa-lock',
        registerBtn: '#btnRegister'
    },
    fields: {
        user: '#user',
        email: '#email',
        password: '#passwordSS'
    },
    messages: {
        ivalidfield: '#errorMessageFirstName',
        titleRegiisterPage: '.account_form > h3',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    },
    logos: {
    }
}

const random = {
    fields: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 10 }),
        wrongPassword: faker.internet.password({ length: 5 })
    }
}
export { random }

export default {

    registerPageVisit() {
        cy.get(elements.buttons.registerPage).click()
            .url().should('include', '/register')
        cy.get(elements.messages.titleRegiisterPage).should('have.text', 'Cadastro de usuário')
    },
    registerButtonClick() {
        cy.get(elements.buttons.registerBtn)
            .should('be.visible')
            .click()
    },
    errorMessage(message) {
        cy.get(elements.messages.ivalidfield)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).eq(message)
            })
    },
    fillName(user_name) {
        cy.get(elements.fields.user)
            .type(user_name)
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

    successTitle(message) {
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .and('have.text', message)
    },
    successSubtitle(message) {
        cy.get(elements.messages.successSubtitle)
            .should('be.visible')
            .and('have.text', `${message} ${random.fields.name}`)
    }
}
