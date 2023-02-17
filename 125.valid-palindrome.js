/**
 * https://leetcode.com/problems/valid-palindrome/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const lowercaseChar = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
  const reversedS = lowercaseChar.split("").reverse().join("");
  return lowercaseChar === reversedS;
};