describe('Eğer input boşsa todo kayıt edilememeli', () => {
  beforeEach(() => cy.visit('/'));

  it('Eğer input boşsa button disabled olmalı', () => {
    cy.get('[data-cy=todo-add-btn]').should('have.class', 'disabled');
    cy.get('[data-cy=todo-input]').type('deneme yazısı');
    cy.get('[data-cy=todo-add-btn]').should('not.have.class', 'disabled');
    cy.get('[data-cy=todo-input]').clear();
    cy.get('[data-cy=todo-add-btn]').should('have.class', 'disabled');
  });

  it('Eğer entera basıldığında input boşsa todo eklenmemeli', () => {
    const expectedText = 'enter deneme yazısı';
    cy.get('[data-cy=todo-input]').type(`${expectedText}{enter}`);
    cy.get('[data-cy=todo-element]').should('have.text', expectedText);
    cy.get('[data-cy=todo-input]').clear().type('{enter}');
    cy.get('[data-cy=todo-container]').children().should('have.length', 1);
  });
});
