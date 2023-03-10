/**
 * https://leetcode.com/problems/flipping-an-image/description/
 */

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const resultArr = [];
  const parentArr = [];

  for (let i = 0; i < image.length; i++) {
    parentArr.push(image[i].reverse());
    const childArr = [];

    for (let j = 0; j < parentArr[i].length; j++) {
      childArr.push(parentArr[i][j] === 0 ? 1 : 0);
    }
    resultArr.push(childArr);
  }
  return resultArr;
};
