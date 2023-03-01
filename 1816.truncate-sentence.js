/**
 * https://leetcode.com/problems/truncate-sentence/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
  const wordArr = s.split(" ");
  return wordArr.slice(0,k).toString().replaceAll(',', ' ');
};