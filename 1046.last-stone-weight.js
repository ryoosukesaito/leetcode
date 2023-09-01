/**
 *
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones;
  const SortedArr = [...stones].sort((a, b) => a - b);

  while (SortedArr.length >= 2) {
    const num1 = SortedArr.pop();
    const num2 = SortedArr.pop();

    if (num1 != num2) SortedArr.push(num1 - num2);

    SortedArr.sort((a, b) => a - b);
  }

  return SortedArr;
};
