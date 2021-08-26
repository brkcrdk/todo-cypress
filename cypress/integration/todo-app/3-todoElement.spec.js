const testTodos = ['İlk task', 'İkinci task', 'Üçüncü task', 'Dördüncü task'];

describe('Todo Elementi', () => {
  beforeEach(() => {
    cy.visit('/');
    testTodos.forEach((t) =>
      cy.get('[data-cy=todo-input]').type(`${t}{enter}`)
    );
  });

  it('Element başarılı bir şekilde silinmeli ve silinen elementin listede olmaması gerekli', () => {
    cy.get('[data-cy=todo-delete-btn]').eq(2).click({ force: true });
    cy.get('[data-cy=todo-element]').each((item) => {
      cy.wrap(item).should('not.contain.text', testTodos[2]);
    });
  });
});
