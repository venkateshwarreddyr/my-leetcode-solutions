// Problem: Partition Array for Maximum Sum
// LeetCode: https://leetcode.com/problems/partition-array-for-maximum-sum/
// Language: javascript
// Runtime: 85 ms
// Memory: 45.7 MB
// Submitted: 2023-07-23

cl = console.log
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (a, K) {
    let n = a.length;

    let dp = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        let curmax = 0, best = 0
        for (let k = 1; k <= K && i - k >= 0; k++) {
            curmax = Math.max(curmax, a[i - k])
            best = Math.max(best, dp[i - k] + curmax * k)
        }
        dp[i] = best
    }
    cl(dp)
    return dp[n]
};

/**
[1,15, 7, 9,2,5,10]
[15,30,45, 45+9, 45+1 ]

 */
