// Problem: Sum of Good Numbers
// LeetCode: https://leetcode.com/problems/sum-of-good-numbers/
// Language: javascript
// Runtime: 1 ms
// Memory: 51.4 MB
// Submitted: 2025-02-15

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0

    for(let i =0;i<nums.length;i++) {
        if((nums[i - k] ?? 0) < nums[i] && nums[i] > (nums[i + k] ?? 0)) {
            sum += nums[i]
        }
    }

    return sum
};
