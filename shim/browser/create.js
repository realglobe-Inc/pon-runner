/**
 * Create a PonRunner instance
 * @function create
 * @param {...*} args
 * @returns {PonRunner}
 */
'use strict';

var PonRunner = require('./pon_runner');

/** @lends create */
function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(PonRunner, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJQb25SdW5uZXIiLCJyZXF1aXJlIiwiY3JlYXRlIiwiYXJncyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7O0FBRUE7QUFDQSxTQUFTQyxNQUFULEdBQTBCO0FBQUEsb0NBQU5DLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQUN4Qiw0Q0FBV0gsU0FBWCxnQkFBd0JHLElBQXhCO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZSBhIFBvblJ1bm5lciBpbnN0YW5jZVxuICogQGZ1bmN0aW9uIGNyZWF0ZVxuICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gKiBAcmV0dXJucyB7UG9uUnVubmVyfVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgUG9uUnVubmVyID0gcmVxdWlyZSgnLi9wb25fcnVubmVyJylcblxuLyoqIEBsZW5kcyBjcmVhdGUgKi9cbmZ1bmN0aW9uIGNyZWF0ZSAoLi4uYXJncykge1xuICByZXR1cm4gbmV3IFBvblJ1bm5lciguLi5hcmdzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuIl19