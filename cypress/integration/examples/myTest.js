describe('myFirst Cypress', () => {
  
  it('tests my login func app', () => {
    cy.visit('http://localhost:5001/users/register')
    cy.get('#name').type('Raghunat')
    cy.get('#email').type('Raghunath.V@yahoo.com')
    cy.get('#password').type('qwertyu')
    cy.get('#password2').type('qwertyu')
    cy.get('.btn').click()
  })

  it('tests the login func', () => {
    cy.visit('http://localhost:5001/users/login')
    cy.get('#email').type('Raghunath.V@yahoo.com')
    cy.get('#password').type('qwertyu')
    cy.get('.btn').click()
  })

})