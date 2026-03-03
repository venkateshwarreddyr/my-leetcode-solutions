// Problem: Running Sum of 1d Array
// LeetCode: https://leetcode.com/problems/running-sum-of-1d-array/
// Language: javascript
// Runtime: 58 ms
// Memory: 42.6 MB
// Submitted: 2023-07-05

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i = 1;i<nums.length;i++){
        nums[i] += nums[i-1] 
    }
    return nums;
};
