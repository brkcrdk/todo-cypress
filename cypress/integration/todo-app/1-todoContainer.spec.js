describe('Todo uygulaması başarılı bir şekilde', () => {
  it('Başarılı bir şekilde açılıyor ve boş liste ile geliyor.', () => {
    cy.visit('/');
    cy.get('[data-cy=todo-header]').contains('Yapılacak Listesi');
    cy.get('[data-cy=empty-message]').should('exist');
    cy.get('[data-cy=todo-container]').should('not.exist');
  });
});
