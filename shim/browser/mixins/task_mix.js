/**
 * Mix task feature
 * @function taskMix
 * @param {function} BaseClass
 * @returns {function} Mixed class
 */
'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var minimatch = require('minimatch');

/** @lends taskMix */
function taskMix(BaseClass) {
  /** @class */
  var TaskMixed = function (_BaseClass) {
    (0, _inherits3.default)(TaskMixed, _BaseClass);
    (0, _createClass3.default)(TaskMixed, [{
      key: '$$taskMixed',
      get: function get() {
        return true;
      }
    }]);

    function TaskMixed() {
      (0, _classCallCheck3.default)(this, TaskMixed);

      var _this = (0, _possibleConstructorReturn3.default)(this, (TaskMixed.__proto__ || (0, _getPrototypeOf2.default)(TaskMixed)).apply(this, arguments));

      var s = _this;
      s.tasks = {};
      return _this;
    }

    (0, _createClass3.default)(TaskMixed, [{
      key: 'getTask',
      value: function getTask(name) {
        var s = this;
        return s.tasks[name];
      }
    }, {
      key: 'registerTasks',
      value: function registerTasks(tasks) {
        var s = this;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(tasks)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            var task = tasks[name];
            s.registerTask(name, task);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'registerTask',
      value: function registerTask(name, task) {
        var s = this;
        s.tasks[name] = task;
        var subNames = (0, _keys2.default)(task).filter(function (subName) {
          return typeof task[subName] === 'function';
        });
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(subNames), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var subName = _step2.value;

            s.registerTask([name, subName].join('/'), task[subName]);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'tasksWithPatterns',
      value: function tasksWithPatterns() {
        for (var _len = arguments.length, patterns = Array(_len), _key = 0; _key < _len; _key++) {
          patterns[_key] = arguments[_key];
        }

        patterns = patterns.map(function (pattern) {
          return String(pattern).trim();
        });
        var s = this;
        var tasks = s.tasks;

        return (0, _keys2.default)(tasks).filter(function (name) {
          return patterns.some(function (pattern) {
            return minimatch(name, pattern);
          });
        }).reduce(function (resolved, name) {
          return (0, _assign2.default)(resolved, (0, _defineProperty3.default)({}, name, tasks[name]));
        }, {});
      }
    }]);
    return TaskMixed;
  }(BaseClass);

  return TaskMixed;
}

module.exports = taskMix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tfbWl4LmpzIl0sIm5hbWVzIjpbIm1pbmltYXRjaCIsInJlcXVpcmUiLCJ0YXNrTWl4IiwiQmFzZUNsYXNzIiwiVGFza01peGVkIiwiYXJndW1lbnRzIiwicyIsInRhc2tzIiwibmFtZSIsInRhc2siLCJyZWdpc3RlclRhc2siLCJzdWJOYW1lcyIsImZpbHRlciIsInN1Yk5hbWUiLCJqb2luIiwicGF0dGVybnMiLCJtYXAiLCJwYXR0ZXJuIiwiU3RyaW5nIiwidHJpbSIsInNvbWUiLCJyZWR1Y2UiLCJyZXNvbHZlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQTtBQUNBLFNBQVNDLE9BQVQsQ0FBa0JDLFNBQWxCLEVBQTZCO0FBQzNCO0FBRDJCLE1BRXJCQyxTQUZxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUdOO0FBQ2pCLGVBQU8sSUFBUDtBQUNEO0FBTHdCOztBQU96Qix5QkFBZTtBQUFBOztBQUFBLCtJQUNKQyxTQURJOztBQUViLFVBQU1DLFNBQU47QUFDQUEsUUFBRUMsS0FBRixHQUFVLEVBQVY7QUFIYTtBQUlkOztBQVh3QjtBQUFBO0FBQUEsOEJBYWhCQyxJQWJnQixFQWFWO0FBQ2IsWUFBTUYsSUFBSSxJQUFWO0FBQ0EsZUFBT0EsRUFBRUMsS0FBRixDQUFTQyxJQUFULENBQVA7QUFDRDtBQWhCd0I7QUFBQTtBQUFBLG9DQWtCVkQsS0FsQlUsRUFrQkg7QUFDcEIsWUFBTUQsSUFBSSxJQUFWO0FBRG9CO0FBQUE7QUFBQTs7QUFBQTtBQUVwQiwwREFBaUIsb0JBQVlDLEtBQVosQ0FBakIsNEdBQXFDO0FBQUEsZ0JBQTVCQyxJQUE0Qjs7QUFDbkMsZ0JBQUlDLE9BQU9GLE1BQU9DLElBQVAsQ0FBWDtBQUNBRixjQUFFSSxZQUFGLENBQWVGLElBQWYsRUFBcUJDLElBQXJCO0FBQ0Q7QUFMbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1yQjtBQXhCd0I7QUFBQTtBQUFBLG1DQTBCWEQsSUExQlcsRUEwQkxDLElBMUJLLEVBMEJDO0FBQ3hCLFlBQU1ILElBQUksSUFBVjtBQUNBQSxVQUFFQyxLQUFGLENBQVNDLElBQVQsSUFBa0JDLElBQWxCO0FBQ0EsWUFBSUUsV0FBVyxvQkFBWUYsSUFBWixFQUNaRyxNQURZLENBQ0wsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhLE9BQU9KLEtBQU1JLE9BQU4sQ0FBUCxLQUEyQixVQUF4QztBQUFBLFNBREssQ0FBZjtBQUh3QjtBQUFBO0FBQUE7O0FBQUE7QUFLeEIsMkRBQW9CRixRQUFwQixpSEFBOEI7QUFBQSxnQkFBckJFLE9BQXFCOztBQUM1QlAsY0FBRUksWUFBRixDQUFlLENBQUVGLElBQUYsRUFBUUssT0FBUixFQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBZixFQUE0Q0wsS0FBTUksT0FBTixDQUE1QztBQUNEO0FBUHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRekI7QUFsQ3dCO0FBQUE7QUFBQSwwQ0FvQ087QUFBQSwwQ0FBVkUsUUFBVTtBQUFWQSxrQkFBVTtBQUFBOztBQUM5QkEsbUJBQVdBLFNBQVNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsaUJBQWFDLE9BQU9ELE9BQVAsRUFBZ0JFLElBQWhCLEVBQWI7QUFBQSxTQUFiLENBQVg7QUFDQSxZQUFNYixJQUFJLElBQVY7QUFGOEIsWUFHdEJDLEtBSHNCLEdBR1pELENBSFksQ0FHdEJDLEtBSHNCOztBQUk5QixlQUFPLG9CQUFZQSxLQUFaLEVBQ0pLLE1BREksQ0FDRyxVQUFDSixJQUFEO0FBQUEsaUJBQVVPLFNBQVNLLElBQVQsQ0FBYyxVQUFDSCxPQUFEO0FBQUEsbUJBQWFqQixVQUFVUSxJQUFWLEVBQWdCUyxPQUFoQixDQUFiO0FBQUEsV0FBZCxDQUFWO0FBQUEsU0FESCxFQUVKSSxNQUZJLENBRUcsVUFBQ0MsUUFBRCxFQUFXZCxJQUFYO0FBQUEsaUJBQW9CLHNCQUFjYyxRQUFkLG9DQUN6QmQsSUFEeUIsRUFDbEJELE1BQU9DLElBQVAsQ0FEa0IsRUFBcEI7QUFBQSxTQUZILEVBSUQsRUFKQyxDQUFQO0FBS0Q7QUE3Q3dCO0FBQUE7QUFBQSxJQUVITCxTQUZHOztBQWlEM0IsU0FBT0MsU0FBUDtBQUNEOztBQUVEbUIsT0FBT0MsT0FBUCxHQUFpQnRCLE9BQWpCIiwiZmlsZSI6InRhc2tfbWl4LmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4IHRhc2sgZmVhdHVyZVxuICogQGZ1bmN0aW9uIHRhc2tNaXhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IEJhc2VDbGFzc1xuICogQHJldHVybnMge2Z1bmN0aW9ufSBNaXhlZCBjbGFzc1xuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgbWluaW1hdGNoID0gcmVxdWlyZSgnbWluaW1hdGNoJylcblxuLyoqIEBsZW5kcyB0YXNrTWl4ICovXG5mdW5jdGlvbiB0YXNrTWl4IChCYXNlQ2xhc3MpIHtcbiAgLyoqIEBjbGFzcyAqL1xuICBjbGFzcyBUYXNrTWl4ZWQgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgIGdldCAkJHRhc2tNaXhlZCAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cylcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLnRhc2tzID0ge31cbiAgICB9XG5cbiAgICBnZXRUYXNrIChuYW1lKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcmV0dXJuIHMudGFza3NbIG5hbWUgXVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVGFza3MgKHRhc2tzKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgZm9yIChsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyh0YXNrcykpIHtcbiAgICAgICAgbGV0IHRhc2sgPSB0YXNrc1sgbmFtZSBdXG4gICAgICAgIHMucmVnaXN0ZXJUYXNrKG5hbWUsIHRhc2spXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJUYXNrIChuYW1lLCB0YXNrKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcy50YXNrc1sgbmFtZSBdID0gdGFza1xuICAgICAgbGV0IHN1Yk5hbWVzID0gT2JqZWN0LmtleXModGFzaylcbiAgICAgICAgLmZpbHRlcigoc3ViTmFtZSkgPT4gdHlwZW9mIHRhc2tbIHN1Yk5hbWUgXSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGZvciAobGV0IHN1Yk5hbWUgb2Ygc3ViTmFtZXMpIHtcbiAgICAgICAgcy5yZWdpc3RlclRhc2soWyBuYW1lLCBzdWJOYW1lIF0uam9pbignLycpLCB0YXNrWyBzdWJOYW1lIF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFza3NXaXRoUGF0dGVybnMgKC4uLnBhdHRlcm5zKSB7XG4gICAgICBwYXR0ZXJucyA9IHBhdHRlcm5zLm1hcCgocGF0dGVybikgPT4gU3RyaW5nKHBhdHRlcm4pLnRyaW0oKSlcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBjb25zdCB7IHRhc2tzIH0gPSBzXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGFza3MpXG4gICAgICAgIC5maWx0ZXIoKG5hbWUpID0+IHBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IG1pbmltYXRjaChuYW1lLCBwYXR0ZXJuKSkpXG4gICAgICAgIC5yZWR1Y2UoKHJlc29sdmVkLCBuYW1lKSA9PiBPYmplY3QuYXNzaWduKHJlc29sdmVkLCB7XG4gICAgICAgICAgW25hbWVdOiB0YXNrc1sgbmFtZSBdXG4gICAgICAgIH0pLCB7fSlcbiAgICB9XG5cblxuICB9XG4gIHJldHVybiBUYXNrTWl4ZWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YXNrTWl4XG4iXX0=