import homePage from '../../fixtures/pageObject/homePage';
import registrationPage from '../../fixtures/pageObject/registrationPage';
import userProfilePage from '../../fixtures/pageObject/userProfilePage';

import Chance from 'chance';
const chance = new Chance();

const firstName = chance.first();
const lastName = chance.last();
const email = chance.email();
const password = chance.string({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });

describe('Registration', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an account as new user', () => {
        homePage.registrationButton.click();
        registrationPage.firstNameInput.type(firstName);
        registrationPage.lastNameInput.type(lastName);
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.submitButton.click();
        userProfilePage.PageUrl.should('include','/dashboard/user/profile')

    })
})