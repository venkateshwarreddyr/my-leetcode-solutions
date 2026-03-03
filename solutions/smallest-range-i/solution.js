// Problem: Smallest Range I
// LeetCode: https://leetcode.com/problems/smallest-range-i/
// Language: javascript
// Runtime: 61 ms
// Memory: 43.9 MB
// Submitted: 2023-05-25

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let n = nums.length
    let min = Math.min(...nums)
    let max = Math.max(...nums)

    let num = max - min

    return Math.max(0, num - 2 * k)
};
