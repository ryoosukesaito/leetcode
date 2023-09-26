/**
 * https://leetcode.com/problems/most-frequent-even-element/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  if (!nums.some((num) => num % 2 === 0)) return -1;

  const evenArr = nums.filter((num) => num % 2 === 0);
  const elementCount = new Map();
  evenArr.forEach((elem) => {
    elementCount.set(elem, (elementCount.get(elem) || 0) + 1);
  });

  let mostFrequentCounter = 0;
  for (const [elem, count] of elementCount.entries()) {
    if (count > mostFrequentCounter) {
      mostFrequentCounter = count;
    }
  }

  const arrForComparingNums = [];
  const filteredMostFrequentNumArr = [...elementCount].filter(
    (elem) => elem[1] === mostFrequentCounter
  );
  if (filteredMostFrequentNumArr.length === 1) {
    return filteredMostFrequentNumArr[0][0];
  } else {
    for (let i = 0; i < filteredMostFrequentNumArr.length; i++) {
      arrForComparingNums.push(filteredMostFrequentNumArr[i][0]);
    }
  }
  return Math.min(...arrForComparingNums);
};
