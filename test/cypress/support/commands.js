// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("signup", (email, password) => { 
  // cy.server()
  // // cy.route('GET', '/users/logn', {name: 'something', id: 1, isComplete: false})
  // cy.route({
  //   url: '/api/todos',
  //   method: 'POST',
  //   status: 500,
  //   response: {}
  // }) 
  cy.get('.btn-primary')
  cy.get('.btn-primary').click()
  cy.get('#name').type('Raghunath')
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('#password2').type(password)
  cy.get('.btn').click()

  // cy.visit('https://xe.com')

 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
