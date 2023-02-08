/**
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
  const sortedNum = arr.sort((a, b) => a - b);

  if (arr.length < 3) {
    return true;
  }

  const numDiff = sortedNum[1] - sortedNum[0];

  for (let i = 0; i < sortedNum.length - 1; i++) {
    if (sortedNum[i + 1] - sortedNum[i] !== numDiff) return false;
  }
  return true;
};
