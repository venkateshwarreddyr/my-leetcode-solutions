// Problem: Score After Flipping Matrix
// LeetCode: https://leetcode.com/problems/score-after-flipping-matrix/
// Language: javascript
// Runtime: 67 ms
// Memory: 42.7 MB
// Submitted: 2023-07-18

cl = console.log
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (g) {
    let m = g.length;
    let n = g[0].length;

    function flipRow(i) {
        for (let j = 0; j < n; j++) {
            g[i][j] = 1 - g[i][j]
        }
    }

    function flipCol(j) {
        for (let i = 0; i < m; i++) {
            g[i][j] = 1 - g[i][j]
        }
    }

    function check10(j) {
        let [c0, c1] = [0, 0]
        for (let i = 0; i < m; i++) {
            if (g[i][j]) {
                c1++
            } else {
                c0++
            }
        }

        return [c0, c1]
    }

    let j = 0
    for (let i = 0; i < m; i++) {
        if (g[i][j] === 0) {
            flipRow(i)
        }
    }

    let i = 0
    for (let j = 0; j < n; j++) {
        let [c0, c1] = check10(j)
        if (c0 > c1) {
            flipCol(j)
        }
    }

    return g.reduce((a, c) => parseInt(c.join(""), 2) + a, 0)
};
