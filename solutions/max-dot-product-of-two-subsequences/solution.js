// Problem: Max Dot Product of Two Subsequences
// LeetCode: https://leetcode.com/problems/max-dot-product-of-two-subsequences/
// Language: javascript
// Runtime: 15 ms
// Memory: 60.2 MB
// Submitted: 2026-01-10

var maxDotProduct = function (nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const prod = nums1[i - 1] * nums2[j - 1];
            dp[i][j] = Math.max(
                dp[i - 1][j - 1], //        top left // redundant due to  topLeft+curr / curr
                dp[i - 1][j], //            top      skip nums1 element - same/better than topleft
                dp[i][j - 1], //            left     skip nums2 element - same/better than topleft
                prod, //                    curr     start new subsequence
                dp[i - 1][j - 1] + prod, // top left + curr - extend subsequence
            );
        }
    }

    return dp[n][m];
};

