/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    let char = firstStr[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return result;
      }
    }
    result += char;
  }
  return result;
};
