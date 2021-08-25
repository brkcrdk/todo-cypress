describe('Todo uygulaması başarılı bir şekilde', () => {
  it('Başarılı bir şekilde açılıyor ve boş liste ile geliyor.', () => {
    cy.visit('/');
    cy.get('[data-cy=todo-header]').contains('Yapılacak Listesi');
    cy.get('[data-cy=empty-message]').should('be.visible');
    cy.get('[data-cy=todo-container]').should('not.exist');
  });

  // it('Eğer input boşsa button disabled olmalı', () => {
  //   cy.get('[data-cy=todo-add-btn]').should('have.class', 'disabled');
  //   cy.get('[data-cy=todo-input]').type('deneme yazısı');
  //   cy.get('[data-cy=todo-add-btn]').should('not.have.class', 'disabled');
  //   cy.get('[data-cy=todo-input]').clear();
  //   cy.get('[data-cy=todo-add-btn]').should('have.class', 'disabled');
  // });

  // it('Inputa girilen değer ekle butonuna basılınca listeye eklenecek.', () => {
  //   cy.get('[data-cy=todo-input]').type('Deneme yazısı');
  //   cy.get('[data-cy=todo-add-btn]').click();
  //   cy.get('[data-cy=todo-element]').should('have.text', 'Deneme yazısı');
  // });
});
