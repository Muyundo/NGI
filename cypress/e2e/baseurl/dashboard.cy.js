/// <reference types="cypress" />
beforeEach(()=>{
  cy.baseurl()
})
describe('visit dashboard', () => {
  const randomNumber = Math.floor(Math.random() * 1000)

     it("Create New Packages", () => {
    cy.contains('Package Management', { timeout: 10000 })
      .should('be.visible')
      .click()
    cy.contains('All Packages', { timeout: 10000 })
      .should('be.visible')
      .click()
    cy.contains('New Package', { timeout: 10000 })
      .should('be.visible')
      .click()
    cy.get('#newPackage_type', {timeout: 10000}).click()
    cy.wait(500)
    cy.get('.ant-select-dropdown').should('be.visible')
    cy.wait(1000)
    cy.get('.ant-select-dropdown .ant-select-item')
      .then($options => {
      const count = $options.length
      const randomIndex = Math.floor(Math.random() * count)
      cy.wrap($options[randomIndex])
        .click()
        cy.wait(1000)
    cy.get('#newPackage_code').type(randomNumber)
    cy.get('#newPackage_name').type(`Test Package ${randomNumber}`)
    cy.get('#newPackage_balance').type('1000')
    cy.get('#newPackage_pipeAmount').type('10')
    cy.get('#newPackage_gasFirstPaymentAmount').type('250')
    cy.get('#newPackage_stoveRepairCost').type('200')
    cy.get('#newPackage_warrantyDuration').type('12')
    cy.get('#newPackage_stoveChangeEligibilityDuration').type('24')
    cy.get('#newPackage_stoveChangeEligibleNumber').type('2')

  })


       
  })
})