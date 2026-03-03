// Problem: Maximum Length of Semi-Decreasing Subarrays
// LeetCode: https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/
// Language: javascript
// Runtime: 155 ms
// Memory: 60.7 MB
// Submitted: 2024-05-06

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrayLength = function(nums) {
    max = 0
    for (let i = 0; i < nums.length; i++) {
        right = nums.length - 1
        if(nums[i] <= nums[right]){
            while(nums[i] <= nums[right]){
                right--
            }
        }
        max = Math.max(max, right - i + 1)
    }
    return max
};
