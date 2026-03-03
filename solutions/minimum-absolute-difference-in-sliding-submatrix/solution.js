// Problem: Minimum Absolute Difference in Sliding Submatrix
// LeetCode: https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix/
// Language: javascript
// Runtime: 33 ms
// Memory: 60.8 MB
// Submitted: 2025-11-03

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function (g, k) {
    let m = g.length;
    let n = g[0].length;
    let rows = []
    for (let r = 0; r <= m - k; r++) {
        let cols = []
        for (let c = 0; c <= n - k; c++) {
            const distinctValues = new Set()
            for (let i = r; i < r + k; i++) {
                for (let j = c; j < c + k; j++) {
                    distinctValues.add(g[i][j])
                }
            }

            const sorted = [...distinctValues].sort((a, b) => a - b)
            let min = Infinity
            for (let i = 1; i < sorted.length; i++) {
                min = Math.min(min, sorted[i] - sorted[i - 1])
            }

            cols.push(min === Infinity ? 0 : min)
        }
        rows.push(cols)
    }

    return rows
};
