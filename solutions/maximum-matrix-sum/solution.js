// Problem: Maximum Matrix Sum
// LeetCode: https://leetcode.com/problems/maximum-matrix-sum/
// Language: javascript
// Runtime: 7 ms
// Memory: 64.2 MB
// Submitted: 2026-01-05

var maxMatrixSum = function (g) {
    let n = g.length;

    let sum = 0;

    let min = Infinity;
    let countOfNegative = 0;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
            sum += Math.abs(g[i][j]);
            min = Math.min(min, Math.abs(g[i][j]));
            if (g[i][j] < 0)
                countOfNegative++;
        }

    if (countOfNegative % 2 === 1) {
        sum += 2 * -min;
    }

    return sum;
};
