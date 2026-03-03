// Problem: Max Sum of Rectangle No Larger Than K
// LeetCode: https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/
// Language: javascript
// Runtime: 239 ms
// Memory: 44.1 MB
// Submitted: 2023-08-24

cl = console.log
var maxSumSubmatrix = function (grid, tar) {
    let m = grid.length;
    let n = grid[0].length;
    let an = -Infinity

    var maxSubArray = function (a) {

        let maxi = -Infinity;

        for (let i = 0; i < a.length; i++) {
            let sum = 0
            for (let j = i; j < a.length; j++) {
                sum += a[j]
                if (sum <= tar)
                    maxi = Math.max(maxi, sum)
            }
        }
        return maxi

    };

    for (let i = 0; i < m; i++) {
        let a = new Array(n).fill(0)
        for (let j = i; j < m; j++) {
            for (let k = 0; k < n; k++) {
                a[k] += grid[j][k]
            }
            let max = maxSubArray(a)
            an = Math.max(an, max)
        }
    }

    return an
};
