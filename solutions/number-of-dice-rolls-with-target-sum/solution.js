// Problem: Number of Dice Rolls With Target Sum
// LeetCode: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// Language: javascript
// Runtime: 26 ms
// Memory: 56.2 MB
// Submitted: 2025-11-21

var numRollsToTarget = function (n, k, target) {
    const MOD = 10 ** 9 + 7;

    // dp[i][t] = number of ways using i dice to reach sum t
    const dp = Array.from({ length: n + 1 }, () =>
        Array(target + 1).fill(0)
    );

    dp[0][0] = 1; // base case

    for (let dice = 1; dice <= n; dice++) {
        for (let t = 1; t <= target; t++) {
            let ways = 0;

            // Try all faces 1...k
            for (let face = 1; face <= k; face++) {
                if (t - face < 0) break; // optimization

                ways += dp[dice - 1][t - face];
                ways %= MOD;
            }

            dp[dice][t] = ways;
        }
    }

    return dp[n][target];
};

