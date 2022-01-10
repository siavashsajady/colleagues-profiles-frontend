describe('Nav Menus', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });

      describe('nav', () => {
        it('Should navigate to what we do page', () => {
          cy.get('[data-cy=nav-item]').contains('Who we are').click();
          cy.url().should('include', '/whoweare');
        });
      });
    });
  });
  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5');
    });
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
    });
  });
});
