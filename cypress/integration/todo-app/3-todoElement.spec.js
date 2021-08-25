describe('Todo Elementi', () => {
  beforeEach(() => cy.visit('/'));

  it('Elementin oluşması', () => {
    const expectedText = 'enter deneme yazısı';
    cy.get('[data-cy=todo-input]').type(`${expectedText}{enter}`);
    cy.get('[data-cy=todo-element]').should('have.text', expectedText);
  });
});
