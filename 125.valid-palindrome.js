/**
 * https://leetcode.com/problems/valid-palindrome/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const originS = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  const reversedS = originS.split("").reverse().join("");
  return originS === reversedS;
};