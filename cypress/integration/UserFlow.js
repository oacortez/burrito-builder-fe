describe('User flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'orders.json'
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should let the user type a name and be able to click multiple items', () => {
    cy.get('input')
      .type('Oscar')
  });
});