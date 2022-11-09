import { defineConfig } from 'cypress';

const configuration = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.ts',
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/e2e.ts',
    experimentalSessionAndOrigin: true,
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
  },
  component: {
    specPattern: '**/*.component.cy.ts',
    video: false,
    screenshotOnRunFailure: false,
  },
};

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
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
    ...configuration.e2e,
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    ...configuration.component,
  },
});
