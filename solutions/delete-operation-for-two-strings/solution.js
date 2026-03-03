// Problem: Delete Operation for Two Strings
// LeetCode: https://leetcode.com/problems/delete-operation-for-two-strings/
// Language: javascript
// Runtime: 22 ms
// Memory: 59 MB
// Submitted: 2025-11-08

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (a, b) {
    let memo = Array.from({ length: a.length }, () => new Array(b.length))
    function fn(i, j) {
        if (i >= a.length) return b.length - j
        if (j >= b.length) return a.length - i
        if(memo[i][j] !== undefined) return memo[i][j]
        if (a[i] === b[j]) {
            return fn(i + 1, j + 1)
        }

        let min = Infinity

        min = Math.min(min, 1 + fn(i, j + 1))
        min = Math.min(min, 1 + fn(i + 1, j))
        min = Math.min(min, 2 + fn(i + 1, j + 1))
        memo[i][j] = min
        return min
    }

    return fn(0, 0)
};

/**
abc
adc


 */
