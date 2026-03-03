// Problem: Maximize the Profit as the Salesman
// LeetCode: https://leetcode.com/problems/maximize-the-profit-as-the-salesman/
// Language: javascript
// Runtime: 199 ms
// Memory: 102.1 MB
// Submitted: 2026-01-28

var maximizeTheProfit = function (n, offers) {
    let o = {}
    for (let [s, e, g] of offers) {
        o[s] = o[s] || []
        o[s].push([s, e, g])
    }
 
    let dp = new Array(n)
 
    function dfs(s) {
        if (s === n) return 0
        if (dp[s] !== undefined) return dp[s]
 
        let max = -Infinity
        for (let [, e, g] of o[s] || []) {
            max = Math.max(max, g + dfs(e + 1))
        }
 
        max = Math.max(max, dfs(s + 1)); // skip this house
        return dp[s] = max
    }
 
    return dfs(0)
};
