/// <reference types="cypress" />

import HomePage from "../PageObjects/HomePage";
import KrstaricaPage from "../PageObjects/KrstaricaPage";

describe('Test Footer', function () {

    beforeEach(() => {

        const hp = new HomePage()

        hp.visit()
    })

    it('Header of page Test', function () {

        const hp = new HomePage()
        const kp = new KrstaricaPage()

        hp.StyleChooser()
        hp.ChooseStyle()
        cy.get('a[data-original-title="Izbor stila"]').should('contain.text', 'Tamni stil')
        hp.LanguageChoose()
        hp.ChooseLanguage()
        cy.get('a[data-original-title="Izbor jezika"]').should('contain.text', 'Srpski')
        hp.Contact()
        cy.get('.overlay-title').should('contain.text', 'Kontakt')
        hp.CancelMessage()
        hp.Regulations()
        cy.url().should('eq', 'https://www.krstarica.com/info/uslovi-koriscenja/')
        kp.Forum()
        hp.Politics()
        cy.url().should('eq', 'https://www.krstarica.com/info/politika-privatnosti/')
        kp.Forum()
        hp.Help()
        cy.url().should('eq', 'https://forum.krstarica.com/help/')
        hp.HomepageFooter()
        cy.url().should('eq', 'https://forum.krstarica.com/')
    })
})