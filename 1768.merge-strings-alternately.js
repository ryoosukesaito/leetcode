/**
 * https://leetcode.com/problems/merge-strings-alternately/description/
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let resultArr = Array(word1.length + word2.length);
  let resultPointer = 0;
  let i = 0,
    j = 0;

  while (resultPointer < resultArr.length) {
    if (i < word1.length) {
      resultArr[resultPointer] = word1[i];
      i++;
      resultPointer++;
    }
    if (j < word2.length) {
      resultArr[resultPointer] = word2[j];
      j++;
      resultPointer++;
    }
  }
  return resultArr.toString().replaceAll(",", "");
};
