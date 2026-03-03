// Problem: Image Smoother
// LeetCode: https://leetcode.com/problems/image-smoother/
// Language: javascript
// Runtime: 127 ms
// Memory: 49 MB
// Submitted: 2023-07-17

var imageSmoother = function (g) {
    let m = g.length
    let n = g[0].length
    let g2 = Array.from({ length: m }, (e) => new Array(n));

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            let s = 0;
            let cc = 0;
            if (i - 1 >= 0) {
                if (j - 1 >= 0) { s += g[i - 1][j - 1] || 0; cc++; }
                s += g[i - 1][j] || 0; cc++;
                if (j + 1 < n) { s += g[i - 1][j + 1] || 0; cc++; }
            }
            if (j - 1 >= 0) { s += g[i][j - 1] || 0; cc++; }
            s += g[i][j] || 0; cc++;
            if (j + 1 < n) { s += g[i][j + 1] || 0; cc++; }

            if (i + 1 < m) {
                if (j - 1 >= 0) { s += g[i + 1][j - 1] || 0; cc++; }
                s += g[i + 1][j] || 0; cc++;
                if (j + 1 < n) { s += g[i + 1][j + 1] || 0; cc++; }
            }
            g2[i][j] = Math.floor(s / cc);
        }

    return g2;
};
