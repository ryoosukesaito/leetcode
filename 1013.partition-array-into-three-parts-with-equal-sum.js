/**
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const Average = arr.reduce((sum, cur) => sum + cur, 0) / 3;

  let sum = 0,
    count = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === Average) {
      sum = 0;
      count++;
    }
  }

  return count >= 3;
};
