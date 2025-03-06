class Login {

get loginTitle() {return cy.get('.MuiTypography-root.MuiTypography-h4.MuiTypography-gutterBottom.css-1bhrkuh')}
get loginInput() {return cy.get('[name="email"]')}
get passwordInput() {return cy.get('[name="password"]')}
get loginButton() {return cy.get('[type="submit"]')}
get loginPageUrl() {return cy.url()}
get emailErrorMessage() {return cy.get('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1sj4xsi"]')}

}
export default new Login();