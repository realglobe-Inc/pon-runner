/**
 * Mix context feature
 * @function contextMix
 * @param {function} BaseClass
 * @returns {function} Mixed class
 */
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ponContext = require('pon-context');

/** @lends contextMix */
function contextMix(BaseClass) {
  var ContextMix = function (_BaseClass) {
    (0, _inherits3.default)(ContextMix, _BaseClass);
    (0, _createClass3.default)(ContextMix, [{
      key: '$$contextMixed',
      get: function get() {
        return true;
      }
    }]);

    function ContextMix() {
      (0, _classCallCheck3.default)(this, ContextMix);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ContextMix.__proto__ || (0, _getPrototypeOf2.default)(ContextMix)).apply(this, arguments));

      var s = _this;
      s._contextes = [];
      return _this;
    }

    /**
     * Create new context
     * @param {Object} [values={}] - Context values
     * @returns {PonContext}
     */


    (0, _createClass3.default)(ContextMix, [{
      key: 'newContext',
      value: function newContext() {
        var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var s = this;
        var ctx = ponContext(values);
        s._contextes.push(ctx);
        return ctx;
      }
    }]);
    return ContextMix;
  }(BaseClass);

  return ContextMix;
}

module.exports = contextMix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRleHRfbWl4LmpzIl0sIm5hbWVzIjpbInBvbkNvbnRleHQiLCJyZXF1aXJlIiwiY29udGV4dE1peCIsIkJhc2VDbGFzcyIsIkNvbnRleHRNaXgiLCJhcmd1bWVudHMiLCJzIiwiX2NvbnRleHRlcyIsInZhbHVlcyIsImN0eCIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsYUFBUixDQUFuQjs7QUFFQTtBQUNBLFNBQVNDLFVBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDO0FBQUEsTUFDeEJDLFVBRHdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRU47QUFDcEIsZUFBTyxJQUFQO0FBQ0Q7QUFKMkI7O0FBTTVCLDBCQUFlO0FBQUE7O0FBQUEsaUpBQ0pDLFNBREk7O0FBRWIsVUFBTUMsU0FBTjtBQUNBQSxRQUFFQyxVQUFGLEdBQWUsRUFBZjtBQUhhO0FBSWQ7O0FBRUQ7Ozs7Ozs7QUFaNEI7QUFBQTtBQUFBLG1DQWlCSDtBQUFBLFlBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDdkIsWUFBTUYsSUFBSSxJQUFWO0FBQ0EsWUFBSUcsTUFBTVQsV0FBV1EsTUFBWCxDQUFWO0FBQ0FGLFVBQUVDLFVBQUYsQ0FBYUcsSUFBYixDQUFrQkQsR0FBbEI7QUFDQSxlQUFPQSxHQUFQO0FBQ0Q7QUF0QjJCO0FBQUE7QUFBQSxJQUNMTixTQURLOztBQXdCOUIsU0FBT0MsVUFBUDtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCVixVQUFqQiIsImZpbGUiOiJjb250ZXh0X21peC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peCBjb250ZXh0IGZlYXR1cmVcbiAqIEBmdW5jdGlvbiBjb250ZXh0TWl4XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBCYXNlQ2xhc3NcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gTWl4ZWQgY2xhc3NcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHBvbkNvbnRleHQgPSByZXF1aXJlKCdwb24tY29udGV4dCcpXG5cbi8qKiBAbGVuZHMgY29udGV4dE1peCAqL1xuZnVuY3Rpb24gY29udGV4dE1peCAoQmFzZUNsYXNzKSB7XG4gIGNsYXNzIENvbnRleHRNaXggZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgIGdldCAkJGNvbnRleHRNaXhlZCAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cylcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLl9jb250ZXh0ZXMgPSBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmFsdWVzPXt9XSAtIENvbnRleHQgdmFsdWVzXG4gICAgICogQHJldHVybnMge1BvbkNvbnRleHR9XG4gICAgICovXG4gICAgbmV3Q29udGV4dCAodmFsdWVzID0ge30pIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBsZXQgY3R4ID0gcG9uQ29udGV4dCh2YWx1ZXMpXG4gICAgICBzLl9jb250ZXh0ZXMucHVzaChjdHgpXG4gICAgICByZXR1cm4gY3R4XG4gICAgfVxuICB9XG4gIHJldHVybiBDb250ZXh0TWl4XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGV4dE1peFxuIl19