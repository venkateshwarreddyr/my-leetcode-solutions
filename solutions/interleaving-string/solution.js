// Problem: Interleaving String
// LeetCode: https://leetcode.com/problems/interleaving-string/
// Language: javascript
// Runtime: 56 ms
// Memory: 58.9 MB
// Submitted: 2025-11-29

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false
    let memo = {}
    function dfs(i, j, k) {
        if (i === s1.length && j === s2.length && k === s3.length) return true

        if (i > s1.length || j > s2.length || k > s3.length) return false
        let key = i + ',' + j + ',' + k
        if (memo[key] !== undefined) return memo[key]

        if (s1[i] === s3[k] && s2[j] === s3[k]) {
            return memo[key] = dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1)
        } else if (s1[i] === s3[k]) {
            return memo[key] = dfs(i + 1, j, k + 1)
        } else if (s2[j] === s3[k]) {
            return memo[key] = dfs(i, j + 1, k + 1)
        }

        return memo[key] = false
    }

    return dfs(0, 0, 0)
};
