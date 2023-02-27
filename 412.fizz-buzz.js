/**
 * https://leetcode.com/problems/fizz-buzz/description/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const resultArr = [];
  const numsArr = [];

  for (let i = 1; i <= n; i++) {
    numsArr.push(i);
  }
  numsArr.map((num) => {
    return num % 15 === 0
      ? resultArr.push((num = "FizzBuzz"))
      : num % 5 === 0
      ? resultArr.push((num = "Buzz"))
      : num % 3 === 0
      ? resultArr.push((num = "Fizz"))
      : resultArr.push(num.toString());
  });
  return resultArr;
};
