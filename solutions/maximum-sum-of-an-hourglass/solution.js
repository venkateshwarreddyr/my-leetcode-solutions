// Problem: Maximum Sum of an Hourglass
// LeetCode: https://leetcode.com/problems/maximum-sum-of-an-hourglass/
// Language: javascript
// Runtime: 73 ms
// Memory: 45.2 MB
// Submitted: 2023-07-15

var maxSum = function (g) {
    let m = g.length
    let n = g[0].length

    let max = -1;
    for (let i = 1; i < m - 1; i++)
        for (let j = 1; j < n - 1; j++) {
            let sum = g[i - 1][j - 1] + g[i - 1][j] + g[i - 1][j + 1] +
                g[i][j] +
                g[i + 1][j - 1] + g[i + 1][j] + g[i + 1][j + 1]
            max = Math.max(max, sum)
        }

    return max;
};
