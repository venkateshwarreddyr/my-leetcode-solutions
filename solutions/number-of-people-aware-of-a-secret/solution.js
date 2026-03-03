// Problem: Number of People Aware of a Secret
// LeetCode: https://leetcode.com/problems/number-of-people-aware-of-a-secret/
// Language: javascript
// Runtime: 3 ms
// Memory: 54.7 MB
// Submitted: 2025-12-06

/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1e9 + 7;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;

    let share = 0; // total number of people who can share the secret on day i

    for (let day = 2; day <= n; day++) {
        // people start sharing after `delay` days
        // and stop after `forget` days

        // Add people who now start sharing
        if (day - delay >= 1) {
            share = (share + dp[day - delay]) % MOD;
        }

        // Remove people who forget today (they can't share anymore)
        if (day - forget >= 1) {
            share = (share - dp[day - forget] + MOD) % MOD;
        }

        // new people who learn today = number of sharers
        dp[day] = share;
    }

    // Sum of all people who still remember the secret by day n
    let result = 0;
    for (let i = n - forget + 1; i <= n; i++) {
        if (i > 0) result = (result + dp[i]) % MOD;
    }

    return result;
};
