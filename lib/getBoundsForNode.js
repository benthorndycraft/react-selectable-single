"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
exports.default = function (node) {
  var containerScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { scrollTop: 0, scrollLeft: 0 };
  var scrollTop = containerScroll.scrollTop,
      scrollLeft = containerScroll.scrollLeft;

  var rect = node.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop + scrollTop,
    left: rect.left + document.body.scrollLeft + scrollLeft,
    offsetWidth: node.offsetWidth,
    offsetHeight: node.offsetHeight
  };
};