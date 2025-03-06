class UserProfilePage {

get userProfileTitle() {return cy.get('[class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom css-1bhrkuh"]')}
get PageUrl() {return cy.url()}

}
export default new UserProfilePage();