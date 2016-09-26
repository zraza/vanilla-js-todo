/*global PubSub */

(function(window) {
    'use strict';

    /*
     * Typical controller, wiring up things
     */

    var model, view;

    function init(modelObj, viewObj) {
        model = modelObj;
        view = viewObj;

        view.bind('todoNew', onAddNew);
        view.bind('todoAdd', onAddNew);
        view.bind('todoDelete', onDelete);

        PubSub.subscribe('TodoListChanged', onListChange)


    }

    function onAddNew(title) {
        if (title.trim() === '') {
            return;
        }

        model.add({ title: title });
    }

    function onDelete(id) {
        model.remove(id);
    }

    function onListChange(items) {
        view.render(items);
    }

    var Controller = {
        init: init
    }


    window.App = window.App || {};
    window.App.Controller = Controller;
})(window);
