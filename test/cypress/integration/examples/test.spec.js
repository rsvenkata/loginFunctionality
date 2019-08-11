describe("This is my first Cypress test", () => {
  before(() => {
    cy.visit("http://localhost:5001");
  });

  it.only("first test", () => {
    cy.server()
    // cy.route('GET', '/users/logn', {name: 'something', id: 1, isComplete: false})
    cy.route({
      url: '/api/tods',
      method: 'POST',
      status: 500,
      response: {}
    })

    cy.signup("asdf16@gmail", "password");
  });

  it("second test", () => {
    cy.visit("http://localhost:5001/users/login");
  });

  it("third test", () => {
    cy.visit("http://localhost:5001");
    cy.get(".btn-primary");
  });

  it("api test", () => {
    cy.request("http://localhost:5001")
      .its("body")
      .should("deep.equal", { name: "Raghu" });
  });

  it("post test", () => {
    cy.request("POST", "http://localhost:5001/users/register", {
      name: "Raghunath Venkata",
      email: "asdf9@gmail.com",
      password: "password",
      password2: "password"
    }).then(response => {
      // response.body is automatically serialized into JSON
      //   expect(response.body).to.have.property('name', 'Jane') // true
    });
  });
});
