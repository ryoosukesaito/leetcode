/**
 * https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) > s.charCodeAt(i + 1)) return false;
    if (s[i] !== s[i + 1]) count++;
  }

  return count < 2;
};
