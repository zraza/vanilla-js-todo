(function(window) {
    'use strict';

    /**
     * Todo view template and method to render each block of template
     */


    var defaultTemplate = '<li data-id="{{id}}">' 
        + '<div class="view">' 
         + '<label>{{title}}</label>' 
         + '<button class="todo-delete">Delete</button>' 
        + '</div>' 
    + '</li>';


    /**
     * Render the TODO list using default template
     */

    function renderList(data) {
        var view = '';

        for (var ctr = 0; ctr < data.length; ctr++) {
            var template = defaultTemplate;

            template = template.replace('{{id}}', data[ctr].id);
            template = template.replace('{{title}}', escape(data[ctr].title));

            view = view + template;
        }

        return view;
    }

    /**
     * Render the TODO counter
     */

    function renderCounter(todos) {
        var plural = todos === 1 ? '' : 's';
        return '<strong>' + todos + '</strong> item' + plural + ' in list';
    }

    /**
     * Export the public methods
     */

    var Template = {
        renderList: renderList,
        renderCounter: renderCounter
    }

    window.App = window.App || {};
    window.App.Template = Template;
})(window);
