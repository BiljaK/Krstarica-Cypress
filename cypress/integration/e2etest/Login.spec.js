/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import SigninPage from "../PageObjects/SigninPage";

describe('Test Login', function () {

    it('Valid credentials Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()

        cy.get('.p-navgroup-link--user > .p-navgroup-linkText').should('have.text', 'BiljaK')
    })

    it('Invalid Email Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('kkk.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()

        cy.get('.blockMessage').should('include.text', 'Zahtevani korisnik "kkk.bilja@gmail.com" nije pronađen.')
    })

    it('Invalid Password Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('B1234')
        sp.SignIn()

        cy.get('.blockMessage').should('include.text', 'Pogrešna lozinka. Molimo pokušajte ponovo.')
    })

    it('Without Credetials Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail(' ')
        sp.fillPassword(' ')
        sp.SignIn()

        cy.get('.blockMessage').should('include.text', 'Zahtevani korisnik nije pronađen.')
    })

    it('Log Out Test', function () {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
        hp.accountTab()
        hp.logout()

        cy.get('.p-navgroup-link--logIn > .p-navgroup-linkText').should('have.text', 'Prijava')
    })
})