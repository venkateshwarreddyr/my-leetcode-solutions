// Problem: Stone Game III
// LeetCode: https://leetcode.com/problems/stone-game-iii/
// Language: javascript
// Runtime: 23 ms
// Memory: 65.7 MB
// Submitted: 2026-01-14

var stoneGameIII = function (stoneValue) {
    const n = stoneValue.length;
    const dp = Array(n + 1); // maxAdvantage difference (curr - oppsite)

    // let currentPlayerAdvantage = Math.max(
    // 	    stonesTakenNow - opponentAdvantageFromRemaining, //
    // );

    // maxAdvantage difference from i
    dp[n] = 0   // no stones → no score for either player

    // 	dp[i] = max(
    // 		stones[i]                                   - dp[i + 1],
    // 		stones[i] + stones[i + 1]                   - dp[i + 2],
    // 		stones[i] + stones[i + 1] + stones[i + 2]   - dp[i + 3],
    // 	);
    // stone value is -eve

    // Build DP from back to front
    for (let i = n - 1; i >= 0; i--) {
        let maxAdvantage = -Infinity;
        let sumOfTakenNums = 0; // take 1, 2 & 3

        // pick 3 from here/i
        for (let j = i; j <= i + 2 && j < n; j++) {
            sumOfTakenNums += stoneValue[j];
            maxAdvantage = Math.max(maxAdvantage, sumOfTakenNums - dp[j + 1]);
        }

        dp[i] = maxAdvantage;
    }

    if (dp[0] > 0) return 'Alice';
    if (dp[0] < 0) return 'Bob';
    return 'Tie';
};

