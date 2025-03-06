import homePage from "../../fixtures/pageObject/homePage";
import loginPage from "../../fixtures/pageObject/loginPage";

describe('LoginNegative', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Should not login with an empty email field', () =>{

        homePage.loginButton.click();
        loginPage.loginPageUrl.should('include','/auth/login');
        loginPage.loginTitle.should('have.text','Sign in to Delek Homes');
        loginPage.loginInput.should('be.empty');
        loginPage.passwordInput.type(Cypress.env('USER_PASSWORD'));
        loginPage.loginButton.click();
        loginPage.emailErrorMessage.should('have.text','Email is required');
        
    })
})