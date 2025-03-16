import * as React from "react";
import Quiz from '../../client/src/components/Quiz';


describe('Quiz Component', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: [
          {
            _id: '1',
            question: 'What is the output of print(2 ** 3)?',
            answers: [
              { text: '6', isCorrect: false },
              { text: '8', isCorrect: true },
              { text: '9', isCorrect: false },
              { text: '12', isCorrect: false }
            ]
          },
          {
            _id: '2',
            question: 'Which of the following is a mutable data type in Python?',
            answers: [
              { text: 'str', isCorrect: false },
              { text: 'tuple', isCorrect: false },
              { text: 'list', isCorrect: true },
              { text: 'int', isCorrect: false }
            ]
          }
        ]
      }).as('getQuestions');
      
      // Mount the Quiz component
      cy.mount(<Quiz />);
    });