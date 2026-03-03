// Problem: Rotate String
// LeetCode: https://leetcode.com/problems/rotate-string/
// Language: javascript
// Runtime: 61 ms
// Memory: 41.5 MB
// Submitted: 2023-05-30

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    return (s + s).includes(goal)
};
