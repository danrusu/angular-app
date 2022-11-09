import { defineConfig } from 'cypress';

const configuration = {
  baseUrl: 'http://localhost:4200',
  supportFile: 'cypress/support/e2e.ts',
  // specPattern: 'cypress/e2e/{features/**/*.feature,spec/**/*.ts}',
  experimentalSessionAndOrigin: true,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
};

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {

  on('task', {
    logToTerminal(message) {
      console.log(`@@@ ${message}`);
      return null;
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    ...configuration,
  },
  "component": {
    "devServer": {
      "framework": "angular",
      "bundler": "webpack"
    },
    "specPattern": "**/*.cy.ts"
  }
});
