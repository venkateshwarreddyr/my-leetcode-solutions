// Problem: Minimum Operations to Make a Uni-Value Grid
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/
// Language: javascript
// Runtime: 471 ms
// Memory: 76.6 MB
// Submitted: 2023-06-06

var minOperations = function (g, x) {
    let a = g.flat().sort((a, b) => a - b);
    let n = a.length

    let median = a[~~(n / 2)];

    let ans = 0;
    for (let e of a) {
        if ((median - e) % x)
            return -1;
        ans += Math.abs((median - e) / x);
    }
    return ans;
};

