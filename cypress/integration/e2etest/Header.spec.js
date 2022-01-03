/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import SigninPage from "../PageObjects/SigninPage";
import KrstaricaPage from "../PageObjects/KrstaricaPage";

describe('Test Header', function () {

    beforeEach(() => {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
    })

    it('Header of page Test', function () {

        const hp = new HomePage()
        const kp = new KrstaricaPage()

        hp.WhatsNew()
        cy.url().should('eq', 'https://forum.krstarica.com/whats-new/')
        hp.Forum()
        cy.url().should('eq', 'https://forum.krstarica.com/')
        hp.Members()
        cy.url().should('eq', 'https://forum.krstarica.com/members/')
        hp.Blog()
        cy.url().should('eq', 'https://forum.krstarica.com/forums/blogovi.397/')
        hp.Krstarica()
        hp.Homepage()
        cy.url().should('include', 'https://www.krstarica.com/')
        kp.ForumTab()
        hp.Policy()
        cy.url().should('eq', 'https://forum.krstarica.com/help/pravilnik-foruma/')
        hp.Conversations()
        cy.get('.js-convMenuBody > .menu-row').should('have.text', 'Nema novih privatnih prepiski.')
        hp.Alerts()
        cy.wait(4000)
        cy.get('.js-alertsMenuBody > .menu-row').should('have.text', 'Nema novih obaveštenja.')
    })
})