// Problem: Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
// LeetCode: https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
// Language: javascript
// Runtime: 106 ms
// Memory: 48.7 MB
// Submitted: 2023-07-24

cl = console.log
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {

    let a = [1, 1]

    for (let i = 2; a[a.length - 1] < k; i++) {
        a.push(a[a.length - 1] + a[a.length - 2])
    }

    cl(a)
    let dp = Array.from({ length: a.length })
    function fn(i, k, cc) {
        if (i === -1) return Infinity
        if (dp[i] !== undefined) return dp[i]
        if (k === 0) {
            return cc
        }
        if (k < 0) return Infinity

        let min = Infinity
        min = Math.min(min, fn(i - 1, k - a[i], cc + 1), fn(i - 1, k, cc))
        dp[i] = min
        return min
    }
    return fn(a.length - 1, k, 0)
    // cl(dp)
};
