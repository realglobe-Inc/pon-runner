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
      key: 'hasTask',
      value: function hasTask(name) {
        var s = this;
        return !s.getTask(name);
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
      key: 'removeTask',
      value: function removeTask(name) {
        var s = this;
        s.getTask(name);
        return s;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tfbWl4LmpzIl0sIm5hbWVzIjpbIm1pbmltYXRjaCIsInJlcXVpcmUiLCJ0YXNrTWl4IiwiQmFzZUNsYXNzIiwiVGFza01peGVkIiwiYXJndW1lbnRzIiwicyIsInRhc2tzIiwibmFtZSIsImdldFRhc2siLCJ0YXNrIiwicmVnaXN0ZXJUYXNrIiwic3ViTmFtZXMiLCJmaWx0ZXIiLCJzdWJOYW1lIiwiam9pbiIsInBhdHRlcm5zIiwibWFwIiwicGF0dGVybiIsIlN0cmluZyIsInRyaW0iLCJzb21lIiwicmVkdWNlIiwicmVzb2x2ZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUE7QUFDQSxTQUFTQyxPQUFULENBQWtCQyxTQUFsQixFQUE2QjtBQUMzQjtBQUQyQixNQUVyQkMsU0FGcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFHTjtBQUNqQixlQUFPLElBQVA7QUFDRDtBQUx3Qjs7QUFPekIseUJBQWU7QUFBQTs7QUFBQSwrSUFDSkMsU0FESTs7QUFFYixVQUFNQyxTQUFOO0FBQ0FBLFFBQUVDLEtBQUYsR0FBVSxFQUFWO0FBSGE7QUFJZDs7QUFYd0I7QUFBQTtBQUFBLDhCQWFoQkMsSUFiZ0IsRUFhVjtBQUNiLFlBQU1GLElBQUksSUFBVjtBQUNBLGVBQU9BLEVBQUVDLEtBQUYsQ0FBU0MsSUFBVCxDQUFQO0FBQ0Q7QUFoQndCO0FBQUE7QUFBQSw4QkFrQmhCQSxJQWxCZ0IsRUFrQlY7QUFDYixZQUFNRixJQUFJLElBQVY7QUFDQSxlQUFPLENBQUNBLEVBQUVHLE9BQUYsQ0FBVUQsSUFBVixDQUFSO0FBQ0Q7QUFyQndCO0FBQUE7QUFBQSxvQ0F1QlZELEtBdkJVLEVBdUJIO0FBQ3BCLFlBQU1ELElBQUksSUFBVjtBQURvQjtBQUFBO0FBQUE7O0FBQUE7QUFFcEIsMERBQWlCLG9CQUFZQyxLQUFaLENBQWpCLDRHQUFxQztBQUFBLGdCQUE1QkMsSUFBNEI7O0FBQ25DLGdCQUFJRSxPQUFPSCxNQUFPQyxJQUFQLENBQVg7QUFDQUYsY0FBRUssWUFBRixDQUFlSCxJQUFmLEVBQXFCRSxJQUFyQjtBQUNEO0FBTG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNckI7QUE3QndCO0FBQUE7QUFBQSxtQ0ErQlhGLElBL0JXLEVBK0JMRSxJQS9CSyxFQStCQztBQUN4QixZQUFNSixJQUFJLElBQVY7QUFDQUEsVUFBRUMsS0FBRixDQUFTQyxJQUFULElBQWtCRSxJQUFsQjtBQUNBLFlBQUlFLFdBQVcsb0JBQVlGLElBQVosRUFDWkcsTUFEWSxDQUNMLFVBQUNDLE9BQUQ7QUFBQSxpQkFBYSxPQUFPSixLQUFNSSxPQUFOLENBQVAsS0FBMkIsVUFBeEM7QUFBQSxTQURLLENBQWY7QUFId0I7QUFBQTtBQUFBOztBQUFBO0FBS3hCLDJEQUFvQkYsUUFBcEIsaUhBQThCO0FBQUEsZ0JBQXJCRSxPQUFxQjs7QUFDNUJSLGNBQUVLLFlBQUYsQ0FBZSxDQUFFSCxJQUFGLEVBQVFNLE9BQVIsRUFBa0JDLElBQWxCLENBQXVCLEdBQXZCLENBQWYsRUFBNENMLEtBQU1JLE9BQU4sQ0FBNUM7QUFDRDtBQVB1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXpCO0FBdkN3QjtBQUFBO0FBQUEsaUNBeUNiTixJQXpDYSxFQXlDUDtBQUNoQixZQUFNRixJQUFJLElBQVY7QUFDQUEsVUFBRUcsT0FBRixDQUFVRCxJQUFWO0FBQ0EsZUFBT0YsQ0FBUDtBQUNEO0FBN0N3QjtBQUFBO0FBQUEsMENBK0NPO0FBQUEsMENBQVZVLFFBQVU7QUFBVkEsa0JBQVU7QUFBQTs7QUFDOUJBLG1CQUFXQSxTQUFTQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLGlCQUFhQyxPQUFPRCxPQUFQLEVBQWdCRSxJQUFoQixFQUFiO0FBQUEsU0FBYixDQUFYO0FBQ0EsWUFBTWQsSUFBSSxJQUFWO0FBRjhCLFlBR3RCQyxLQUhzQixHQUdaRCxDQUhZLENBR3RCQyxLQUhzQjs7QUFJOUIsZUFBTyxvQkFBWUEsS0FBWixFQUNKTSxNQURJLENBQ0csVUFBQ0wsSUFBRDtBQUFBLGlCQUFVUSxTQUFTSyxJQUFULENBQWMsVUFBQ0gsT0FBRDtBQUFBLG1CQUFhbEIsVUFBVVEsSUFBVixFQUFnQlUsT0FBaEIsQ0FBYjtBQUFBLFdBQWQsQ0FBVjtBQUFBLFNBREgsRUFFSkksTUFGSSxDQUVHLFVBQUNDLFFBQUQsRUFBV2YsSUFBWDtBQUFBLGlCQUFvQixzQkFBY2UsUUFBZCxvQ0FDekJmLElBRHlCLEVBQ2xCRCxNQUFPQyxJQUFQLENBRGtCLEVBQXBCO0FBQUEsU0FGSCxFQUlELEVBSkMsQ0FBUDtBQUtEO0FBeER3QjtBQUFBO0FBQUEsSUFFSEwsU0FGRzs7QUEyRDNCLFNBQU9DLFNBQVA7QUFDRDs7QUFFRG9CLE9BQU9DLE9BQVAsR0FBaUJ2QixPQUFqQiIsImZpbGUiOiJ0YXNrX21peC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1peCB0YXNrIGZlYXR1cmVcbiAqIEBmdW5jdGlvbiB0YXNrTWl4XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBCYXNlQ2xhc3NcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gTWl4ZWQgY2xhc3NcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG1pbmltYXRjaCA9IHJlcXVpcmUoJ21pbmltYXRjaCcpXG5cbi8qKiBAbGVuZHMgdGFza01peCAqL1xuZnVuY3Rpb24gdGFza01peCAoQmFzZUNsYXNzKSB7XG4gIC8qKiBAY2xhc3MgKi9cbiAgY2xhc3MgVGFza01peGVkIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgICBnZXQgJCR0YXNrTWl4ZWQgKCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpXG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcy50YXNrcyA9IHt9XG4gICAgfVxuXG4gICAgZ2V0VGFzayAobmFtZSkge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIHJldHVybiBzLnRhc2tzWyBuYW1lIF1cbiAgICB9XG5cbiAgICBoYXNUYXNrIChuYW1lKSB7XG4gICAgICBjb25zdCBzID0gdGhpc1xuICAgICAgcmV0dXJuICFzLmdldFRhc2sobmFtZSlcbiAgICB9XG5cbiAgICByZWdpc3RlclRhc2tzICh0YXNrcykge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXModGFza3MpKSB7XG4gICAgICAgIGxldCB0YXNrID0gdGFza3NbIG5hbWUgXVxuICAgICAgICBzLnJlZ2lzdGVyVGFzayhuYW1lLCB0YXNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVGFzayAobmFtZSwgdGFzaykge1xuICAgICAgY29uc3QgcyA9IHRoaXNcbiAgICAgIHMudGFza3NbIG5hbWUgXSA9IHRhc2tcbiAgICAgIGxldCBzdWJOYW1lcyA9IE9iamVjdC5rZXlzKHRhc2spXG4gICAgICAgIC5maWx0ZXIoKHN1Yk5hbWUpID0+IHR5cGVvZiB0YXNrWyBzdWJOYW1lIF0gPT09ICdmdW5jdGlvbicpXG4gICAgICBmb3IgKGxldCBzdWJOYW1lIG9mIHN1Yk5hbWVzKSB7XG4gICAgICAgIHMucmVnaXN0ZXJUYXNrKFsgbmFtZSwgc3ViTmFtZSBdLmpvaW4oJy8nKSwgdGFza1sgc3ViTmFtZSBdKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sgKG5hbWUpIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBzLmdldFRhc2sobmFtZSlcbiAgICAgIHJldHVybiBzXG4gICAgfVxuXG4gICAgdGFza3NXaXRoUGF0dGVybnMgKC4uLnBhdHRlcm5zKSB7XG4gICAgICBwYXR0ZXJucyA9IHBhdHRlcm5zLm1hcCgocGF0dGVybikgPT4gU3RyaW5nKHBhdHRlcm4pLnRyaW0oKSlcbiAgICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgICBjb25zdCB7IHRhc2tzIH0gPSBzXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGFza3MpXG4gICAgICAgIC5maWx0ZXIoKG5hbWUpID0+IHBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IG1pbmltYXRjaChuYW1lLCBwYXR0ZXJuKSkpXG4gICAgICAgIC5yZWR1Y2UoKHJlc29sdmVkLCBuYW1lKSA9PiBPYmplY3QuYXNzaWduKHJlc29sdmVkLCB7XG4gICAgICAgICAgW25hbWVdOiB0YXNrc1sgbmFtZSBdXG4gICAgICAgIH0pLCB7fSlcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gVGFza01peGVkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFza01peFxuIl19