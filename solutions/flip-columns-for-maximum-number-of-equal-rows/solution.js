// Problem: Flip Columns For Maximum Number of Equal Rows
// LeetCode: https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/
// Language: javascript
// Runtime: 155 ms
// Memory: 52.4 MB
// Submitted: 2023-07-16

var maxEqualRowsAfterFlips = function (g) {
    const m = g.length

    let ob = {}
    for (let i = 0; i < m; i++) {
        if (g[i][0]) g[i] = g[i].map((e) => 1 - e)
        let srow = g[i].join("")
        ob[srow] = (ob[srow] || 0) + 1
    }

    let maxf = 0
    for (let srow in ob) {
        maxf = Math.max(maxf, ob[srow])
    }
    return maxf
};
