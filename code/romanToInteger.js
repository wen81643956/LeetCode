//
// https://leetcode.com/problems/roman-to-integer/description/
//
// Roman to Integer
// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var s = s.toUpperCase(), sum = 0, len = s.length;
  var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  for (var i = 0; i < len - 1; i++) {
    if (obj[s[i + 1]] <= obj[s[i]]) {
      sum += obj[s[i]]
    } else {
      sum -= obj[s[i]]
    }
  }
  sum += obj[s[len - 1]]
  return sum;
};
