/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0 && nums2[idx] !== undefined) {
      nums1[i] = nums2[idx];
      idx++;
    }
  }

  return nums1.sort((a, b) => a - b);
};
