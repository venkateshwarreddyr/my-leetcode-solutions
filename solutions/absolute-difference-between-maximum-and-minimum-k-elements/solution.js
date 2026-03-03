// Problem: Absolute Difference Between Maximum and Minimum K Elements
// LeetCode: https://leetcode.com/problems/absolute-difference-between-maximum-and-minimum-k-elements/
// Language: javascript
// Runtime: 2 ms
// Memory: 58.3 MB
// Submitted: 2025-12-14

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = 0;
    let n = nums.length
    for (let i = 0; i < k; i++) {
        left += nums[i];
        right += nums[n - i - 1];
    }

        return right - left
};

