// Problem: Minimum Number of Removals to Make Mountain Array
// LeetCode: https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/
// Language: javascript
// Runtime: 93 ms
// Memory: 58.8 MB
// Submitted: 2026-01-17

var minimumMountainRemovals = function (a) {
    let n = a.length
    let dpLis = lengthOfLIS(a)
    let dpLds = lengthOfLDS(a)

    let res = 0; // longest Mountain Length
    for (let i = 0; i < n; i++) {
        if (dpLis[i] >= 2 && dpLds[i] >= 2) {
            // i is a valid peak
            res = Math.max(res, dpLis[i] + dpLds[i] - 1);
        }
    }

    return n - res; // Removals
};

var lengthOfLIS = function (a) {
    let n = a.length
    let dp = new Array(n).fill(1)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    return dp
}

var lengthOfLDS = function (a) {
    let n = a.length
    let dp = new Array(n).fill(1)

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] > a[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    return dp
}

