/**
 * Create a PonTimer instance
 * @function create
 * @param {...*} args
 * @returns {PonTimer}
 */
'use strict';

var PonTimer = require('./pon_timer');

/** @lends create */
function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(PonTimer, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJQb25UaW1lciIsInJlcXVpcmUiLCJjcmVhdGUiLCJhcmdzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjs7QUFFQTtBQUNBLFNBQVNDLE1BQVQsR0FBMEI7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ3hCLDRDQUFXSCxRQUFYLGdCQUF1QkcsSUFBdkI7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlIGEgUG9uVGltZXIgaW5zdGFuY2VcbiAqIEBmdW5jdGlvbiBjcmVhdGVcbiAqIEBwYXJhbSB7Li4uKn0gYXJnc1xuICogQHJldHVybnMge1BvblRpbWVyfVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgUG9uVGltZXIgPSByZXF1aXJlKCcuL3Bvbl90aW1lcicpXG5cbi8qKiBAbGVuZHMgY3JlYXRlICovXG5mdW5jdGlvbiBjcmVhdGUgKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQb25UaW1lciguLi5hcmdzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuIl19