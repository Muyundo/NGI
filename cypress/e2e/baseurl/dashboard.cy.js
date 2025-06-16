/// <reference types="cypress" />
beforeEach(()=>{
  cy.baseurl()
})
describe('visit dashboard', () => {
   it("Create New Packages", () => {
     cy.contains('Package Management', { timeout: 10000 })
      .should('be.visible')
      .click()
       
  })
})