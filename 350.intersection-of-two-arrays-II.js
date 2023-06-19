/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};
  const result = [];

  for (const num of nums1) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  for (const num of nums2) {
    if (map[num]) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};
