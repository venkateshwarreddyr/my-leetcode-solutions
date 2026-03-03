// Problem: Toeplitz Matrix
// LeetCode: https://leetcode.com/problems/toeplitz-matrix/
// Language: javascript
// Runtime: 61 ms
// Memory: 44 MB
// Submitted: 2023-07-15

var isToeplitzMatrix = function (g) {
    for (let i = 1; i < g.length; i++) {
        for (let j = 1; j < g[0].length; j++)
            if (g[i][j] !== g[i - 1][j - 1]) {
                return false;
            }
    }
    return true;
};
