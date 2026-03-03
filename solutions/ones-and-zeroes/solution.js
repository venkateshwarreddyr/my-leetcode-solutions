// Problem: Ones and Zeroes
// LeetCode: https://leetcode.com/problems/ones-and-zeroes/
// Language: javascript
// Runtime: 312 ms
// Memory: 113.8 MB
// Submitted: 2025-11-11

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const a = strs.map(s => {
        let c = 0
        for (let e of s) {
            if (e === '0') c++
        }

        return [c, s.length - c]
    })
    a.sort((a, b) => a[0] + a[1] - b[0] - b[1])

    const dp = Array.from(
        { length: a.length },
        () => Array.from({ length: m + 1 },
            () => new Array(n + 1))
    )

    function fn(i, m, n) {
        if (i === a.length) return 0
        if (dp[i][m][n] !== undefined) return dp[i][m][n]
        const [z, o] = a[i]

        let max = -Infinity
        if (m - z >= 0 && n - o >= 0) {
            max = Math.max(
                max,
                1 + fn(i + 1, m - z, n - o),
            )
        }
        max = Math.max(
            max,
            fn(i + 1, m, n),
        )
        dp[i][m][n] = max
        return max
    }

    return fn(0, m, n)
};
