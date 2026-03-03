// Problem: Maximum Difference Between Adjacent Elements in a Circular Array
// LeetCode: https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/
// Language: javascript
// Runtime: 1 ms
// Memory: 52.3 MB
// Submitted: 2025-01-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(a) {
    let maxDiff = 0
    let n = a.length
    for(let i = 0; i<n; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(a[i] - a[(i + 1)%n]))
    }

    return maxDiff
};
