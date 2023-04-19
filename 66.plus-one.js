/**
 *https://leetcode.com/problems/plus-one/description/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum / 10 === 1) {
      digits[i] = 0;
    } else {
      digits[i] = sum;
      return digits;
    }
  }

  digits.unshift(carry);
  return digits;
};
