beforeEach(() => {
  cy.baseurl()
})

describe('visit dashboard', () => {
    it('Create new price', () => {
    // Broader intercept patterns
    cy.intercept('GET', '**/pricesmanagement/api/v1/bands*').as('getBands')
    cy.intercept('GET', '**/pricesmanagement/api/v1/groups*').as('getGroups')

    cy.contains('Price Management', { timeout: 10000 }).click()
    cy.contains('Prices').should('be.visible').click()
    cy.wait(1000)

    cy.contains('button', 'NEW PRICE')
      .should('be.visible')
      .click()

    cy.wait('@getBands', { timeout: 15000 })
    cy.wait('@getGroups', { timeout: 15000 })


    cy.get('#generalInfo_type', {timeout: 10000}).click()   
     cy.get('.ant-select-item-option-content')
      .contains('Depot')
      .click()
    cy.wait(1000)
    cy.get('#generalInfo_name', {timeout: 10000}).type(`Test Price ${Math.floor(Math.random() * 1000)}`)
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

    cy.get('#productPrice_product').click()
    cy.get('.ant-select-item-option-content')
      .contains('LPG')
      .click()
    cy.get('#productPrice_pricingOption')
    cy.get('.ant-select-item-option-content')
      .contains('Discount')
      .click()
    cy.get('#productPrice_amount').type('50')
    cy.get('#productPrice_startDate').click()
    cy.get('.ant-picker-cell-in-view')
      .contains('Today')
      .click()

  
  })
})
