<h3>Delek Homes Project</h3>
This project demonstrates automated testing for the Delek Homes platform using Cypress.
<h4>Key Features:</h4>
<h4>Page Object Model (POM):</h4>
The project follows the Page Object Model (POM) design pattern, ensuring that the test scripts are clean, maintainable, and reusable. This design pattern separates the test logic from the user interface interactions, allowing for easy updates to the UI elements and actions.

<h4>Environment Variables (env) for Sensitive Data:</h4>
To protect sensitive data like emails and passwords, Cypress environment variables are used. Instead of hardcoding credentials, values are securely stored in environment variables (CYPRESS_USER_EMAIL, CYPRESS_USER_PASSWORD, CYPRESS_ADMIN_EMAIL, CYPRESS_ADMIN_PASSWORD). These environment variables are loaded from .env files or GitHub Actions secrets to ensure sensitive information is not exposed in the source code.

<h4>Chance Library:</h4>
The Chance.js library is used for generating random test data, such as names, emails, and passwords. This allows for data-driven testing where each test can execute with unique, randomized data, improving test coverage and ensuring edge cases are handled.
