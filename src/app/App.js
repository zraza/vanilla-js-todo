/*global TodoList */

(function(window) {
  'use strict';
  /*
   * Starting everything
   */

  var App = window.App || {};

  function init() {
    App.View.init(App.Template);
    TodoList.init();
    App.Controller.init(TodoList, App.View);
  }

  App.init = init;

  window.App = App;
})(window);
