// Problem: House Robber
// LeetCode: https://leetcode.com/problems/house-robber/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.3 MB
// Submitted: 2025-07-31

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length

    let dp = new Array(n).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1], nums[0])
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};
