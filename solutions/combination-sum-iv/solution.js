// Problem: Combination Sum IV
// LeetCode: https://leetcode.com/problems/combination-sum-iv/
// Language: javascript
// Runtime: 66 ms
// Memory: 56.5 MB
// Submitted: 2026-01-02

var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let sum = 1; sum <= target; sum++)
        for (let n of nums) {
            dp[sum] += dp[sum - n] ?? 0;
        }

    return dp[target];
};

