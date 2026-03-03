// Problem: Count Odd Numbers in an Interval Range
// LeetCode: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
// Language: javascript
// Runtime: 55 ms
// Memory: 54.3 MB
// Submitted: 2025-12-07

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {

    if (low % 2 === 1 && high % 2 === 1) {
        return 1 + (high - low) / 2
    }

    return Math.ceil((high - low) / 2)
};
