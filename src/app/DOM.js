/**
 * Abstracts away the browser's DOM lookup and events
 */

(function(window) {
  'use strict';

  function element(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function elementAll(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  }

  function parentElement(element, tagName) {
    if (!element.parentNode) {
      return;
    }
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
      return element.parentNode;
    }
    return parentElement(element.parentNode, tagName);
  }

  // now or in the future elements
  function $delegate(target, selector, type, handler) {
    function dispatchEvent(event) {
      var targetElement = event.target;
      var potentialElements = elementAll(selector, target);
      var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

      if (hasMatch) {
        handler.call(targetElement, event);
      }
    }

    $on(target, type, dispatchEvent, type === 'blur' || type === 'focus');
  }

  function $on(target, type, callback, useCapture) {
    target.addEventListener(type, callback, !!useCapture);
  }
  /**
   * Export the public methods
   */
  var DOM = {
    element: element,
    elementAll: elementAll,
    parentElement: parentElement,
    $on: $on,
    $delegate: $delegate
  };

  window.DOM = DOM;

})(window);
