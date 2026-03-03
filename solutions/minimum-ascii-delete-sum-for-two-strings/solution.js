// Problem: Minimum ASCII Delete Sum for Two Strings
// LeetCode: https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
// Language: javascript
// Runtime: 60 ms
// Memory: 62.4 MB
// Submitted: 2026-01-10

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    let n1 = s1.length
    let n2 = s2.length

    let dp = Array.from({ length: n1 }, () => new Array(n2))

    function fn(i, j) {

        if (i >= n1 || j >= n2) {
            if (i < n1) {
                let sm = 0
                while (i < n1) {
                    sm += s1[i].charCodeAt(0)
                    i++
                }
                return sm
            } else {
                let sm = 0
                while (j < n2) {
                    sm += s2[j].charCodeAt(0)
                    j++
                }
                return sm
            }
        }
        if (dp[i][j] !== undefined) return dp[i][j]

        if (s1[i] === s2[j]) {
            dp[i][j] = fn(i + 1, j + 1)
        } else {
            dp[i][j] = Math.min(
                s1[i].charCodeAt(0) + fn(i + 1, j),
                s2[j].charCodeAt(0) + fn(i, j + 1),
            )
        }
        return dp[i][j];
    }

    return fn(0, 0)
};
