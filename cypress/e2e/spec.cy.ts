describe('Navigate to home', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('h1', 'Angular DEV')
   })
})