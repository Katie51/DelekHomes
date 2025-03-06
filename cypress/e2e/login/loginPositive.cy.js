import homePage from "../../fixtures/pageObject/homePage";
import loginPage from "../../fixtures/pageObject/loginPage";
import userProfilePage from "../../fixtures/pageObject/userProfilePage";

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should login as user', () => {
    
        homePage.loginButton.click();
        loginPage.loginPageUrl.should('include','/auth/login');
        loginPage.loginTitle.should('have.text','Sign in to Delek Homes');
        loginPage.loginInput.type(Cypress.env('USER_EMAIL'));
        loginPage.passwordInput.type(Cypress.env('USER_PASSWORD'));
        loginPage.loginButton.click();
        userProfilePage.userProfileTitle.should('have.text','Profile');
        userProfilePage.PageUrl.should('include','/dashboard/user/profile');

    });
    it('Should login as admin', () => {

        homePage.loginButton.click();
        loginPage.loginPageUrl.should('include','/auth/login');
        loginPage.loginTitle.should('have.text','Sign in to Delek Homes');
        loginPage.loginInput.type(Cypress.env('ADMIN_EMAIL'));
        loginPage.passwordInput.type(Cypress.env('ADMIN_PASSWORD'));
        loginPage.loginButton.click();
        userProfilePage.userProfileTitle.should('have.text','Profile');
        userProfilePage.PageUrl.should('include','/dashboard/user/profile');

    });

})  