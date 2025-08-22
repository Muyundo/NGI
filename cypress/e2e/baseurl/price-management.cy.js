beforeEach(() => {
  cy.baseurl()
})

describe('visit dashboard', () => {
    it('Verify that overlappping price cration validates correctly', () => {
    // Intercept patterns
    cy.intercept('GET', '**/pricesmanagement/api/v1/bands*').as('getBands')
    cy.intercept('GET', '**/pricesmanagement/api/v1/groups*').as('getGroups')

    cy.contains('Price Management', { timeout: 10000 }).click()
    cy.contains('Prices', {timeout: 1000}).should('be.visible').click()
    cy.wait(10000)

    cy.contains('button', 'NEW PRICE')
      .should('be.visible')
      .click()
      cy.wait(1000)
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
      .contains('Residential')
      .click()
    cy.contains('NEXT STEP').click()

    cy.get('#productPrice_product').click()
    cy.get('.ant-select-item-option-content')
      .contains('LPG')
      .click()
    cy.get('#productPrice_pricingOption').click()
    cy.get('.ant-select-item-option-content')
      .contains('Actual')
      .click()
    cy.get('#productPrice_amount').type('50')
    
    

    const today = new Date();

    // Activation date between 1–3 days from today
    const minDay = 1
    const maxDay = 3
    const randomOffset = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;
    const activationDate = new Date(today);
    activationDate.setDate(today.getDate() + randomOffset);
    const activationDay = activationDate.getDate();

    cy.get('#productPrice_activationDate').click();
    cy.get('.ant-picker-dropdown')
      .not('.ant-picker-dropdown-hidden')
      .last()
      .should('be.visible')
      .within(() => {
        cy.get('.ant-picker-cell-in-view')
          .contains(activationDay)
          .click()
      })

    // Deactivation date 5–8 days from today
    const deactivationMinDay = 5
    const deactivationMaxDay = 8
    const deactivationOffset = Math.floor(Math.random() * (deactivationMaxDay - deactivationMinDay + 1)) + deactivationMinDay;
    const deactivationDate = new Date(today);
    deactivationDate.setDate(today.getDate() + deactivationOffset);
    const deactivationDay = deactivationDate.getDate();

    cy.get('#productPrice_deactivationDate').click();
    cy.get('.ant-picker-dropdown')
      .not('.ant-picker-dropdown-hidden')
      .last()
      .should('be.visible')
      .within(() => {
        cy.get('.ant-picker-cell-in-view')
          .contains(deactivationDay)
          .click();
      })
        cy.contains('CREATE PRICE').click()
        cy.contains('There is an overlap of the active date range with the existing prices', { timeout: 10000 } )
        .should('be.visible')
      
      })
    })
