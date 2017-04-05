/**
 * Mixin functions
 * @module mixins
 */

'use strict';

var d = function d(module) {
  return module && module.default || module;
};

module.exports = {
  get contextMix() {
    return d(require('./context_mix'));
  },
  get taskMix() {
    return d(require('./task_mix'));
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImQiLCJtb2R1bGUiLCJkZWZhdWx0IiwiZXhwb3J0cyIsImNvbnRleHRNaXgiLCJyZXF1aXJlIiwidGFza01peCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBRUEsSUFBSUEsSUFBSSxTQUFKQSxDQUFJLENBQUNDLE1BQUQ7QUFBQSxTQUFZQSxVQUFVQSxPQUFPQyxPQUFqQixJQUE0QkQsTUFBeEM7QUFBQSxDQUFSOztBQUVBQSxPQUFPRSxPQUFQLEdBQWlCO0FBQ2YsTUFBSUMsVUFBSixHQUFrQjtBQUFFLFdBQU9KLEVBQUVLLFFBQVEsZUFBUixDQUFGLENBQVA7QUFBb0MsR0FEekM7QUFFZixNQUFJQyxPQUFKLEdBQWU7QUFBRSxXQUFPTixFQUFFSyxRQUFRLFlBQVIsQ0FBRixDQUFQO0FBQWlDO0FBRm5DLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWl4aW4gZnVuY3Rpb25zXG4gKiBAbW9kdWxlIG1peGluc1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5sZXQgZCA9IChtb2R1bGUpID0+IG1vZHVsZSAmJiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGVcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCBjb250ZXh0TWl4ICgpIHsgcmV0dXJuIGQocmVxdWlyZSgnLi9jb250ZXh0X21peCcpKSB9LFxuICBnZXQgdGFza01peCAoKSB7IHJldHVybiBkKHJlcXVpcmUoJy4vdGFza19taXgnKSkgfVxufVxuIl19