//
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
//
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
//   Find all the elements of [1, n] inclusive that do not appear in this array.
//
//   Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

  var now, outArr = [], numsHash = {}, i;
  for(i = 0;i< nums.length; i++) {
    numsHash[nums[i]] = nums[i];
  }

  for(i = 1; i<= nums.length; i++) {
    if(!numsHash[i]) {
      console.log(i);

      outArr.push(i);
    }
  }

  return outArr;
};