// Problem: Moving Stones Until Consecutive
// LeetCode: https://leetcode.com/problems/moving-stones-until-consecutive/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.4 MB
// Submitted: 2026-01-04

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b)

    if (a + 1 === b && b + 1 === c) return [0, 0]
    if (a + 1 === b) return [1, c - b - 1]
    if (b + 1 === c) return [1, b - a - 1]
    if (a + 2 === b) return [1, c - b]
    if (b + 2 === c) return [1, b - a]

    return [2, c - a - 2]
};
