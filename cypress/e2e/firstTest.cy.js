describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173');
    cy.get('[cy-test="cy-header-title"]').should("exist")
    .should('have.text', 'Todo Project for MERN Stack');

    cy.get('[cy-test="cy-title"]').type('Vaali').should('have.value', 'Vaali');
    cy.get('[cy-test="cy-desc"]').type('Ajith').should('have.value', 'Ajith');
    cy.get('[cy-test="cy-submit"]').click();
  })
})