'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getBoundsForNode = require('./getBoundsForNode');

var _getBoundsForNode2 = _interopRequireDefault(_getBoundsForNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given offsets, widths, and heights of two objects, determine if they collide (overlap).
 * @param  {int} aTop    The top position of the first object
 * @param  {int} aLeft   The left position of the first object
 * @param  {int} bTop    The top position of the second object
 * @param  {int} bLeft   The left position of the second object
 * @param  {int} aWidth  The width of the first object
 * @param  {int} aHeight The height of the first object
 * @param  {int} bWidth  The width of the second object
 * @param  {int} bHeight The height of the second object
 * @return {bool}
 */
var coordsCollide = function coordsCollide(aTop, aLeft, bTop, bLeft, aWidth, aHeight, bWidth, bHeight, tolerance) {
  if (typeof tolerance === 'undefined') {
    tolerance = 0;
  }

  return !(
  // 'a' bottom doesn't touch 'b' top
  aTop + aHeight - tolerance < bTop ||
  // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bTop + bHeight ||
  // 'a' right doesn't touch 'b' left
  aLeft + aWidth - tolerance < bLeft ||
  // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bLeft + bWidth);
};

/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */

exports.default = function (a, b, tolerance) {
  var aObj = a instanceof HTMLElement ? (0, _getBoundsForNode2.default)(a) : a;
  var bObj = b instanceof HTMLElement ? (0, _getBoundsForNode2.default)(b) : b;

  return coordsCollide(aObj.top, aObj.left, bObj.top, bObj.left, aObj.offsetWidth, aObj.offsetHeight, bObj.offsetWidth, bObj.offsetHeight, tolerance);
};