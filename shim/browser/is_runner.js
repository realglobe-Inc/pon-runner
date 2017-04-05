/**
 * Detect pon instance or not
 * @function isPon
 * @param {*} obj
 * @returns {boolean}
 */
'use strict';

var Pon = require('./pon');

/** @lends isPon */
function isPon(obj) {
  if (!obj) {
    return false;
  }
  return obj instanceof Pon || obj.$$pon;
}

module.exports = isPon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzX3J1bm5lci5qcyJdLCJuYW1lcyI6WyJQb24iLCJyZXF1aXJlIiwiaXNQb24iLCJvYmoiLCIkJHBvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLE9BQVIsQ0FBWjs7QUFFQTtBQUNBLFNBQVNDLEtBQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ25CLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0Q7QUFDRCxTQUFRQSxlQUFlSCxHQUFoQixJQUF3QkcsSUFBSUMsS0FBbkM7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQkosS0FBakIiLCJmaWxlIjoiaXNfcnVubmVyLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGV0ZWN0IHBvbiBpbnN0YW5jZSBvciBub3RcbiAqIEBmdW5jdGlvbiBpc1BvblxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgUG9uID0gcmVxdWlyZSgnLi9wb24nKVxuXG4vKiogQGxlbmRzIGlzUG9uICovXG5mdW5jdGlvbiBpc1BvbiAob2JqKSB7XG4gIGlmICghb2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIChvYmogaW5zdGFuY2VvZiBQb24pIHx8IG9iai4kJHBvblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUG9uXG4iXX0=