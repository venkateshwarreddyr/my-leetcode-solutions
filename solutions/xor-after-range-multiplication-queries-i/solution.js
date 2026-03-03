// Problem: XOR After Range Multiplication Queries I
// LeetCode: https://leetcode.com/problems/xor-after-range-multiplication-queries-i/
// Language: javascript
// Runtime: 323 ms
// Memory: 68.8 MB
// Submitted: 2025-11-17

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {

    for (let [l, r, k, v] of queries) {
        for (let idx = l; idx <= r; idx += k) {
            nums[idx] = (nums[idx] * v) % (10**9 + 7)
        }
    }

    return nums.reduce((a, c) => a ^ c, 0)
};
