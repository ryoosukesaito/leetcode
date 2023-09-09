/**
 * https://leetcode.com/problems/set-mismatch/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let errNum = 0,
    missNum = 0;

  const CountMap = nums.reduce((map, num) => {
    if (map.has(num)) errNum = num;
    return map.set(num, (map.get(num) || 0) + 1);
  }, new Map());

  for (let i = 0; i < nums.length; i++) {
    if (!CountMap.has(i + 1)) missNum = i + 1;
  }

  return [errNum, missNum];
};
