// Problem: Best Sightseeing Pair
// LeetCode: https://leetcode.com/problems/best-sightseeing-pair/
// Language: javascript
// Runtime: 10 ms
// Memory: 62.8 MB
// Submitted: 2025-11-14

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    const n = values.length;
    const prefix = Array(n).fill(0);

    prefix[0] = values[0] + 0;
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], values[i] + i);
    }

    let maxScore = 0;
    for (let j = 1; j < n; j++) {
        maxScore = Math.max(maxScore, prefix[j - 1] + values[j] - j);
    }

    return maxScore;
};
