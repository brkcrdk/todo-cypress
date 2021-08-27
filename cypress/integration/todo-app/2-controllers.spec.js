const todos = ['Deneme', 'İkinci deneme yazısı', 'Bir başka deneme daha'];

describe('Eğer input boşsa todo kayıt edilememeli', () => {
  beforeEach(() => {
    cy.visit('/');
    todos.forEach((t) => {
      cy.get('[data-cy=todo-input]').type(t);
      cy.get('[data-cy=todo-add-btn]').click();
    });
  });

  it('Varsayılan seçili opsiyon hepsi olmalı', () => {
    cy.get('[data-cy=controller-all]').children('input').should('be.checked');
  });

  it('Temizle butonuna basınca tüm işler silinmeli', () => {
    cy.get('[data-cy=controller-clear]').click();
    cy.get('[data-cy=todo-container]').should('not.exist');
    cy.get('[data-cy=empty-message]').should('exist');
  });

  it('Yapılacak seçildiğinde, yapılmış olan işleri filtrelemeli', () => {
    cy.get('[data-cy=todo-checkbox]').eq(2).click();
    cy.get('[data-cy=controller-todos]').click();
    cy.get('[data-cy=todo-element]').should('have.length', 2);
    cy.get('[data-cy=todo-element]').each((item) => {
      cy.wrap(item).should('not.contain.text', todos[2]);
    });
  });

  it('Yapılmışlar seçildiğinde, yapılacak olan işleri filtrelemeli', () => {
    cy.get('[data-cy=todo-checkbox]').eq(2).click();
    cy.get('[data-cy=controller-completed]').click();
    cy.get('[data-cy=todo-element]').should('have.length', 1);
    cy.get('[data-cy=todo-element]').each((item) => {
      cy.wrap(item).should('contain.text', todos[2]);
    });
  });
});
