// Problem: Minimum Positive Sum Subarray 
// LeetCode: https://leetcode.com/problems/minimum-positive-sum-subarray/
// Language: javascript
// Runtime: 4 ms
// Memory: 55.9 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (a, minL, maxL) {
    const n = a.length;
    let minSum = Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const len = j - i + 1;
            if (len < minL) continue;
            if (len > maxL) break;
            let sum = 0;
            for (let k = i; k <= j; k++) sum += a[k];
            if (sum > 0) {
                minSum = Math.min(minSum, sum);
            }
        }
    }
    if (minSum === Infinity) return -1;
    return minSum;
};
