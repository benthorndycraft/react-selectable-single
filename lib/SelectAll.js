'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectAllButton = (_temp2 = _class = function (_Component) {
  _inherits(SelectAllButton, _Component);

  function SelectAllButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectAllButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectAllButton.__proto__ || Object.getPrototypeOf(SelectAllButton)).call.apply(_ref, [this].concat(args))), _this), _this.getRootRef = function (c) {
      return _this.root = c;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectAllButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.root.addEventListener('mousedown', function (e) {
        return e.stopPropagation();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        this.props.component,
        {
          ref: this.getRootRef,
          className: 'selectable-select-all ' + this.props.className,
          onClick: this.context.selectable.selectAll
        },
        this.props.children
      );
    }
  }]);

  return SelectAllButton;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.object,
  component: _react.PropTypes.node
}, _class.defaultProps = {
  component: 'div'
}, _class.contextTypes = {
  selectable: _react2.default.PropTypes.object
}, _temp2);
exports.default = SelectAllButton;