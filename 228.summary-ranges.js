/**
 * https://leetcode.com/problems/summary-ranges/description/
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  RangeArrFunc(nums).map((num, idx) => {
    num[0] === num[1]
      ? result.push(num[0].toString())
      : result.push(num.join("->"));
  });
  return result;
};

function RangeArrFunc(arrs) {
  const arrangedArr = [];
  let initialRange = arrs[0];

  for (let i = 1; i <= arrs.length; i++) {
    if (arrs[i - 1] + 1 !== arrs[i]) {
      arrangedArr.push([initialRange, arrs[i - 1]]);
      initialRange = arrs[i];
    }
  }

  return arrangedArr;
}

//  according to Solution
// var summaryRanges = function (nums) {
//     let l = 0, r = 0; result = []

//     while (r < nums.length) {
//         if (nums[r] + 1 === nums[r + 1]) r++
//         else{
//             if(l === r) result.push(`${nums[l]}`)
//             else result.push(`${nums[l]}->${nums[r]}`)
//             l = ++r
//         }
//     }

//     return result
// }
