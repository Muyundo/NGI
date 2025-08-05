beforeEach(() => {
  cy.baseurl()
})

describe('visit dashboard', () => {
  it('Create new price', () => {
    cy.contains('Price Management', { timeout: 10000 }).click()
    cy.contains('Prices').should('be.visible').click()
    cy.wait(1000)
    cy.contains('NEW PRICE', { timeout: 10000 }).should('be.visible').click()
    cy.get('#generalInfo_type').click()   
     cy.get('.ant-select-item-option-content')
      .contains('Depot')
      .click()
    cy.wait(1000)
    cy.get('#generalInfo_name').type(`Test Price ${Math.floor(Math.random() * 1000)}`)
    cy.get('.ant-select-selection-overflow').click()
      .type('Training Depot')
    cy.get('.ant-select-item-option-content')
      .contains('TRAINING DEPOT')
      .click()
    cy.get('#generalInfo_registrationCategory').click()
    cy.get('.ant-select-item-option-content')
      .contains('Commercial')
      .click()
    cy.contains('NEXT STEP').click()
  
  })
})
