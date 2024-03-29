/**
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const dividedString = s.split(" ");
  if (dividedString.length === 1) return dividedString[0].length;

  for (let i = dividedString.length - 1; i >= 0; i--) {
    if (dividedString[i].length !== 0) return dividedString[i].length;
  }

  //the way of using trim
  // return s.trim().split(' ').at(-1).length;
};
