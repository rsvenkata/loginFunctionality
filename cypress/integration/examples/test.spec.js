describe('This is my first Cypress test', () => {
    
    it('first test', () => {
        cy.visit('http://localhost:5001/users/register')
        cy.get('#name').type('Raghunath')
        cy.get('#email').type('Venkata.R@yahoo.com')
        cy.get('#password').type('Qwertyi')
        cy.get('#password2').type('Qwertyi')
        cy.get('.btn').click()
    })

    it('second test', () => {
        cy.visit('http://localhost:5001/users/login')
    })

    it('third test', () => {
        cy.visit('http://localhost:5001')
        cy.get('.btn-primary')
    })
})