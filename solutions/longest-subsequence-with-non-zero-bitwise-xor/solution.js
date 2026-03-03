// Problem: Longest Subsequence With Non-Zero Bitwise XOR
// LeetCode: https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor/
// Language: javascript
// Runtime: 1 ms
// Memory: 75.7 MB
// Submitted: 2025-10-19

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;

    let nonZeros = true;
    let xorSum = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nonZeros = false;
            xorSum ^= nums[i];
        }
    }

    if (nonZeros) return 0;
    return xorSum !== 0 ? n : n - 1;
};
