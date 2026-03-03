// Problem: Minimum Score Triangulation of Polygon
// LeetCode: https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.6 MB
// Submitted: 2025-11-17

/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    let n = values.length
    const memo = Array.from({ length: n }, () => Array(n).fill(-1));

    function solve(i, j) {
        if (j - i < 2) return 0;
        if (memo[i][j] !== -1) return memo[i][j];

        let minCost = Infinity
        for (let k = i + 1; k < j; k++) {
            minCost = Math.min(
                minCost,
                solve(i, k) + solve(k, j) + values[i] * values[j] * values[k]
            )
        }

        return (memo[i][j] = minCost);
    }

    return solve(0, n - 1)
};
