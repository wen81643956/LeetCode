//
// https://leetcode.com/problems/single-number/description/
//
// Given an array of integers, every element appears twice except for one. Find that single one.
//
//   Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(nums.length === 1) return nums[0];
  var extra;
  nums = nums.sort();
  nums.forEach(function(val,idx) {
    if(idx !== 0 && idx !== nums.length - 1) {
      if(val !== nums[idx - 1] && val !== nums[idx + 1]) {
        extra = val;
      }
    }
    if((idx === 0 && val !== nums[idx + 1]) || (idx === nums.length - 1 && val !== nums[idx - 1])) extra = val;
  });

  return extra;
};