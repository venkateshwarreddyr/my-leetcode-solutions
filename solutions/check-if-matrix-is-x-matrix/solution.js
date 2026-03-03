// Problem: Check if Matrix Is X-Matrix
// LeetCode: https://leetcode.com/problems/check-if-matrix-is-x-matrix/
// Language: javascript
// Runtime: 70 ms
// Memory: 44.9 MB
// Submitted: 2023-07-16

var checkXMatrix = function (g) {
    let n = g.length;
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            if (i === j || i === (n - 1 - j)) {
                if (!g[i][j]) return false;
            } else {
                if (g[i][j]) return false;
            }
    return true;
};
