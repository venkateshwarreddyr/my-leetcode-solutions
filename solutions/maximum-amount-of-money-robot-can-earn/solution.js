// Problem: Maximum Amount of Money Robot Can Earn
// LeetCode: https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn/
// Language: javascript
// Runtime: 723 ms
// Memory: 111 MB
// Submitted: 2026-01-08

var maximumAmount = function (coins) {
    const m = coins.length;
    const n = coins[0].length;

    // dp[row][col][used] = max money we can have at this state
    // row, col = position in grid
    // used = how many neutralizations used (0, 1, or 2)
    // 		start with impossible -ve amounts states (-Infinity)
    const dp = Array.from({ length: m },
        () => Array.from({ length: n }, () => new Array(3).fill(-Infinity)));

    // starting cell (top-left corner) - fill no neutralization used
    dp[0][0][0] = coins[0][0];
    // if starting cell is -ve, neutralize it => take 0, fill 1 neutralization used
    if (coins[0][0] < 0) {
        dp[0][0][1] = 0;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // skip the start cell because we already handled it
            if (i === 0 && j === 0) continue;

            // money (or loss) at current cell
            const amount = coins[i][j];

            // try all possible neutralization counts (0, 1, 2)
            for (let used = 0; used <= 2; used++) {
                // best money we can come with  from the left, top cell
                let prevSum = Math.max(
                    dp[i][j - 1]?.[used] ?? -Infinity,
                    dp[i - 1]?.[j]?.[used] ?? -Infinity
                );

                // 1 take the cell value (even if negative)
                dp[i][j][used] = Math.max(dp[i][j][used], prevSum + amount);

                // 2 if val is negative,  neutralize this cell if possible (used is not 2)
                if (amount < 0) {
                    if (used < 2) {
                        // neutralize  => don't take amount, 'used' count++
                        dp[i][j][used + 1] = Math.max(dp[i][j][used + 1], prevSum + 0);
                    }
                }
            }
        }
    }

    // answer is the best money at bottom-right cell, using 0, 1, or 2 neutralizations
    return Math.max(
        dp[m - 1][n - 1][0], // no neutralization used
        dp[m - 1][n - 1][1], // used 1 neutralization
        dp[m - 1][n - 1][2], // used 2 neutralizations
    );
};

