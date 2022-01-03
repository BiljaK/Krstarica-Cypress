/// <reference types="cypress" />

class SigninPage {

    fillEmail(value) {

        const field = cy.get('form.block > .block-container > .block-body > :nth-child(1) > dd')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {

        const field = cy.get('form.block > .block-container > .block-body > :nth-child(2) > dd')
        field.clear()
        field.type(value)
        return this
    }

    SignIn() {

        const button = cy.get('.button--primary')
        button.click()
    }
}

export default SigninPage