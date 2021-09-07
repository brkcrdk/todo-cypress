describe('Todo uygulaması başarılı bir şekilde çalışıyor.', () => {
  beforeEach(() => cy.visit('/'));

  it('Başarılı bir şekilde açılıp, boş liste ile gelmeli.', () => {
    cy.get('[data-cy=todo-header]').contains('Yapılacak Listesi');
    cy.get('[data-cy=empty-message]').should('exist');
    cy.get('[data-cy=add-todo-section]').should('exist');
    cy.get('[data-cy=todo-container]').should('not.exist');
  });

  it('Eğer listede eleman varsa boş mesajı gelmemeli ve controller görüntülenmeli', () => {
    cy.get('[data-cy=empty-message]').should('exist');
    cy.get('[data-cy=todo-input]').type(`Deneme`);
    cy.get('[data-cy=todo-add-btn]').click();
    cy.get('[data-cy=empty-message]').should('not.exist');
    cy.get('[data-cy=todo-container]').should('exist');
    cy.reload();
    cy.get('[data-cy=empty-message]').should('not.exist');
    cy.get('[data-cy=todo-container]').should('exist');
    cy.get('[data-cy=todo-container]').children().should('have.length', 1);
  });
});
