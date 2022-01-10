///  <refrence types='cypress'/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('shoul find our welcome page and message', () => {
    cy.get('h1').contains('meet');
  });
});
