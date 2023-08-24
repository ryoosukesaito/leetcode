/**
 * https://leetcode.com/problems/shortest-distance-to-a-character/description/
 */

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    let IndexOfClosestChar = s.length;
    if (s[i] === c) {
      res.push(0);
    } else {
      for (let j = 0; j < s.length; j++) {
        const Distance = Math.abs(i - j);
        if (s[j] === c && IndexOfClosestChar > Distance)
          IndexOfClosestChar = Distance;
      }
      res.push(IndexOfClosestChar);
    }
  }
  return res;
};
