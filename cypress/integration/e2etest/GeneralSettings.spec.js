/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import SigninPage from "../PageObjects/SigninPage";
import MyAccountPage from "../PageObjects/MyAccountPage";

describe('Test General Settings', function () {

    beforeEach(() => {

        const hp = new HomePage()
        const sp = new SigninPage()

        hp.visit()
        hp.signinTab()
        sp.fillEmail('k.bilja@gmail.com')
        sp.fillPassword('BK123456')
        sp.SignIn()
    })

    it('Right side of My Account page Test', function () {

        const hp = new HomePage()
        const map = new MyAccountPage()

        hp.accountTab()
        hp.genSettings()
        map.Style()
        map.Language()
        map.Checkbox()
        map.SaveBtn()

        cy.get('.p-title-value').should('have.text', 'Preferences')
    })

    it('Left side of My Account page Test', function () {

        const hp = new HomePage()
        const map = new MyAccountPage()

        hp.accountTab()
        hp.genSettings()
        map.Alert()
        cy.url().should('eq', 'https://forum.krstarica.com/account/alerts')
        map.Reactions()
        cy.url().should('eq', 'https://forum.krstarica.com/account/reactions')
        map.Bookmarks()
        cy.url().should('eq', 'https://forum.krstarica.com/account/bookmarks')
        map.AcountDetails()
        map.EmailOption()
        map.Location('Novi Sad')
        map.Gender()
        map.SaveBtn()
        map.Following()
        cy.url().should('eq', 'https://forum.krstarica.com/account/following')
        map.Ignoring()
        cy.url().should('eq', 'https://forum.krstarica.com/account/ignored')

        hp.accountTab()
        hp.genSettings()
        map.Style()
        map.LanguageSr()
        map.SaveBtn()

    })
})