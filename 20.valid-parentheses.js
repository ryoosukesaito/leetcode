/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  let stack = [];

  for (const char of s) {
    if (map.has(char)) {
      if (stack === 0) return 0;

      const stackChar = stack.pop();
      if (stackChar !== map.get(char)) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
