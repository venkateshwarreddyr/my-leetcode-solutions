// Problem: Count Number of Teams
// LeetCode: https://leetcode.com/problems/count-number-of-teams/
// Language: javascript
// Runtime: 1426 ms
// Memory: 60.3 MB
// Submitted: 2024-07-29

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let n = rating.length
    let dp = {}
    function dfs(pos, cc, ele) {
        let x = pos + "," + cc
        if (cc === 3) {
            dp[x] = 1
            return 1;
        }
        if (x in dp) return dp[x]

        let sum = 0
        for (let i = pos; i < n; i++) {
            if (ele && ele < rating[i]) continue;
            sum += dfs(i + 1, cc + 1, rating[i])
        }
        dp[x] = sum
        return sum
    }

    let an = 0
    an += dfs(0, 0)
    dp = {}
    rating.reverse()
    an += dfs(0, 0)

    return an
};
