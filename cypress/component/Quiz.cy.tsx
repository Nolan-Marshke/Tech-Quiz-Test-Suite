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
      
      
      cy.mount(<Quiz />);
    });

    it('shows start button when quiz is not started', () => {
      cy.get('Start Quiz').should('be.visible');
    });

    it('starts quiz when start button is clicked', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
      });
    
      it('shows answers for the current question', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.contains('6').should('be.visible');
        cy.contains('8').should('be.visible');
        cy.contains('9').should('be.visible');
        cy.contains('12').should('be.visible');
      });
    
      it('moves to next question when an answer is selected', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.contains('6').parent().find('button').click();
        cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
      });
    
      it('shows score when quiz is completed', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        
        
        cy.contains('6').parent().find('button').click();
        
        
        cy.contains('list').parent().find('button').click();
        
        
        cy.contains('Quiz Completed').should('be.visible');
        cy.contains('Your score:').should('be.visible');
        cy.contains('Take New Quiz').should('be.visible');
      });
    
      it('starts a new quiz when "Take New Quiz" is clicked', () => {
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        
        
        cy.contains('6').parent().find('button').click();
        
        
        cy.contains('list').parent().find('button').click();
        
        
        cy.contains('Quiz Completed').should('be.visible');
        
        
        cy.contains('Take New Quiz').click();
        cy.wait('@getQuestions');
        
        
        cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
      });
    });

    