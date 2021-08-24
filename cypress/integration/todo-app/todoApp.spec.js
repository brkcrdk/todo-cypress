describe('Todo uygulması', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Başarılı bir şekilde açılıyor ve boş liste ile geliyor.', () => {
    cy.get('[data-cy=todo-header]').contains('Yapılacak Listesi');
    cy.get('[data-cy=empty-message]').should('be.visible');
    cy.get('[data-cy=todo-container]').should('not.exist');
  });
});
