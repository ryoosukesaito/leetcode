/**
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
 */

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let OriginNum = original;
  while (nums.some((num) => num === OriginNum)) {
    OriginNum = OriginNum * 2;
  }

  return OriginNum;
};
