//
// https://leetcode.com/problems/add-digits/description/
//
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
//   For example:
//
//   Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
//
//   Follow up:
//   Could you do it without any loop/recursion in O(1) runtime?
//
//   Credits:
//   Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if(num.toString().length <= 1) return num;
  var sum = 0;
  getNum(num);
  function getNum(n) {
    sum = 0;
    var b = n.toString();
    if(b.length > 1) {
      for(var i in b) {
        sum += parseInt(b[i]);
      }
      if(sum.toString().length > 1) {
        getNum(sum);
      }
    }
  }
  return sum;
};