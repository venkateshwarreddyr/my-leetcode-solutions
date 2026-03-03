// Problem: Matrix Block Sum
// LeetCode: https://leetcode.com/problems/matrix-block-sum/
// Language: javascript
// Runtime: 83 ms
// Memory: 44.8 MB
// Submitted: 2023-07-15

cl = console.log
var matrixBlockSum = function (M, K) {
    let m = M.length;
    let n = M[0].length;
    let memo = Array.from({ length: m }, () => new Array(n));

    for (let i = 0; i < M.length; i++) {
        let prefixSum = 0;
        for (let j = 0; j < M[i].length; j++) {
            prefixSum += M[i][j];
            memo[i][j] = prefixSum;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = i - K; k <= i + K; k++) {
                if (k >= 0 && k < m) {
                    sum +=
                        memo[k][Math.min(j + K, n - 1)] - (j - K - 1 >= 0 ? memo[k][j - K - 1] : 0);
                }
            }
            M[i][j] = sum;
        }
    }
    return M;
}
