# Tech-Quiz-Test-Suite

## Tech Quiz Test Suite
A comprehensive tech quiz application built using the MERN stack with Cypress testing capabilities.

## Description
This application allows users to take a quiz consisting of ten random tech questions and view their score at the end. The quiz application is built with:

- MongoDB database
- Express.js and Node.js backend
- React frontend
- Cypress for testing

## Installation

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Rename the `.env.EXAMPLE` file in the server directory to `.env` and update the MongoDB connection string if needed.

4. Seed the database:
    ```
    npm run seed
    ```

## Usage

1. Start the application:
    ```
    npm run start:dev
    ```

2. Open your browser and navigate to `http://localhost:3001`

3. Click "Start Quiz" to begin taking the tech quiz.

## Testing
This application uses Cypress for both component testing and end-to-end testing.

### Running Tests
- To run all tests:
  ```
  npm run test
  ```
- To run component tests only:
  ```
  npm run test:component
  ```
- To run end-to-end tests only:
  ```
  npm run test:e2e
  ```
- To open the Cypress test runner GUI:
  ```
  npm run cypress:open
  ```

### Test Structure
- Component tests: `cypress/component/Quiz.cy.tsx`
- End-to-end tests: `cypress/e2e/quiz.cy.ts`
- Test fixtures: `cypress/fixtures/questions.json`

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- TypeScript
- Bootstrap
- Cypress


Demonstration video - https://www.youtube.com/watch?v=Z64oqm0rPFg


## License
This project is licensed under the MIT License - see the LICENSE file for details.
