/*global PubSub */

(function(window) {
    'use strict';

    /*
     * Starting everything
     */


    var App = window.App || {};

    function init(modelObj, viewObj) {
        App.View.init(App.Template);
        App.Controller.init(TodoList, App.View);

    }

    App.init = init;

    window.App = App;
})(window);
