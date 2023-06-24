/**
 * https://leetcode.com/problems/is-subsequence/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sCounter = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sCounter] === t[i]) sCounter++;
  }

  return sCounter === s.length;
};
