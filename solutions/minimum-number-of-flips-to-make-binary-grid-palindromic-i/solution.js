// Problem: Minimum Number of Flips to Make Binary Grid Palindromic I
// LeetCode: https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/
// Language: javascript
// Runtime: 198 ms
// Memory: 87 MB
// Submitted: 2024-08-21

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let cc = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n / 2; j++) {
            if (grid[i][j] !== grid[i][n - j - 1]) {
                cc++
            }
        }
    }

    let cc2 = 0
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m / 2; i++) {
            if (grid[i][j] !== grid[m - i - 1][j]) {
                cc2++
            }
        }
    }

    return Math.min(cc, cc2)
};
