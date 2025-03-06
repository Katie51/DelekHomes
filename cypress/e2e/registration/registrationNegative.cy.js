import registrationPage from "../../fixtures/pageObject/registrationPage"
import homePage from "../../fixtures/pageObject/homePage"
import credentials from "../../fixtures/credentials.json"
import verificationErrorMessages from "../../fixtures/verificationErrorMessages.json"

describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Should not register without email and password', () => {
          
            homePage.registrationButton.click();
            registrationPage.firstNameInput.type(credentials.user.firstName);
            registrationPage.lastNameInput.type(credentials.user.lastName);
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitButton.click();
            registrationPage.errorEmailReguired.should("be.visible").and("contain",verificationErrorMessages.errorEmailReguired);
            registrationPage.errorPasswordRequired.should("be.visible").and("contain",verificationErrorMessages.errorPasswordRequired);

        })

        it('Should not register with an already existing email account', () => {

            homePage.registrationButton.click();
            registrationPage.firstNameInput.type(credentials.user.firstName);
            registrationPage.lastNameInput.type(credentials.user.lastName);
            registrationPage.emailInput.type(Cypress.env('USER_EMAIL'));
            registrationPage.passwordInput.type(Cypress.env('USER_PASSWORD'));
            registrationPage.submitButton.click();
            registrationPage.errorInputDataValidationFailed.should("be.visible").and("contain",verificationErrorMessages.errorInputDataValidationFailed);

        })

    })