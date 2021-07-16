describe('My first test', () => {
    it('Nothing', () => {
        cy.visit('http://localhost:3000/');
        cy.location('pathname').should('eq', '/login')

        // Correct login and go to rooms
        cy.get('#emailInput').type('admin@admin.com')
        cy.get('#passwordInput').type('admin')
        cy.get('#login-button').click();

        cy.location('pathname').should('eq', '/')
        
        cy.get('#rooms').click();
        cy.location('pathname').should('eq', '/rooms')

        // Incorrect login
        // cy.get('#usernameInput').type('Juan')
        // cy.get('#passwordInput').type('asd')
        // cy.get('#login-button').click();

        // cy.location('pathname').should('eq', '/login')

    })
})