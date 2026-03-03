// Problem: Maximum Points You Can Obtain from Cards
// LeetCode: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
// Language: javascript
// Runtime: 82 ms
// Memory: 47.9 MB
// Submitted: 2023-07-07

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (a, k) {
    let n = a.length
    let sum = 0
    let tsum = 0
    for (let i = 0; i < n; i++) {
        if (i < n - k)
            sum += a[i]
        tsum += a[i]
    }

    let max = tsum - sum
    for (let i = 1, j = n - k; j < n; i++, j++) {
        sum -= a[i - 1];
        sum += a[j];
        max = Math.max(max, tsum - sum);
    }

    return max;
};
