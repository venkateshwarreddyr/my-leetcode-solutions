// Problem: Maximum Nesting Depth of the Parentheses
// LeetCode: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// Language: javascript
// Runtime: 55 ms
// Memory: 41.6 MB
// Submitted: 2023-05-23

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let cc = 0;
    let max = 0;

    for (let c of s) {
        if (c === '(') {
            cc++;
            max = Math.max(max, cc)
        } else if (c === ')') {
            cc--;
        }
    }

    return max;
};
