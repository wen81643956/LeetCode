//
// https://leetcode.com/problems/max-consecutive-ones/description/
//
// Given a binary array, find the maximum number of consecutive 1s in this array.
//
//   Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//   The maximum number of consecutive 1s is 3.
// Note:
//
//   The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  if(nums.length === 1 && nums[0] === 1) return 1;
  var max = 0, temp = 0;
  nums.forEach(function(val) {
    if(val === 1) {
      temp ++;
    }
    if(val === 0 && temp > max) {
      max = temp;
      temp = 0;
    }
    if(val === 0 && temp <= max) {
      temp = 0;
    }
  });

  return max > temp ? max : temp;
};