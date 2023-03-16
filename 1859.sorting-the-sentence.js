/**
 * https://leetcode.com/problems/sorting-the-sentence/description/
 */

/**
 * @param {string}
 * @return {string}
 */
var sortSentence = function (s) {
  const sArr = s.split(" ");
  sArr.sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)));

  const resultArr = sArr.map((str) => {
    return str.slice(0, -1);
  });

  return resultArr.join(" ");
};
