describe('SampleComponent', () => {
  it('displays the text passed as prop', () => {
    cy.visit('/');
    cy.contains('Hello, World!').should('exist');
  });
});
