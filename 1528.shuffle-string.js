/**
 * https://leetcode.com/problems/shuffle-string/description/
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const strToArr = s.split("");
  const concatArr = [];
  let sortedArr = [];

  strToArr.forEach((str, idx) => {
    const index = indices[idx];
    concatArr.push({ key: index, str: str });
  });

  for (let i = 0; i < concatArr.length; i++) {
    concatArr.sort((a, b) => {
      return a.key - b.key;
    });
    sortedArr.push(concatArr[i].str);
  }
  return sortedArr.toString().replaceAll(",", "");
};
