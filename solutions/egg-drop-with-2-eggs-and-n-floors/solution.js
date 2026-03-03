// Problem: Egg Drop With 2 Eggs and N Floors
// LeetCode: https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/
// Language: javascript
// Runtime: 383 ms
// Memory: 44.8 MB
// Submitted: 2023-07-24

var twoEggDrop = function (n) {

    let dp = Array.from({ length: 3 }, () => new Array(n + 1))

    function fn(n, eggs) {
        if (dp[eggs][n] !== undefined) return dp[eggs][n]
        if (n <= 1) return n
        if (eggs === 1) return n

        let min = Infinity
        for (let i = 1; i < n; i++) {
            min = Math.min(min, Math.max(fn(n - i, eggs), fn(i - 1, eggs - 1)) + 1)
        }
        dp[eggs][n] = min
        return min
    }

    return fn(n, 2)
};
