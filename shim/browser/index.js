/**
 * Runner for pon
 * @module pon-runner
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = require('./create');
var PonRunner = require('./pon_runner');
var isRunner = require('./is_runner');

var lib = create.bind(undefined);

(0, _assign2.default)(lib, PonRunner, {
  create: create,
  PonRunner: PonRunner,
  isRunner: isRunner
});

module.exports = lib;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcXVpcmUiLCJQb25SdW5uZXIiLCJpc1J1bm5lciIsImxpYiIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUNBLElBQU1FLFdBQVdGLFFBQVEsYUFBUixDQUFqQjs7QUFFQSxJQUFJRyxNQUFNSixPQUFPSyxJQUFQLFdBQVY7O0FBRUEsc0JBQWNELEdBQWQsRUFBbUJGLFNBQW5CLEVBQThCO0FBQzVCRixnQkFENEI7QUFFNUJFLHNCQUY0QjtBQUc1QkM7QUFINEIsQ0FBOUI7O0FBTUFHLE9BQU9DLE9BQVAsR0FBaUJILEdBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUnVubmVyIGZvciBwb25cbiAqIEBtb2R1bGUgcG9uLXJ1bm5lclxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjcmVhdGUgPSByZXF1aXJlKCcuL2NyZWF0ZScpXG5jb25zdCBQb25SdW5uZXIgPSByZXF1aXJlKCcuL3Bvbl9ydW5uZXInKVxuY29uc3QgaXNSdW5uZXIgPSByZXF1aXJlKCcuL2lzX3J1bm5lcicpXG5cbmxldCBsaWIgPSBjcmVhdGUuYmluZCh0aGlzKVxuXG5PYmplY3QuYXNzaWduKGxpYiwgUG9uUnVubmVyLCB7XG4gIGNyZWF0ZSxcbiAgUG9uUnVubmVyLFxuICBpc1J1bm5lclxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBsaWJcbiJdfQ==