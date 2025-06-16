/// <reference types="cypress" />

// Elementos
const elements = {
    logos: {
        bannerHomePage: '#electronics_banner'
    }
};

export default {

    visitHomePage() {
        cy.visit('/')
    },

    elementFromHomePage() {
        cy.get(elements.logos.bannerHomePage)
            .then((element) => {
                // Verifica se o banner está visível
                expect(element).to.be.visible;
            })
    }
}

