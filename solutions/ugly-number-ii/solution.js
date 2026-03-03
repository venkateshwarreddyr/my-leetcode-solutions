// Problem: Ugly Number II
// LeetCode: https://leetcode.com/problems/ugly-number-ii/
// Language: javascript
// Runtime: 79 ms
// Memory: 45 MB
// Submitted: 2023-07-14

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {

    let dp = [1]
    let p0 = 0
    let p1 = 0
    let p2 = 0

    for (let i = 1; i < n; i++) {
        let a = dp[p0] * 2
        let b = dp[p1] * 3
        let c = dp[p2] * 5

        dp[i] = Math.min(a, b, c)
        if (dp[i] === a) p0++
        if (dp[i] === b) p1++
        if (dp[i] === c) p2++
    }

    return dp[n - 1]
};
