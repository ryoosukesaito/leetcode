/**
 * https://leetcode.com/problems/sort-array-by-parity/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const evenArr = nums.filter((num) => num % 2 === 0);
  const oddArr = nums.filter((num) => num % 2 !== 0);

  return evenArr.concat(oddArr);
};
