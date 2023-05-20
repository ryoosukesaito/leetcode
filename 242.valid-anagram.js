/**
 * https://leetcode.com/problems/valid-anagram/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sortedStringOfS = s.split("").sort().join("");
  const sortedStringOfT = t.split("").sort().join("");
  return sortedStringOfS === sortedStringOfT;
};
