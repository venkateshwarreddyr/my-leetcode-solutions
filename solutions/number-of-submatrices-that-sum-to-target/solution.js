// Problem: Number of Submatrices That Sum to Target
// LeetCode: https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
// Language: javascript
// Runtime: 180 ms
// Memory: 48 MB
// Submitted: 2023-08-17

cl = console.log

var subarraySum = function (a, k) {
    let counts = new Map();
    counts.set(0, 1);
    let cc = 0, sum = 0;

    for (const e of a) {
        sum += e;
        cc += counts.get(sum - k) ?? 0;
        counts.set(sum, (counts.get(sum) || 0) + 1);
    }

    return cc;
};

var numSubmatrixSumTarget = function (grid, tar) {
    let cc = 0
    let m = grid.length
    let n = grid[0].length

    for (let k = 0; k < m; k++) {
        let a = new Array(n).fill(0)
        for (let i = k; i < m; i++) {
            for (let j = 0; j < n; j++) {
                a[j] += grid[i][j]
            }
            cc += subarraySum(a, tar)
        }
    }

    return cc
};

