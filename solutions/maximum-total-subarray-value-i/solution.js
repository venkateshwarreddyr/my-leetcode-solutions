// Problem: Maximum Total Subarray Value I
// LeetCode: https://leetcode.com/problems/maximum-total-subarray-value-i/
// Language: javascript
// Runtime: 3 ms
// Memory: 66.1 MB
// Submitted: 2025-11-29

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function (nums, k) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    return k * (max - min)
}
