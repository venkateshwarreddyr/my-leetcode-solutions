// Problem: Longest Uncommon Subsequence I
// LeetCode: https://leetcode.com/problems/longest-uncommon-subsequence-i/
// Language: javascript
// Runtime: 53 ms
// Memory: 41.5 MB
// Submitted: 2023-05-30

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) return -1
  return Math.max(a.length, b.length)
};
