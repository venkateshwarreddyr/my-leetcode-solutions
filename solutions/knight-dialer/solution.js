// Problem: Knight Dialer
// LeetCode: https://leetcode.com/problems/knight-dialer/
// Language: javascript
// Runtime: 65 ms
// Memory: 60.4 MB
// Submitted: 2025-11-25

/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    const MOD = 1e9 + 7;

    let moves = {
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
        0: [4, 6]
    }
    let ob2
    let mod = 10 ** 9 + 7
    let ans = 0
    let dp = new Array(10).fill(1);

    for (let i = 2; i <= n; i++) {
        const next = new Array(10).fill(0);
        for (let i = 0; i <= 9; i++) {
            for (let move of moves[i]) {
                next[move] = (next[move] + dp[i]) % MOD;
            }
        }
        dp = next;
    }

    return dp.reduce((a, b) => (a + b) % MOD, 0);
};
