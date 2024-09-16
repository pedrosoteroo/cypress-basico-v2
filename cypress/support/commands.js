Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    const longText = 'Lorem ipsum dolor sit amet. Et sequi omnis et minima laborum ut sunt natus ut repellat voluptas eum nulla modi. Et rerum obcaecati nam adipisci laborum et pariatur doloribus et internos asperiores sit eligendi dicta ab officia voluptatem. Est numquam ipsam et quaerat quam et eius vitae sit praesentium velit aut porro voluptatem aut veniam omnis quo rerum veritatis. Hic ipsum dolorum vel modi necessitatibus aut labore recusandae est explicabo blanditiis?'
        
    cy.get('#firstName').type('Pedro Paulo')
    cy.get('#lastName').type('Sotero Bhering')
    cy.get('#email').type('teste@teste.com.br')
    cy.get('#open-text-area').type(longText, { delay : 0})
    cy.contains('button', 'Enviar').click()
})