/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  return deleteCommonNum(nums1, nums2);
};

function deleteCommonNum(arr1, arr2) {
  const Arr1 = [...new Set(arr1)].filter((num) => !arr2.includes(num));
  const Arr2 = [...new Set(arr2)].filter((num) => !arr1.includes(num));
  return [Arr1, Arr2];
}
