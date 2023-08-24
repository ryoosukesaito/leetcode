/**
 * https://leetcode.com/problems/array-partition/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let res = 0;

  nums
    .sort((a, b) => a - b)
    .map((num, idx) => {
      if (idx % 2 === 0) res += num;
    });

  return res;
};
