// Problem: Last Moment Before All Ants Fall Out of a Plank
// LeetCode: https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
// Language: javascript
// Runtime: 68 ms
// Memory: 49.4 MB
// Submitted: 2023-11-10

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {

    return Math.max(0, ...left, ...right.map(e => n - e))
};
