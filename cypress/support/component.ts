// cypress/support/component.ts
import { mount } from 'cypress/react'


declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)