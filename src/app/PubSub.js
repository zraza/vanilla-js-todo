(function(window) {
  'use strict';

  /*
   * Implementation of simple Observer pattern
   */

  var subscribers = {};

  function subscribe(subscriberName, fn) {
    subscribers[subscriberName] = subscribers[subscriberName] || [];
    subscribers[subscriberName].push(fn);
  }

  function unSubscribe(subscriberName, fn) {
    if (subscribers[subscriberName]) {
      for (var i = 0; i < subscribers[subscriberName].length; i++) {
        if (subscribers[subscriberName][i] === fn) {
          subscribers[subscriberName].splice(i, 1);
          break;
        }
      }
    }
  }

  function publish(subscriberName, data) {
    if (subscribers[subscriberName]) {
      subscribers[subscriberName].forEach(function(fn) {
        fn(data);
      });
    }
  }

  /**
   * Export the public methods
   */

  var PubSub = {
    subscribe: subscribe,
    unSubscribe: unSubscribe,
    publish: publish
  };


  window.PubSub = PubSub;

})(window);
