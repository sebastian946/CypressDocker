const SELECTORS = {
    TITLE: 'h3',
    INPUT_USERNAME: 'input[data-testid="search-bar"]',
    BUTTON_SEARCH: 'button[type="submit"]',
    TITLE_USER: 'header div h4',
};

describe('Login Page Tests', () => {
    it('should display the main page', () => {
        cy.visit('/');
        cy.get(SELECTORS.TITLE).should('contain.text','Welcome');
    });

    it('search user github name', () => {
        cy.visit('/');
        cy.get(SELECTORS.INPUT_USERNAME).type('Sebastian');
        cy.get(SELECTORS.BUTTON_SEARCH).click();
        cy.get(SELECTORS.TITLE_USER).should('contain.text', 'Sebastian').then(()=>{
            cy.log('This UI testing pass success')
        });
    });
});
