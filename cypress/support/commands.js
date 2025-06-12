Cypress.Commands.add( 'baseurl' , () => {
    cy.visit("https://nextgen.ngi-test.iner.gy/");
    cy.wait(9000)
    cy.contains("with").click();
    //
    cy.origin(
      "https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com",
      () => {
      cy.get(".panel-right-border > :nth-child(1) > :nth-child(1) > :nth-child(1) > form > div > .btn").click();
      }
    )
  
})

