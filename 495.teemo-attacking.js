/**
 * https://leetcode.com/problems/teemo-attacking/description/
 */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let countDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    timeSeries[i + 1] - timeSeries[i] < duration
      ? (countDuration += timeSeries[i + 1] - timeSeries[i])
      : (countDuration += duration);
  }

  return countDuration;
};
