describe('Eğer input boşsa todo kayıt edilememeli', () => {
  beforeEach(() => {
    const todos = ['Deneme', 'İkinci deneme yazısı', 'Bir başka deneme daha'];
    cy.visit('/');
    todos.forEach((t) => {
      cy.get('[data-cy=todo-input]').type(t);
      cy.get('[data-cy=todo-add-btn]').click();
    });
  });

  it('Varsayılan seçili opsiyon hepsi olmalı', () => {
    cy.get('[data-cy=controller-all]').should('be.selected');
  });
});
