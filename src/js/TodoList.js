/*global PubSub */

(function(window) {
    'use strict';

    /**
     * Todo List object, this publish and changes to the object 
     */


    var todos = [];

    function add(todo) {
        todo.id = todos.length;
        todos.push(todo);
        onListChange();
    }

    function remove(id) {
        todos = todos.filter(function(todo) {
            return todo.id !== id;
        })
        onListChange();
    }

    function onListChange() {
        PubSub.publish('TodoListChanged', todos);
    }

    var TodoList = {
        add: add,
        remove: remove
    };

    window.TodoList = TodoList;

})(window);
