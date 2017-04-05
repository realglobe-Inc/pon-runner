/**
 * Simple task runner
 * @class Pon
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

/** @lends Pon */

var Pon = function (_PonBase) {
  (0, _inherits3.default)(Pon, _PonBase);
  (0, _createClass3.default)(Pon, [{
    key: '$$pon',
    get: function get() {
      return true;
    }
  }]);

  function Pon(tasks) {
    (0, _classCallCheck3.default)(this, Pon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Pon.__proto__ || (0, _getPrototypeOf2.default)(Pon)).call(this));

    var s = _this;
    s.registerTasks(tasks);
    return _this;
  }

  /**
   * Run a function
   * @param {...string} patterns - Name patten(s) to run
   * @returns {Promise}
   */


  (0, _createClass3.default)(Pon, [{
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
        $$pon: true,
        bind: function bind() {
          return s.bind();
        },
        run: run,
        tasks: s.tasks
      });
    }
  }]);
  return Pon;
}(PonBase);

module.exports = Pon;

/**
 * @typedef {Object<string, function|tasks>} tasks
 */

/**
 * @typedef {function} ponBound
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbi5qcyJdLCJuYW1lcyI6WyJjbyIsInJlcXVpcmUiLCJFdmVudEVtaXR0ZXIiLCJ0YXNrTWl4IiwiY29udGV4dE1peCIsIlRJQ0tfVEFTSyIsIlBvbkJhc2UiLCJyZWR1Y2UiLCJNaXhlZCIsIm1peCIsIlBvbiIsInRhc2tzIiwicyIsInJlZ2lzdGVyVGFza3MiLCJwYXR0ZXJucyIsImxlbmd0aCIsInJlc3VsdHMiLCJwYXR0ZXJuIiwidGFza3NXaXRoUGF0dGVybnMiLCJzcGxpdCIsImFsbCIsIm1hcCIsInRhc2tOYW1lIiwiY3R4IiwibmV3Q29udGV4dCIsInRhc2siLCJ0aW1lciIsImxvZ2dlciIsIlBSRUZJWCIsImNvbmNhdCIsImRlZmF1bHQiLCJydW4iLCJzdWJSZXN1bHRzIiwibmFtZSIsInRpY2siLCJpbmZvIiwicmVzb2x2ZSIsInJlc3VsdCIsInRvb2siLCJiaW5kIiwiJCRwb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUtDLFFBQVEsSUFBUixDQUFYOztlQUN5QkEsUUFBUSxRQUFSLEM7SUFBakJDLFksWUFBQUEsWTs7Z0JBSUpELFFBQVEsVUFBUixDO0lBRkZFLE8sYUFBQUEsTztJQUNBQyxVLGFBQUFBLFU7O0FBR0YsSUFBTUMsWUFBWSxVQUFsQjs7QUFFQSxJQUFNQyxVQUFVLENBQ2RILE9BRGMsRUFFZEMsVUFGYyxFQUdkRyxNQUhjLENBR1AsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FBZ0JBLElBQUlELEtBQUosQ0FBaEI7QUFBQSxDQUhPLEVBR3FCTixZQUhyQixDQUFoQjs7QUFLQTs7SUFDTVEsRzs7Ozt3QkFDUztBQUNYLGFBQU8sSUFBUDtBQUNEOzs7QUFFRCxlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBRWxCLFFBQU1DLFNBQU47QUFDQUEsTUFB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QTtBQUFBO0FBQUEsNkJBQUgsRUFBZDtBQUFBLDJCQUF2QixDQURJLENBTEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFFWXhCLFFBRlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0RBaUNERSxPQWpDQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFILEVBQVA7QUFtQ0Q7O0FBRUQ7Ozs7Ozs7MkJBSVE7QUFDTixVQUFNSixJQUFJLElBQVY7QUFDQSxVQUFNbUIsTUFBTW5CLEVBQUVtQixHQUFGLENBQU1RLElBQU4sQ0FBVzNCLENBQVgsQ0FBWjtBQUNBLGFBQU8sc0JBQWNtQixHQUFkLEVBQW1CO0FBQ3hCUyxlQUFPLElBRGlCO0FBRXhCRCxjQUFNO0FBQUEsaUJBQU0zQixFQUFFMkIsSUFBRixFQUFOO0FBQUEsU0FGa0I7QUFHeEJSLGdCQUh3QjtBQUl4QnBCLGVBQU9DLEVBQUVEO0FBSmUsT0FBbkIsQ0FBUDtBQU1EOzs7RUF2RWVMLE87O0FBMkVsQm1DLE9BQU9DLE9BQVAsR0FBaUJoQyxHQUFqQjs7QUFFQTs7OztBQUlBIiwiZmlsZSI6InBvbi5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSB0YXNrIHJ1bm5lclxuICogQGNsYXNzIFBvblxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBmdW5jdGlvbj59IHRhc2tzXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjbyA9IHJlcXVpcmUoJ2NvJylcbmNvbnN0IHsgRXZlbnRFbWl0dGVyIH0gPSByZXF1aXJlKCdldmVudHMnKVxuY29uc3Qge1xuICB0YXNrTWl4LFxuICBjb250ZXh0TWl4XG59ID0gcmVxdWlyZSgnLi9taXhpbnMnKVxuXG5jb25zdCBUSUNLX1RBU0sgPSAncG9uOnRhc2snXG5cbmNvbnN0IFBvbkJhc2UgPSBbXG4gIHRhc2tNaXgsXG4gIGNvbnRleHRNaXhcbl0ucmVkdWNlKChNaXhlZCwgbWl4KSA9PiBtaXgoTWl4ZWQpLCBFdmVudEVtaXR0ZXIpXG5cbi8qKiBAbGVuZHMgUG9uICovXG5jbGFzcyBQb24gZXh0ZW5kcyBQb25CYXNlIHtcbiAgZ2V0ICQkcG9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHRhc2tzKSB7XG4gICAgc3VwZXIoKVxuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgcy5yZWdpc3RlclRhc2tzKHRhc2tzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBhIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwYXR0ZXJucyAtIE5hbWUgcGF0dGVuKHMpIHRvIHJ1blxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHJ1biAoLi4ucGF0dGVybnMpIHtcbiAgICBjb25zdCBzID0gdGhpc1xuICAgIGlmIChwYXR0ZXJucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHBhdHRlcm5zID0gWyAnKicgXVxuICAgIH1cbiAgICByZXR1cm4gY28oZnVuY3Rpb24gKiAoKSB7XG4gICAgICBsZXQgcmVzdWx0cyA9IHt9XG4gICAgICBmb3IgKGxldCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XG4gICAgICAgIGxldCB0YXNrcyA9IHMudGFza3NXaXRoUGF0dGVybnMoLi4ucGF0dGVybi5zcGxpdCgnLCcpKVxuICAgICAgICAvLyBSdW4gcGFyYWxsZWxcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgT2JqZWN0LmtleXModGFza3MpLm1hcCgodGFza05hbWUpID0+IGNvKGZ1bmN0aW9uICogKCkge1xuICAgICAgICAgICAgbGV0IGN0eCA9IHMubmV3Q29udGV4dCh7XG4gICAgICAgICAgICAgIHRhc2s6IHRhc2tOYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IHsgdGltZXIsIGxvZ2dlciB9ID0gY3R4XG4gICAgICAgICAgICBsb2dnZXIuUFJFRklYID0gYFske3Rhc2tOYW1lfV0gYFxuICAgICAgICAgICAgZm9yIChsZXQgdGFzayBvZiBbXS5jb25jYXQodGFza3NbIHRhc2tOYW1lIF0pKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFzayA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGFzay5kZWZhdWx0IHx8IGAke3Rhc2tOYW1lfS8qYFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFzayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3ViUmVzdWx0cyA9IHlpZWxkIHMucnVuKHRhc2spXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyhzdWJSZXN1bHRzKSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1sgbmFtZSBdID0gWyAuLi4ocmVzdWx0c1sgbmFtZSBdIHx8IFtdKSwgLi4uc3ViUmVzdWx0c1sgbmFtZSBdIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aW1lci50aWNrKFRJQ0tfVEFTSylcbiAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oYFRhc2sgc3RhcnRlZC4uLmApXG4gICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBQcm9taXNlLnJlc29sdmUodGFzayhjdHgpKVxuICAgICAgICAgICAgICByZXN1bHRzWyB0YXNrTmFtZSBdID0gWyAuLi4ocmVzdWx0c1sgdGFza05hbWUgXSB8fCBbXSksIHJlc3VsdCBdXG4gICAgICAgICAgICAgIGxldCB0b29rID0gdGltZXIudGljayhUSUNLX1RBU0spXG4gICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGAuLi5kb25lISAoJHt0b29rfW1zKVxcbmApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJ1bm5lciBmdW5jdGlvbiBib3VuZCB0byB0aGUgaW5zdGFuY2VcbiAgICogQHJldHVybnMge3BvbkJvdW5kfSBCb3VuZCBmdW5jdGlvblxuICAgKi9cbiAgYmluZCAoKSB7XG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBjb25zdCBydW4gPSBzLnJ1bi5iaW5kKHMpXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocnVuLCB7XG4gICAgICAkJHBvbjogdHJ1ZSxcbiAgICAgIGJpbmQ6ICgpID0+IHMuYmluZCgpLFxuICAgICAgcnVuLFxuICAgICAgdGFza3M6IHMudGFza3NcbiAgICB9KVxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb25cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb258dGFza3M+fSB0YXNrc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2Z1bmN0aW9ufSBwb25Cb3VuZFxuICovXG4iXX0=