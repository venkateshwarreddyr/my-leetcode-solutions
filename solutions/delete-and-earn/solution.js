// Problem: Delete and Earn
// LeetCode: https://leetcode.com/problems/delete-and-earn/
// Language: javascript
// Runtime: 11 ms
// Memory: 57.5 MB
// Submitted: 2025-12-13

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let ob = {}

    let max = 0
    for (let num of nums) {
        ob[num] = ob[num] ?? 0
        ob[num] += num
        max = Math.max(max, num)
    }

    let dp = new Array(max + 1).fill(0);
    for (let i = 1; i <= max; i++) {
        dp[i] += ((dp[i - 2] ?? 0) + (ob[i] ?? 0))
        dp[i] = Math.max(dp[i], dp[i - 1])
    }

    return dp[max]
};
