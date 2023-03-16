/**
 * https://leetcode.com/problems/left-and-right-sum-differences/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  if (nums.length === 1) return [0];

  const leftArr = [0]; //Value doesn't exist before first value
  const rightArr = [];
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    const leftTargetArr = nums.slice(0, i);
    const rightTargetArr = nums.slice(i);

    leftArr.push(leftTargetArr.reduce((acc, curr) => acc + curr, 0));
    rightArr.push(rightTargetArr.reduce((acc, curr) => acc + curr, 0));
  }
  rightArr.push(0); //Value doesn't exist after last value.

  for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftArr[i] - rightArr[i]));
  }
  return result;
};
