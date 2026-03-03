// Problem: Maximize Happiness of Selected Children
// LeetCode: https://leetcode.com/problems/maximize-happiness-of-selected-children/
// Language: javascript
// Runtime: 248 ms
// Memory: 67.3 MB
// Submitted: 2024-05-09

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a)

    let an = 0

    for(let i = 0; i<k; i++) {
        an+=(Math.max(happiness[i] - i, 0))
    }

    return an
};
