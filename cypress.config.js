require('dotenv').config(); 

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    viewportWidth: 1900,
    viewportHeight: 1080,
    env: {
      USER_EMAIL: process.env.CYPRESS_USER_EMAIL,
      USER_PASSWORD: process.env.CYPRESS_USER_PASSWORD,
      ADMIN_EMAIL: process.env.CYPRESS_ADMIN_EMAIL,
      ADMIN_PASSWORD: process.env.CYPRESS_ADMIN_PASSWORD
    }
  },
})