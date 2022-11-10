import { inRange, nth } from 'cypress/types/lodash';

describe('Navigate to home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads', () => {
    cy.title().should('eq', 'AngularApp');
  });

  it('has correct header', () => {
    cy.contains('h1', 'Welcome Angular DEV').should('be.visible');
  });

  it('has correct input value', () => {
    cy.get('input.newTitle').should('have.value', 'Angular DEV');
  });

  it('updates header', () => {
    const newTitle = 'Vue DEVS';
    cy.get('input.newTitle').clear().type(newTitle);
    cy.get('h1').should('have.text', `Welcome ${newTitle}`);
  });

  it('escapes user input for security', () => {
    const attackScript = "<script>alert('attack')</script>";
    cy.get('input.newTitle').clear().type(attackScript);
    cy.get('h1').should('include.text', attackScript);
  });
});
