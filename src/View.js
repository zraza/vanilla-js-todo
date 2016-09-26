/*global DOM */

(function(window) {
    'use strict';

    /*
     * Abstracts away the browser's DOM completely, this could be IOS native view
     */

    var ENTER_KEY = 13;

    var template, Dom, $todoAdd,
        $todoNew,
        $todoList,
        $todoItemCounter,
        $todoDelete;


    function init(templateObj) {

        template = templateObj;
        Dom = window.DOM;

        $todoAdd = Dom.element('.todo-add');
        $todoNew = Dom.element('.todo-new');
        $todoList = Dom.element('.todo-list');
        $todoItemCounter = Dom.element('.todo-count');
        $todoDelete = '.todo-delete';
    }

    /**
     * Render the template blocks
     */

    function render(parameter) {

        $todoList.innerHTML = template.renderList(parameter);
        $todoItemCounter.innerHTML = template.renderCounter(parameter.length);
    }
    /*
     * Get the element if from dataset
     */

    function _itemId(element) {
        var li = Dom.parentElement(element, 'li');
        return parseInt(li.dataset.id, 10);
    }

    /**
     * Bind DOM events
     */

    function bind(event, handler) {

        if (event === 'todoAdd') {
            DOM.$on($todoAdd, 'click', function() {
                handler($todoNew.value);
                $todoNew.value = '';
            });
        }

        if (event === 'todoDelete') {
            DOM.$delegate($todoList, $todoDelete, 'click', function() {
                handler(_itemId(this));
            });
        }

        if (event === 'todoNew') {
            DOM.$on($todoNew, 'keypress', function(event) {
                if (event.keyCode === ENTER_KEY) {
                    handler(this.value);
                    this.value = '';
                }
            });
        }
    }
    /**
     * Export the public methods
     */
    var View = {
        init: init,
        bind: bind,
        render: render
    }

    window.app = window.app || {};
    window.app.View = View;
}(window));
