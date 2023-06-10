/**
 * https://leetcode.com/problems/majority-element/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const count = {};
  let maxCountNum = 0,
    maxMajority;

  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    count[elem] = (count[elem] ?? 0) + 1;
    if (count[elem] > maxCountNum) {
      maxCountNum = count[elem];
      maxMajority = elem;
    }
  }

  return maxMajority;
};
