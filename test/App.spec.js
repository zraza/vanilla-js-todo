/*
 * Unit tests for App.js
 */

describe('Todo Controller', function() {

  // inject/remove the HTML fixture for the tests
  beforeEach(function() {
    fixture.base = 'test';
    fixture.load('App.fixture.html');
  });
  afterEach(function() {
    fixture.cleanup();
  });

  // call the App init function to register DOM elements
  beforeEach(function() {
    window.App.init();
  });

  it('should have empty list on init state', function() {
    expect(document.querySelector('.todo-list').innerHTML).toBe('');
  });

  it('should add new item when "Add" button is clicked', function() {
    addToDo('Write functional code');
    expect(document.querySelectorAll('.todo-list li').length).toBe(1);
    expect(document.querySelector('.todo-count strong').innerHTML).toBe('1');
  });

  it('should remove the item from the list when "Delete" button is clicked', function() {
    addToDo('Write functional code');
    addToDo('Write Unit tests');
    expect(document.querySelector('.todo-count strong').innerHTML).toBe('2');
    document.querySelectorAll('.todo-list li .todo-delete')[0].click();
    expect(document.querySelector('.todo-count strong').innerHTML).toBe('1');
    expect(document.querySelectorAll('.todo-list li label')[0].innerHTML).toBe('Write Unit tests');
  });

  function addToDo(title) {
    document.querySelector('.todo-new').value = title;
    document.querySelector('.todo-add').click();
  }

});
