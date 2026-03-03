// Problem: Count Ways To Build Good Strings
// LeetCode: https://leetcode.com/problems/count-ways-to-build-good-strings/
// Language: javascript
// Runtime: 87 ms
// Memory: 81.2 MB
// Submitted: 2025-12-08

let MOD = 10 ** 9 + 7
var countGoodStrings = function (low, high, zero, one) {
    let ans = 0
    let memo = new Map()
    function dfs(len) {
        if (len > high) return 0
        if (memo.has(len)) return memo.get(len)
        let count = len >= low ? 1 : 0
        memo.set(len, (count + dfs(len + zero) + dfs(len + one)) % MOD)
        return memo.get(len)
    }

    return dfs(0)
};
