// Problem: Longest Fibonacci Subarray
// LeetCode: https://leetcode.com/problems/longest-fibonacci-subarray/
// Language: javascript
// Runtime: 2 ms
// Memory: 67.2 MB
// Submitted: 2025-10-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    // nums.sort((a, b) => a - b)
    let count = 2
    let max = count
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + (nums[i - 2] ?? 0)) {
            count++
            max = Math.max(count, max)
        } else {
            count = 2
        }
    }

    return max
};
