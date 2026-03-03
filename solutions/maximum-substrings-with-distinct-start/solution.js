// Problem: Maximum Substrings With Distinct Start
// LeetCode: https://leetcode.com/problems/maximum-substrings-with-distinct-start/
// Language: javascript
// Runtime: 49 ms
// Memory: 64.3 MB
// Submitted: 2025-11-30

/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let set = new Set(s)
    return set.size
};
