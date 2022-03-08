describe('Form functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'orders.json'
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should let you write in your name on form', () => {
    cy.get('input')
      .type('Oscar')
  });

  it('Should let you select multiple buttons', () => {
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
  });

  it('Should display the orders you selected', () => {
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
    cy.get('p')
      .should('contain', 'beans')
      .should('contain', 'lettuce')
      .should('contain', 'guacamole')
  });

  it('Should not let you submit a form if name is typed and a order item is not selected', () => {
    cy.get('input')
      .type('Oscar')
      cy.get(':nth-child(15)').click()
  });

  it('Should not let you submit a form if a order item is selected and a name is not filled in the input', () => {
    cy.get('[name="beans"]').click()
    cy.get('[name="lettuce"]').click()
    cy.get('[name="guacamole"]').click()
    cy.get(':nth-child(15)').click()
  });
});