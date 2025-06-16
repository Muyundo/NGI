Cypress.Commands.add('baseurl', () => {
  cy.visit("https://nextgen.ngi-test.iner.gy/")
  cy.contains('Sign in to continue', {timeout: 10000} )
    .should('be.visible')
  cy.contains("with").click()
   cy.origin("https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com", () => {
    cy.get(".panel-right-border form .btn").click();
  })
  
})

 Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    })