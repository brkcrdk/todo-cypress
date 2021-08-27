// Bu komut listenin beklenen statüye göre durumunu kontrol eder.
// Eğer beklenen statü boş ise container görünmemeli, mesaj görünmeli
// Eğer beklenen statü dolu ise container görünmeli ve mesaj görünmemeli

/**
 * @param {string} checkStatus
 */
Cypress.Commands.add('listCheck', (checkStatus) => {
  if (checkStatus === 'empty') {
    cy.get('[data-cy=todo-container]').should('not.exist');
    cy.get('[data-cy=empty-message]').should('exist');
  } else {
    cy.get('[data-cy=todo-container]').should('exist');
    cy.get('[data-cy=empty-message]').should('not.exist');
  }
});
