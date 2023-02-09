/**
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
  const sortedNums = arr.sort((a, b) => a - b);

  if (arr.length < 3) {
    return true;
  }

  const difNums = sortedNums[1] - sortedNums[0];

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i + 1] - sortedNums[i] !== difNums) return false;
  }
  return true;
};
