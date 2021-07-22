let name = "Pedro";
let email = "pedro@gmail.com";
let pass = "deltoro";

describe('My first test', () => {
    it('Nothing', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#register-button-nav').click();
        cy.location('pathname').should('eq', '/register')

        // Correct login and go to rooms
        cy.get('#registerName').type(name)
        cy.get('#registerEmail').type(email)
        cy.get('#registerPassword').type(pass)
        cy.get('#registerPasswordRepeat').type(pass)

        cy.get('#register-button').click();

        
        cy.location('pathname').should('eq', '/login')

        cy.get('#emailInput').type(email)
        cy.get('#passwordInput').type(pass)
        cy.get('#login-button').click();

        cy.location('pathname').should('eq', '/')

        cy.get('#rooms').click();
        cy.location('pathname').should('eq', '/rooms')

    })
})