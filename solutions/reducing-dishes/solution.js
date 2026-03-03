// Problem: Reducing Dishes
// LeetCode: https://leetcode.com/problems/reducing-dishes/
// Language: javascript
// Runtime: 81 ms
// Memory: 48.4 MB
// Submitted: 2023-07-21

cl = console.log
var maxSatisfaction = function (a) {
    let n = a.length
    a.sort((a, b) => a - b)

    let dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))

    for (let index = n - 1; index > -1; index--) {
        for (let time = index; time > -1; time--) {

            dp[index][time] = Math.max(
                (time + 1) * a[index] + dp[index + 1][time + 1],
                dp[index + 1][time],
            )
        }
    }

    return dp[0][0]
};
