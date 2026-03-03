// Problem: Maximum Number of Jumps to Reach the Last Index
// LeetCode: https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/
// Language: javascript
// Runtime: 631 ms
// Memory: 48.2 MB
// Submitted: 2023-07-10

cl = console.log
var maximumJumps = function (a, tar) {
    let n = a.length;
    let dp = {};
    let an = -1;
    function fn(i, cc) {
        if (i >= n) return;
        if (i === n - 1) {
            an = Math.max(cc, an);
            return;
        }
        if (dp[i] >= cc) return;
        dp[i] = cc

        for (let j = i + 1; j < n; j++) {
            if (
                (-tar <= (a[j] - a[i])) &&
                ((a[j] - a[i]) <= tar)
            ) {
                fn(j, cc + 1);
            }
        }
    }
    fn(0, 0);
    return an;
};
