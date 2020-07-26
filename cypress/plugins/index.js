/// <reference types="cypress" />

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // custom tasks for sending and reporting code coverage
  require("@cypress/code-coverage/task")(on, config);

  // It's IMPORTANT to return the config object
  // with any changed environment variables
  return config;
};
