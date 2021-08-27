// expectedText => testte olmasını veya olmamasnı istediğimiz bir text varsa
// onu bu parametre ile belirtiyoruz
// containType => textte yazının olması/olmama filtresini belirtiyor(not.contain.text/contain.text)
// expectedLength => bu parametre listede bulunması beklenen eleman sayısı
// filterType => filtreleme tipi

Cypress.Commands.add(
  'filterTodo',
  ({ expectedText, expectedLength, containType, filterType }) => {
    cy.get(`[data-cy=controller-${filterType}]`).click();
    cy.get('[data-cy=todo-element]').should('have.length', expectedLength);
    if (expectedText) {
      cy.get('[data-cy=todo-element]').each((item) => {
        cy.wrap(item).should(containType, expectedText);
      });
    }
  }
);
