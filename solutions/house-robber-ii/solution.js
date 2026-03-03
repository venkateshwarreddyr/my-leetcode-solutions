// Problem: House Robber II
// LeetCode: https://leetcode.com/problems/house-robber-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 52.8 MB
// Submitted: 2025-07-31

var rob1 = function (nums) {
    let n = nums.length

    let dp = new Array(n).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1], nums[0])
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};

var rob = function (nums) {
    let n = nums.length
    if(n === 1) return nums[0]
    return Math.max(rob1(nums.slice(1)), rob1(nums.slice(0, n - 1)))
};
