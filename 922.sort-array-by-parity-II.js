/**
 * https://leetcode.com/problems/sort-array-by-parity-ii/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const oddArr = [],
    evenArr = [],
    result = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? evenArr.push(nums[i]) : oddArr.push(nums[i]);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(evenArr[i]);
    result.push(oddArr[i]);
  }

  console.log(result);
  return result;

  // another way that I tried
  // let evenArr = nums.filter((num) => num % 2 === 0)
  // let odd = 1

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 2 !== 0) {
  //         evenArr.splice(odd, 0, nums[i])
  //         odd += 2

  //     }
  // }

  // return evenArr
};
