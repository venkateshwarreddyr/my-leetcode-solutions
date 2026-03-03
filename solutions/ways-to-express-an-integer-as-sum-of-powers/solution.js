// Problem: Ways to Express an Integer as Sum of Powers
// LeetCode: https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
// Language: javascript
// Runtime: 691 ms
// Memory: 72.9 MB
// Submitted: 2023-07-22

cl = console.log
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

var numberOfWays = function (n, x) {
    let mod = 10 ** 9 + 7
    let dp = Array.from({ length: 301 }, () => new Array(301).fill(-1))
    function bt(base, n) {
        if (n < 0) return 0;
        if (dp[base][n] != -1) return dp[base][n];
        let val = base ** x
        if (val === n) return 1
        if (val > n) return 0

        let ans = 0
        ans += bt(base + 1, n) % mod
        ans += bt(base + 1, n - val) % mod
        dp[base][n] = ans
        return ans

    }


    return bt(1, n) % mod
};

