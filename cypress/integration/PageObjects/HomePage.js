/// <reference types="cypress" />

class HomePage {

    visit() {
        cy.visit("https://forum.krstarica.com/")
    }

    signinTab() {
        const signinTab = cy.get('.p-navgroup-link.p-navgroup-link--textual.p-navgroup-link--logIn')
        signinTab.click();
    }

    accountTab() {

        const account = cy.get('.p-navgroup-link--user')
        account.click();
    }

    logout() {

        const logout = cy.get('.tabPanes > li > a')
        logout.click()
    }

    genSettings() {

        const settings = cy.get(':nth-child(4) > .menu-linkRow')
        settings.click()
    }

    WhatsNew() {

        const whatsNew = cy.get('.p-nav-list > :nth-child(2) > .p-navEl > .p-navEl-link')
        whatsNew.click()
    }

    Members() {

        const members = cy.get('.p-nav-list > :nth-child(3) > .p-navEl > .p-navEl-link')
        members.click()
    }

    Forum() {

        const forum = cy.get('.p-nav-list > :nth-child(1) > .p-navEl > .p-navEl-link')
        forum.click()
    }

    Blog() {

        const blog = cy.get('.p-nav-list > :nth-child(4) > .p-navEl > .p-navEl-link')
        blog.click()
    }

    Krstarica() {

        const krstarica = cy.get('.p-navEl-linkHolder > .p-navEl-link')
        krstarica.click()
    }

    Cancel() {

        const cancel = cy.get('#onesignal-slidedown-cancel-button')
        cancel.click()
    }

    Homepage() {

        const homPage = cy.get('[href="https://www.krstarica.com/"]')
        homPage.click()
    }

    Policy() {

        const policy = cy.get(':nth-child(7) > .p-navEl > .p-navEl-link')
        policy.click()
    }

    Conversations() {

        const conversations = cy.get('.p-navgroup-link--conversations')
        conversations.click()
    }

    Alerts() {

        const alerts = cy.get('.p-navgroup-link--alerts')
        alerts.click()
    }

    StyleChooser() {

        const styleC = cy.get('a[data-original-title="Izbor stila"]')
        styleC.click()
    }

    ChooseStyle() {

        const chooseS = cy.get('.listPlain > :nth-child(2) > .menu-linkRow')
        chooseS.click()
    }

    LanguageChoose() {

        const languageC = cy.get('a[data-original-title="Izbor jezika"]')
        languageC.click()
    }

    ChooseLanguage() {

        const chooseL = cy.get(':nth-child(2) > .menu-linkRow')
        chooseL.click()
    }

    Contact() {

        const contact = cy.get('.p-footer-row-opposite > .p-footer-linkList > :nth-child(1) > a')
        contact.click()
    }

    CancelMessage() {

        const cancel = cy.get('.overlay-titleCloser')
        cancel.click()
    }

    Regulations() {

        const regulations = cy.get('.p-footer-row-opposite > .p-footer-linkList > :nth-child(2) > a')
        regulations.click()
    }

    Politics() {

        const politics = cy.get('.p-footer-linkList > :nth-child(3) > a')
        politics.click()
    }

    Help() {

        const help = cy.get('.p-footer-linkList > :nth-child(4) > a')
        help.click()
    }

    HomepageFooter() {

        const HomePageF = cy.get(':nth-child(5) > a')
        HomePageF.click()
    }
}

export default HomePage