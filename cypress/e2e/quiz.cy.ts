describe('Tech Quiz Application', () => {
    beforeEach(() => {
     cy.visit('/');
    });


     it('loads the application and displays the start button', () => {
        cy.contains('Start Quiz').should('be.visible');
     });

        it('starts the quiz when the start button is clicked', () => {
            cy.contains('Start Quiz').click();
            cy.get('.card').should('exist');
            cy.get('h2').should('exist');
            cy.get('.btn-primary').should('have.length.at.least', 1);
        });

        it('proceeds through the quiz flow', () => {
            cy.contains('Start Quiz').click();
            
            
            for (let i = 0; i < 10; i++) {
              
              cy.get('body').then(($body) => {
                if ($body.text().includes('Quiz Completed')) {
                  return;
                }
                
                
                cy.get('.btn-primary').first().click();
              });
            }
            
            
            cy.contains('Quiz Completed').should('be.visible');
            cy.contains('Your score:').should('be.visible');
            cy.contains(/\d+\/\d+/).should('be.visible'); 
          });
        
          it('allows starting a new quiz after completion', () => {
            cy.contains('Start Quiz').click();
            
            
            for (let i = 0; i < 10; i++) {
              cy.get('body').then(($body) => {
                if ($body.text().includes('Quiz Completed')) {
                  return;
                }
                cy.get('.btn-primary').first().click();
              });
            }
            
            
            cy.contains('Take New Quiz').click();
            
            
            cy.get('.card').should('exist');
            cy.get('h2').should('exist');
            cy.get('.btn-primary').should('have.length.at.least', 1);
          });
        });