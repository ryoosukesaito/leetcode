/**
 * https://leetcode.com/problems/binary-gap/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let binary = n.toString(2);

  let result = 0;
  let benchMark = -1;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      let dif = 0;
      if (benchMark < 0) {
        benchMark = i;
      } else {
        dif = i - benchMark;
        result = Math.max(result, dif);
        benchMark = i;
      }
    }
  }

  return result;
};
