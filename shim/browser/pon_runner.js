/**
 * Simple task runner
 * @class PonRunner
 * @param {Object<string, function>} tasks
 */
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var co = require('co');

var _require = require('events'),
    EventEmitter = _require.EventEmitter;

var _require2 = require('./mixins'),
    taskMix = _require2.taskMix,
    contextMix = _require2.contextMix;

var TICK_TASK = 'pon:task';

var PonBase = [taskMix, contextMix].reduce(function (Mixed, mix) {
  return mix(Mixed);
}, EventEmitter);

/** @lends PonRunner */

var PonRunner = function (_PonBase) {
  (0, _inherits3.default)(PonRunner, _PonBase);
  (0, _createClass3.default)(PonRunner, [{
    key: '$$runner',
    get: function get() {
      return true;
    }
  }]);

  function PonRunner(tasks) {
    (0, _classCallCheck3.default)(this, PonRunner);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PonRunner.__proto__ || (0, _getPrototypeOf2.default)(PonRunner)).call(this));

    var s = _this;
    s.registerTasks(tasks);
    return _this;
  }

  /**
   * Run a function
   * @param {...string} patterns - Name patten(s) to run
   * @returns {Promise}
   */


  (0, _createClass3.default)(PonRunner, [{
    key: 'run',
    value: function run() {
      for (var _len = arguments.length, patterns = Array(_len), _key = 0; _key < _len; _key++) {
        patterns[_key] = arguments[_key];
      }

      var s = this;
      if (patterns.length === 0) {
        patterns = ['*'];
      }
      return co(_regenerator2.default.mark(function _callee2() {
        var _this2 = this;

        var results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

        return _regenerator2.default.wrap(function _callee2$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                results = {};
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 4;
                _loop = _regenerator2.default.mark(function _loop() {
                  var pattern, tasks;
                  return _regenerator2.default.wrap(function _loop$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          pattern = _step.value;
                          tasks = s.tasksWithPatterns.apply(s, (0, _toConsumableArray3.default)(pattern.split(',')));
                          // Run parallel

                          _context2.next = 4;
                          return _promise2.default.all((0, _keys2.default)(tasks).map(function (taskName) {
                            return co(_regenerator2.default.mark(function _callee() {
                              var ctx, timer, logger, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, task, subResults, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, name, result, took;

                              return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      ctx = s.newContext({
                                        task: taskName
                                      });
                                      timer = ctx.timer, logger = ctx.logger;

                                      logger.PREFIX = '[' + taskName + '] ';
                                      _iteratorNormalCompletion2 = true;
                                      _didIteratorError2 = false;
                                      _iteratorError2 = undefined;
                                      _context.prev = 6;
                                      _iterator2 = (0, _getIterator3.default)([].concat(tasks[taskName]));

                                    case 8:
                                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                        _context.next = 46;
                                        break;
                                      }

                                      task = _step2.value;

                                      if ((typeof task === 'undefined' ? 'undefined' : (0, _typeof3.default)(task)) === 'object') {
                                        task = task.default || taskName + '/*';
                                      }

                                      if (!(typeof task === 'string')) {
                                        _context.next = 35;
                                        break;
                                      }

                                      _context.next = 14;
                                      return s.run(task);

                                    case 14:
                                      subResults = _context.sent;
                                      _iteratorNormalCompletion3 = true;
                                      _didIteratorError3 = false;
                                      _iteratorError3 = undefined;
                                      _context.prev = 18;

                                      for (_iterator3 = (0, _getIterator3.default)((0, _keys2.default)(subResults)); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        name = _step3.value;

                                        results[name] = [].concat((0, _toConsumableArray3.default)(results[name] || []), (0, _toConsumableArray3.default)(subResults[name]));
                                      }
                                      _context.next = 26;
                                      break;

                                    case 22:
                                      _context.prev = 22;
                                      _context.t0 = _context['catch'](18);
                                      _didIteratorError3 = true;
                                      _iteratorError3 = _context.t0;

                                    case 26:
                                      _context.prev = 26;
                                      _context.prev = 27;

                                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                      }

                                    case 29:
                                      _context.prev = 29;

                                      if (!_didIteratorError3) {
                                        _context.next = 32;
                                        break;
                                      }

                                      throw _iteratorError3;

                                    case 32:
                                      return _context.finish(29);

                                    case 33:
                                      return _context.finish(26);

                                    case 34:
                                      return _context.abrupt('continue', 43);

                                    case 35:
                                      timer.tick(TICK_TASK);
                                      logger.info('Task started...');
                                      _context.next = 39;
                                      return _promise2.default.resolve(task(ctx));

                                    case 39:
                                      result = _context.sent;

                                      results[taskName] = [].concat((0, _toConsumableArray3.default)(results[taskName] || []), [result]);
                                      took = timer.tick(TICK_TASK);

                                      logger.info('...done! (' + took + 'ms)\n');

                                    case 43:
                                      _iteratorNormalCompletion2 = true;
                                      _context.next = 8;
                                      break;

                                    case 46:
                                      _context.next = 52;
                                      break;

                                    case 48:
                                      _context.prev = 48;
                                      _context.t1 = _context['catch'](6);
                                      _didIteratorError2 = true;
                                      _iteratorError2 = _context.t1;

                                    case 52:
                                      _context.prev = 52;
                                      _context.prev = 53;

                                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                      }

                                    case 55:
                                      _context.prev = 55;

                                      if (!_didIteratorError2) {
                                        _context.next = 58;
                                        break;
                                      }

                                      throw _iteratorError2;

                                    case 58:
                                      return _context.finish(55);

                                    case 59:
                                      return _context.finish(52);

                                    case 60:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this, [[6, 48, 52, 60], [18, 22, 26, 34], [27,, 29, 33], [53,, 55, 59]]);
                            }));
                          }));

                        case 4:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _loop, _this2);
                });
                _iterator = (0, _getIterator3.default)(patterns);

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 12;
                  break;
                }

                return _context3.delegateYield(_loop(), 't0', 9);

              case 9:
                _iteratorNormalCompletion = true;
                _context3.next = 7;
                break;

              case 12:
                _context3.next = 18;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t1 = _context3['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context3.t1;

              case 18:
                _context3.prev = 18;
                _context3.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 21:
                _context3.prev = 21;

                if (!_didIteratorError) {
                  _context3.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context3.finish(21);

              case 25:
                return _context3.finish(18);

              case 26:
                return _context3.abrupt('return', results);

              case 27:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee2, this, [[4, 14, 18, 26], [19,, 21, 25]]);
      }));
    }

    /**
     * Returns runner function bound to the instance
     * @returns {ponBound} Bound function
     */

  }, {
    key: 'bind',
    value: function bind() {
      var s = this;
      var run = s.run.bind(s);
      return (0, _assign2.default)(run, {
        $$runner: true,
        bind: function bind() {
          return s.bind();
        },
        run: run,
        tasks: s.tasks
      });
    }
  }]);
  return PonRunner;
}(PonBase);

module.exports = PonRunner;

/**
 * @typedef {Object<string, function|tasks>} tasks
 */

/**
 * @typedef {function} ponBound
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbl9ydW5uZXIuanMiXSwibmFtZXMiOlsiY28iLCJyZXF1aXJlIiwiRXZlbnRFbWl0dGVyIiwidGFza01peCIsImNvbnRleHRNaXgiLCJUSUNLX1RBU0siLCJQb25CYXNlIiwicmVkdWNlIiwiTWl4ZWQiLCJtaXgiLCJQb25SdW5uZXIiLCJ0YXNrcyIsInMiLCJyZWdpc3RlclRhc2tzIiwicGF0dGVybnMiLCJsZW5ndGgiLCJyZXN1bHRzIiwicGF0dGVybiIsInRhc2tzV2l0aFBhdHRlcm5zIiwic3BsaXQiLCJhbGwiLCJtYXAiLCJ0YXNrTmFtZSIsImN0eCIsIm5ld0NvbnRleHQiLCJ0YXNrIiwidGltZXIiLCJsb2dnZXIiLCJQUkVGSVgiLCJjb25jYXQiLCJkZWZhdWx0IiwicnVuIiwic3ViUmVzdWx0cyIsIm5hbWUiLCJ0aWNrIiwiaW5mbyIsInJlc29sdmUiLCJyZXN1bHQiLCJ0b29rIiwiYmluZCIsIiQkcnVubmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLQyxRQUFRLElBQVIsQ0FBWDs7ZUFDeUJBLFFBQVEsUUFBUixDO0lBQWpCQyxZLFlBQUFBLFk7O2dCQUlKRCxRQUFRLFVBQVIsQztJQUZGRSxPLGFBQUFBLE87SUFDQUMsVSxhQUFBQSxVOztBQUdGLElBQU1DLFlBQVksVUFBbEI7O0FBRUEsSUFBTUMsVUFBVSxDQUNkSCxPQURjLEVBRWRDLFVBRmMsRUFHZEcsTUFIYyxDQUdQLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFNBQWdCQSxJQUFJRCxLQUFKLENBQWhCO0FBQUEsQ0FITyxFQUdxQk4sWUFIckIsQ0FBaEI7O0FBS0E7O0lBQ01RLFM7Ozs7d0JBQ1k7QUFDZCxhQUFPLElBQVA7QUFDRDs7O0FBRUQscUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFFbEIsUUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBSCxFQUFkO0FBQUEsMkJBQXZCLENBREksQ0FMQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUVZeEIsUUFGWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxrREFpQ0RFLE9BakNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUgsRUFBUDtBQW1DRDs7QUFFRDs7Ozs7OzsyQkFJUTtBQUNOLFVBQU1KLElBQUksSUFBVjtBQUNBLFVBQU1tQixNQUFNbkIsRUFBRW1CLEdBQUYsQ0FBTVEsSUFBTixDQUFXM0IsQ0FBWCxDQUFaO0FBQ0EsYUFBTyxzQkFBY21CLEdBQWQsRUFBbUI7QUFDeEJTLGtCQUFVLElBRGM7QUFFeEJELGNBQU07QUFBQSxpQkFBTTNCLEVBQUUyQixJQUFGLEVBQU47QUFBQSxTQUZrQjtBQUd4QlIsZ0JBSHdCO0FBSXhCcEIsZUFBT0MsRUFBRUQ7QUFKZSxPQUFuQixDQUFQO0FBTUQ7OztFQXZFcUJMLE87O0FBMkV4Qm1DLE9BQU9DLE9BQVAsR0FBaUJoQyxTQUFqQjs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InBvbl9ydW5uZXIuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgdGFzayBydW5uZXJcbiAqIEBjbGFzcyBQb25SdW5uZXJcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb24+fSB0YXNrc1xuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgY28gPSByZXF1aXJlKCdjbycpXG5jb25zdCB7IEV2ZW50RW1pdHRlciB9ID0gcmVxdWlyZSgnZXZlbnRzJylcbmNvbnN0IHtcbiAgdGFza01peCxcbiAgY29udGV4dE1peFxufSA9IHJlcXVpcmUoJy4vbWl4aW5zJylcblxuY29uc3QgVElDS19UQVNLID0gJ3Bvbjp0YXNrJ1xuXG5jb25zdCBQb25CYXNlID0gW1xuICB0YXNrTWl4LFxuICBjb250ZXh0TWl4XG5dLnJlZHVjZSgoTWl4ZWQsIG1peCkgPT4gbWl4KE1peGVkKSwgRXZlbnRFbWl0dGVyKVxuXG4vKiogQGxlbmRzIFBvblJ1bm5lciAqL1xuY2xhc3MgUG9uUnVubmVyIGV4dGVuZHMgUG9uQmFzZSB7XG4gIGdldCAkJHJ1bm5lciAoKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICh0YXNrcykge1xuICAgIHN1cGVyKClcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIHMucmVnaXN0ZXJUYXNrcyh0YXNrcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gYSBmdW5jdGlvblxuICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcGF0dGVybnMgLSBOYW1lIHBhdHRlbihzKSB0byBydW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBydW4gKC4uLnBhdHRlcm5zKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBpZiAocGF0dGVybnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwYXR0ZXJucyA9IFsgJyonIF1cbiAgICB9XG4gICAgcmV0dXJuIGNvKGZ1bmN0aW9uICogKCkge1xuICAgICAgbGV0IHJlc3VsdHMgPSB7fVxuICAgICAgZm9yIChsZXQgcGF0dGVybiBvZiBwYXR0ZXJucykge1xuICAgICAgICBsZXQgdGFza3MgPSBzLnRhc2tzV2l0aFBhdHRlcm5zKC4uLnBhdHRlcm4uc3BsaXQoJywnKSlcbiAgICAgICAgLy8gUnVuIHBhcmFsbGVsXG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFxuICAgICAgICAgIE9iamVjdC5rZXlzKHRhc2tzKS5tYXAoKHRhc2tOYW1lKSA9PiBjbyhmdW5jdGlvbiAqICgpIHtcbiAgICAgICAgICAgIGxldCBjdHggPSBzLm5ld0NvbnRleHQoe1xuICAgICAgICAgICAgICB0YXNrOiB0YXNrTmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCB7IHRpbWVyLCBsb2dnZXIgfSA9IGN0eFxuICAgICAgICAgICAgbG9nZ2VyLlBSRUZJWCA9IGBbJHt0YXNrTmFtZX1dIGBcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgW10uY29uY2F0KHRhc2tzWyB0YXNrTmFtZSBdKSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGFzayA9IHRhc2suZGVmYXVsdCB8fCBgJHt0YXNrTmFtZX0vKmBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YlJlc3VsdHMgPSB5aWVsZCBzLnJ1bih0YXNrKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMoc3ViUmVzdWx0cykpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHNbIG5hbWUgXSA9IFsgLi4uKHJlc3VsdHNbIG5hbWUgXSB8fCBbXSksIC4uLnN1YlJlc3VsdHNbIG5hbWUgXSBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGltZXIudGljayhUSUNLX1RBU0spXG4gICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBUYXNrIHN0YXJ0ZWQuLi5gKVxuICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgUHJvbWlzZS5yZXNvbHZlKHRhc2soY3R4KSlcbiAgICAgICAgICAgICAgcmVzdWx0c1sgdGFza05hbWUgXSA9IFsgLi4uKHJlc3VsdHNbIHRhc2tOYW1lIF0gfHwgW10pLCByZXN1bHQgXVxuICAgICAgICAgICAgICBsZXQgdG9vayA9IHRpbWVyLnRpY2soVElDS19UQVNLKVxuICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgLi4uZG9uZSEgKCR7dG9va31tcylcXG5gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBydW5uZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIGluc3RhbmNlXG4gICAqIEByZXR1cm5zIHtwb25Cb3VuZH0gQm91bmQgZnVuY3Rpb25cbiAgICovXG4gIGJpbmQgKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgY29uc3QgcnVuID0gcy5ydW4uYmluZChzKVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHJ1biwge1xuICAgICAgJCRydW5uZXI6IHRydWUsXG4gICAgICBiaW5kOiAoKSA9PiBzLmJpbmQoKSxcbiAgICAgIHJ1bixcbiAgICAgIHRhc2tzOiBzLnRhc2tzXG4gICAgfSlcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9uUnVubmVyXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdDxzdHJpbmcsIGZ1bmN0aW9ufHRhc2tzPn0gdGFza3NcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbn0gcG9uQm91bmRcbiAqL1xuIl19