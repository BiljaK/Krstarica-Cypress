/// <reference types="cypress" />

class MyAccountPage {

    Style() {

        const style = cy.get(':nth-child(1) > :nth-child(1) > dd select')
        if (style == 'Svetli stil') {
            style.select('Sivi stil')
        } else {
            style.select('Svetli stil')
        }
    }

    Language() {

        const language = cy.get(':nth-child(1) > :nth-child(2) > dd select')
        language.select('English (US)')
    }

    Checkbox() {

        const checkbox = cy.get('.iconic-label')
        checkbox.click({ multiple: true })
    }

    SaveBtn() {

        const save = cy.get('.button--primary')
        save.click()
    }

    Alert() {

        const alert = cy.get(':nth-child(2) > [href="/account/alerts"]')
        alert.click()
    }

    Reactions() {

        const reactions = cy.get('[href="/account/reactions"]')
        reactions.click()
    }

    Bookmarks() {

        const bookmark = cy.get('[href="/account/bookmarks"]')
        bookmark.click()
    }

    AcountDetails() {

        const accountDetails = cy.get('[href="/account/account-details"]')
        accountDetails.click()
    }

    EmailOption() {

        const emailOpt = cy.get(':nth-child(3) > dd > .inputChoices')
        emailOpt.click({ multiple: true })
    }

    Location(value) {

        const field = cy.get(':nth-child(10) > dd')
        field.clear()
        field.type(value)
        return this
    }

    Gender() {

        const gender = cy.get('.listColumns > :nth-child(3)')
        gender.click()
    }

    Following() {

        const following = cy.get('[href="/account/following"]')
        following.click()
    }

    Ignoring() {

        const ignoring = cy.get('[href="/account/ignored"]')
        ignoring.click()
    }

    LanguageSr() {

        const languageSr = cy.get(':nth-child(1) > :nth-child(2) > dd select')
        languageSr.select('Srpski')
    }
}

export default MyAccountPage