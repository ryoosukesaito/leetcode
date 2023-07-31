/**
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const zeroArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroArr.push(nums.splice(i, 1));
      i--;
    }
  }

  return nums.push(...zeroArr);

  // regarding Solution of leetcode using Two Pointer

  // let i = 0
  // let j = i + 1

  // while (j < nums.length) {
  //     if (nums[i] !== 0) {
  //         i++
  //     } else {
  //         if (nums[j] !== 0) {
  //             [nums[i], nums[j]] = [nums[j], nums[i]]
  //             i++
  //         }
  //     }
  //     j++
  // }
};
