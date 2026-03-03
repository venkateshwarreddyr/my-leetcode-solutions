// Problem: Edit Distance
// LeetCode: https://leetcode.com/problems/edit-distance/
// Language: javascript
// Runtime: 27 ms
// Memory: 62.8 MB
// Submitted: 2025-12-01

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const memo = {};

    function dfs(i, j) {
        if (i === word1.length) return word2.length - j;
        if (j === word2.length) return word1.length - i;
        const key = i + ',' + j;
        if (memo[key] !== undefined) return memo[key];

        if (word1[i] === word2[j]) return (memo[key] = dfs(i + 1, j + 1));

        const insertOp = dfs(i, j + 1);
        const deleteOp = dfs(i + 1, j);
        const replaceOp = dfs(i + 1, j + 1);

        return (memo[key] = 1 + Math.min(insertOp, deleteOp, replaceOp));
    }

    return dfs(0, 0);
};
