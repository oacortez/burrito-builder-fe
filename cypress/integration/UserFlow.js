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
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
  });

  it('Should let the user submit their order', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id: 3,
        name: 'Oscar',
        ingredients: ['beans', 'lettuce', 'guacamole']
      }
    })
    cy.get('input')
      .type('Oscar')
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
    cy.get(':nth-child(15)').click()
  });

  it('Should be able to display the new card once created', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 201,
      body: {
        id: 3,
        name: 'Oscar',
        ingredients: ['beans', 'lettuce', 'guacamole']
      }
    })
    cy.get('input')
      .type('Oscar')
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
    cy.get(':nth-child(15)').click()
    cy.get('section > :nth-child(3)')
      .should('contain', 'Oscar')
      .should('contain', 'beans')
      .should('contain', 'lettuce')
      .should('contain', 'guacamole')
  })
});