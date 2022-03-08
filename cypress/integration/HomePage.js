describe('Home page view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      fixture: 'orders.json'
    })
    cy.visit('http://localhost:3000/')
  });
  
  it('Should be able to display app title', () => {
    cy.get('h1')
      .contains('Burrito Builder')
  });

  it('Should be able to display form', () => {
    cy.get('input')
      .invoke('attr', 'placeholder')
      .should('contain', 'Name')
    cy.get('form')
      .contains('beans')
    cy.get('p')
      .contains('Order: Nothing selected')
    cy.get(':nth-child(15)')
      .contains('Submit Order')
  });

  it('Should be able to display a card', () => {
    cy.get('section > :nth-child(1)')
      .should('contain', 'Ben')
      .should('contain', 'beans')
      .should('contain', 'lettuce')
      .should('contain', 'carnitas')
      .should('contain', 'queso fresco')
  });
  
})