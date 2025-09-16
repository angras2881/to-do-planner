/// <reference types="cypress" />

// Describe block for the To-Do List application tests
describe('To-Do List Application Tests', () => {

  // beforeEach hook to visit the To-Do List page before each test
  beforeEach(() => {
    // cy.visit('/') will use the baseUrl configured in cypress.config.js
    // which should point to your locally served index.html
    cy.visit('/');
  });

  // Test case 1: Verify the application title
  it('should display the correct application title', () => {
    cy.get('[data-testid="app-title"]')
      .should('be.visible')
      .and('have.text', 'My To-Do List');
  });

  // Test case 2: Add a new to-do item
  it('should allow adding new todo items', () => {
    const todoText1 = 'Learn Cypress';
    const todoText2 = 'Build a Test Automation Framework';

    // Verify initial empty message is visible
    cy.get('#empty-message').should('be.visible');

    // Add the first todo item
    cy.get('[data-testid="new-todo-input"]').type(todoText1); // Corrected data-testid
    cy.get('[data-testid="add-todo-button"]').click();

    // Assert that the new item is in the list and the empty message is gone
    cy.get('[data-testid="todo-list"]').children().should('have.length', 1);
    cy.get('[data-testid="todo-list"]').contains(todoText1).should('be.visible');
    cy.get('#empty-message').should('not.be.visible');

    // Add the second todo item
    cy.get('[data-testid="new-todo-input"]').type(todoText2); // Corrected data-testid
    cy.get('[data-testid="add-todo-button"]').click();

    // Assert that both items are in the list
    cy.get('[data-testid="todo-list"]').children().should('have.length', 2);
    cy.get('[data-testid="todo-list"]').contains(todoText2).should('be.visible');
  });

  // Test case 3: Mark a to-do item as complete
  it('should allow marking a todo item as complete', () => {
    const todoText = 'Buy groceries';

    // Add a todo item
    cy.get('[data-testid="new-todo-input"]').type(todoText); // Corrected data-testid
    cy.get('[data-testid="add-todo-button"]').click();

    // Get the newly added item and click its complete button
    cy.get('[data-testid="todo-list"]')
      .contains(todoText) // Find the span containing the text
      .parents('[data-testid^="todo-item-"]') // Go up to the parent li with the data-testid
      .find('[data-testid="complete-button"]') // Find the complete button within that li
      .click();

    // Assert that the item now has the 'completed' class
    cy.get('[data-testid="todo-list"]')
      .contains(todoText)
      .parents('[data-testid^="todo-item-"]')
      .should('have.class', 'completed');

    // Assert the complete button text changed to 'Undo'
    cy.get('[data-testid="todo-list"]')
      .contains(todoText)
      .parents('[data-testid^="todo-item-"]')
      .find('[data-testid="complete-button"]')
      .should('have.text', 'Undo');
  });

  // Test case 4: Delete a to-do item
  it('should allow deleting a todo item', () => {
    const todoText1 = 'Read a book';
    const todoText2 = 'Go for a run';

    // Add two todo items
    cy.get('[data-testid="new-todo-input"]').type(todoText1); // Corrected data-testid
    cy.get('[data-testid="add-todo-button"]').click();
    cy.get('[data-testid="new-todo-input"]').type(todoText2); // Corrected data-testid
    cy.get('[data-testid="add-todo-button"]').click();

    // Verify there are two items
    cy.get('[data-testid="todo-list"]').children().should('have.length', 2);

    // Delete the first item
    cy.get('[data-testid="todo-list"]')
      .contains(todoText1)
      .parents('[data-testid^="todo-item-"]')
      .find('[data-testid="delete-button"]')
      .click();

    // Assert that the first item is no longer visible and only one item remains
    cy.get('[data-testid="todo-list"]').contains(todoText1).should('not.exist');
    cy.get('[data-testid="todo-list"]').children().should('have.length', 1);

    // Delete the second item
    // Corrected logic: find the existing item by text, then find its delete button
    cy.get('[data-testid="todo-list"]')
      .contains(todoText2)
      .parents('[data-testid^="todo-item-"]')
      .find('[data-testid="delete-button"]')
      .click();

    // Assert that the list is empty and the empty message is visible
    cy.get('[data-testid="todo-list"]').children().should('have.length', 0);
    cy.get('#empty-message').should('be.visible');
  });

  // Test case 5: Add item using Enter key
  it('should allow adding a todo item by pressing Enter key', () => {
    const todoText = 'Write code';
    cy.get('[data-testid="new-todo-input"]').type(`${todoText}{enter}`); // Corrected data-testid
    cy.get('[data-testid="todo-list"]').contains(todoText).should('be.visible');
    cy.get('[data-testid="todo-list"]').children().should('have.length', 1);
  });
});