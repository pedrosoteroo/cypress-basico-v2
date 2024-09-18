Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    const longText2 = Cypress._.repeat('Lorem Ipsum...', 50)        
    cy.get('#firstName').type('Pedro Paulo')
    cy.get('#lastName').type('Sotero Bhering')
    cy.get('#email').type('teste@teste.com.br')
    cy.get('#open-text-area').type(longText2, { delay : 0})
    cy.contains('button', 'Enviar').click()
})