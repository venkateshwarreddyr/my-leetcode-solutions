// Problem: Maximum Product Difference Between Two Pairs
// LeetCode: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
// Language: javascript
// Runtime: 120 ms
// Memory: 41.4 MB
// Submitted: 2021-06-27

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b) => (b-a));
    return ((nums[0]*nums[1])-(nums[nums.length-1]*nums[nums.length-2]))
};
