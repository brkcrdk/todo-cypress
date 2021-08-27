Cypress.Commands.add('addTodo', (todo) => {
  cy.get('[data-cy=todo-input]').type(todo);
  cy.get('[data-cy=todo-add-btn]').click();
});
