/// <reference types="cypress" />

class KrstaricaPage {

    ForumTab() {

        const forumTab = cy.get('#main-navigation > #menu-item-121526 > a')
        forumTab.click()
    }

    Forum() {
        const forum = cy.get('#top-navigation > #menu-item-523745 > a')
        forum.click()
    }
}
export default KrstaricaPage