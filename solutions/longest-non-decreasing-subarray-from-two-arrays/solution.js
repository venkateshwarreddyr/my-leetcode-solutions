// Problem: Longest Non-decreasing Subarray From Two Arrays
// LeetCode: https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/
// Language: javascript
// Runtime: 15 ms
// Memory: 69.8 MB
// Submitted: 2025-12-24

var maxNonDecreasingLength222222 = function (a, b) {
    const n = a.length;
    let maxlen = 0;
    if (a.length <= 1) return a.length;
    const dpa = new Array(n).fill(1);
    const dpb = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (a[i - 1] <= a[i]) dpa[i] = Math.max(dpa[i], dpa[i - 1] + 1);
        if (b[i - 1] <= a[i]) dpa[i] = Math.max(dpa[i], dpb[i - 1] + 1);
        //
        if (a[i - 1] <= b[i]) dpb[i] = Math.max(dpb[i], dpa[i - 1] + 1);
        if (b[i - 1] <= b[i]) dpb[i] = Math.max(dpb[i], dpb[i - 1] + 1);
        maxlen = Math.max(maxlen, dpa[i], dpb[i]);
    }
    return maxlen;
};

var maxNonDecreasingLength11111111 = function (a, b) {
    const n = a.length;
    let maxlen = 0;
    if (a.length <= 1) return a.length;
    const dpa = new Array(n).fill(1);
    const dpb = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (a[i - 1] <= a[i]) dpa[i] = Math.max(dpa[i], dpa[i - 1] + 1);
        if (b[i - 1] <= a[i]) dpa[i] = Math.max(dpa[i], dpb[i - 1] + 1);
        //
        if (a[i - 1] <= b[i]) dpb[i] = Math.max(dpb[i], dpa[i - 1] + 1);
        if (b[i - 1] <= b[i]) dpb[i] = Math.max(dpb[i], dpb[i - 1] + 1);
        maxlen = Math.max(maxlen, dpa[i], dpb[i]);
    }
    return maxlen;
};

var maxNonDecreasingLength = function (a1, a2) {
    const n = a1.length;
    let maxlen = 0;
    let prevmaxlen1 = 0;
    let prevmaxlen2 = 0;
    for (let i = 0; i < n; i++) {
        let maxlen1 = 1;
        if ((a1[i - 1] || 0) <= a1[i]) maxlen1 = Math.max(maxlen1, prevmaxlen1 + 1);
        if ((a2[i - 1] || 0) <= a1[i]) maxlen1 = Math.max(maxlen1, prevmaxlen2 + 1);
        //
        let maxlen2 = 1;
        if ((a1[i - 1] || 0) <= a2[i]) maxlen2 = Math.max(maxlen2, prevmaxlen1 + 1);
        if ((a2[i - 1] || 0) <= a2[i]) maxlen2 = Math.max(maxlen2, prevmaxlen2 + 1);
        maxlen = Math.max(maxlen, maxlen1, maxlen2);
        prevmaxlen1 = maxlen1;
        prevmaxlen2 = maxlen2;
    }
    return maxlen;
};

var maxNonDecreasingLength22222222 = function (a, b) {
    const n = a.length;
    let maxlen = 0;
    if (a.length <= 1) return a.length;
    const dp = Array.from({ length: 2 }, () => new Array(n).fill(1));
    for (let i = 1; i < n; i++) {
        if (a[i - 1] <= a[i]) dp[0][i] = Math.max(dp[0][i], dp[0][i - 1] + 1);
        if (b[i - 1] <= a[i]) dp[0][i] = Math.max(dp[0][i], dp[1][i - 1] + 1);
        //
        if (b[i - 1] <= b[i]) dp[1][i] = Math.max(dp[1][i], dp[1][i - 1] + 1);
        if (a[i - 1] <= b[i]) dp[1][i] = Math.max(dp[1][i], dp[0][i - 1] + 1);
        maxlen = Math.max(maxlen, dp[0][i]);
        maxlen = Math.max(maxlen, dp[1][i]);
    }
    return maxlen;
};

var maxNonDecreasingLength33333333333 = function (a, b) {
    let n = a.length
    let maxLen = 0;

    function fn(i, prevLen, prevLen2) {
        maxLen = Math.max(maxLen, prevLen, prevLen2)

        // if ((n - i + prevLen) < maxLen) return
        if (i >= n) return

        let done = 0
        newprevLen = prevLen
        newprevLen2 = prevLen2
        if (a[i - 1] <= a[i]) {
            newprevLen++
            done = 1
            // return
        } else {
            if (a[i - 1] <= b[i]) {
                newprevLen++
                done = 1
                // return
            }
        }

        // newprevLen = prevLen
        // newprevLen2 = prevLen2
        if (b[i - 1] <= a[i]) {
            newprevLen2++
            done = 1
            // return
        } else {
            if (b[i - 1] <= b[i]) {
                newprevLen2++
                done = 1
                // return
            }
        }

        fn(i + 1, newprevLen, newprevLen2)

        if (!done) {
            fn(i + 1, 1, 1)
        }
    }

    fn(0, 0, 0)
    return maxLen;
};

