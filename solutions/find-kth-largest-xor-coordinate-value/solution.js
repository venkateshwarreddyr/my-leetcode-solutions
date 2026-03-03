// Problem: Find Kth Largest XOR Coordinate Value
// LeetCode: https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/
// Language: javascript
// Runtime: 710 ms
// Memory: 118.8 MB
// Submitted: 2023-07-16


var kthLargestValue = function (g, k) {
    let m = g.length;
    let n = g[0].length;

    let an = [];
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {

            if (i === 0 && j === 0) {
            } else {
                g[i][j] =
                    g[i][j] ^
                    (g[i - 1]?.[j] || 0) ^
                    (g[i][j - 1] || 0) ^
                    (g[i - 1]?.[j - 1] || 0);
            }

            an.push(g[i][j]);
        }

    an.sort((a, b) => b - a);
    return an[k - 1] || 0;
};
