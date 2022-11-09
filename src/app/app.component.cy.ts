import { AppComponent } from './app.component'

describe('AppComponent test', () => {
  it('mounts', () => {
    cy.mount(AppComponent)
  })
  it('has correct header', () => {
    cy.mount(AppComponent)
    cy.get('h1').should('have.text', 'Welcome Angular DEV')
  })
  it('header ar correct color', () => {
    cy.mount(AppComponent)
    cy.get('h1').should('have.css', 'color', 'rgb(0, 0, 255)')
  })
})