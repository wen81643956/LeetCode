//
// https://leetcode.com/problems/sum-of-two-integers/description/
//
// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example:
//   Given a = 1 and b = 2, return 3.
//
// Credits:
//   Special thanks to @fujiaozhu for adding this problem and creating all test cases.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if(b === 0) return a;
  var sum = a ^ b;
  var carry = (a & b) << 1;
  return getSum(sum, carry);
};