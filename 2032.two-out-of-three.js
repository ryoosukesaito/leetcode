/**
 * https://leetcode.com/problems/two-out-of-three/description/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    result.push(...nums2.filter((num) => num === nums1[i]));
  }

  for (let i = 0; i < nums2.length; i++) {
    result.push(...nums3.filter((num) => num === nums2[i]));
  }

  for (let i = 0; i < nums3.length; i++) {
    result.push(...nums1.filter((num) => num === nums3[i]));
  }

  return [...new Set(result)];
};
