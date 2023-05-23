/**
 * https://leetcode.com/problems/palindrome-number/description/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reversedX = x.toString().split("").reverse().join("");
  return x===parseInt(reversedX);
};