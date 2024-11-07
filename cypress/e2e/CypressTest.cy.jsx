describe("Cypress Test", () => {
    it('visits the app and asserts title', () => {
        cy.visit('http://localhost:5173');
        cy.get('h1').should('contain', 'Watch Rick and Morty for ')
    });
    
    it('clicks free button and assets title', () => {
        cy.visit('http://localhost:5173');
        cy.get('.free-button').click()
        cy.url().should('include', 'http://localhost:5173/about')
        cy.get("h2").should('contain', 'Seasons and Episodes')
    });

    it('clicks get episodes and asserts nav tab', () => {
        cy.visit('http://localhost:5173/about')
        cy.get('.btn-primary').click().get('.nav-tabs')
    })
});