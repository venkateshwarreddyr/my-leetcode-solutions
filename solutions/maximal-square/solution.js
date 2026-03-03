// Problem: Maximal Square
// LeetCode: https://leetcode.com/problems/maximal-square/
// Language: javascript
// Runtime: 91 ms
// Memory: 46.5 MB
// Submitted: 2023-07-17

var maximalSquare = function (g) {
    // similar to countSquares
    let m = g.length;
    let n = g[0].length;

    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] === "0") {
                g[i][j] = 0;
            } else if (i === 0 || j == 0) {
                g[i][j] = 1;
            } else {
                g[i][j] =
                    1 +
                    Math.min(
                        g[i][j - 1], //         left
                        g[i - 1][j - 1], // top-left
                        g[i - 1][j] //      top
                    );
            }
            max = Math.max(max, g[i][j]);
        }
    }
    return max * max;
}
