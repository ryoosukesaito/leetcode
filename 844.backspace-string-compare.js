/**
 * https://leetcode.com/problems/backspace-string-compare/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sArr = [];
  const tArr = [];

  for (const letterS of s) {
    letterS === "#" ? sArr.pop() : sArr.push(letterS);
  }
  for (const letterT of t) {
    letterT === "#" ? tArr.pop() : tArr.push(letterT);
  }

  return sArr.toString() === tArr.toString();
};
