// Problem: Reconstruct a 2-Row Binary Matrix
// LeetCode: https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/
// Language: javascript
// Runtime: 164 ms
// Memory: 62.7 MB
// Submitted: 2023-07-17

var reconstructMatrix = function (upper, lower, colsum) {
    let sum = colsum.reduce((sum, x) => sum + x);
    if (sum !== upper + lower) return [];

    let n = colsum.length;
    let a = Array.from({ length: 2 }, (_) => new Array(n).fill(0));

    for (let j = 0; j < n; j++) {
        if (colsum[j] === 2) {
            if (upper && lower) {
                upper--;
                lower--;
                a[0][j] = 1;
                a[1][j] = 1;
            } else {
                return [];
            }
        } else if (colsum[j] === 1) {
            if (upper || lower) {
                if (upper >= lower) {
                    upper--;
                    a[0][j] = 1;
                    a[1][j] = 0;
                } else {
                    lower--;
                    a[1][j] = 1;
                    a[0][j] = 0;
                }
            } else {
                return [];
            }
        }
    }

    return a;
};
