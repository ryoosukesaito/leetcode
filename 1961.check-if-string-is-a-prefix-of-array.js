/**
 * https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let crrSent = "";

  for (let i = 0; i <= words.length; i++) {
    crrSent += words[i];
    if (crrSent === s) return true;
  }

  return false;
};
