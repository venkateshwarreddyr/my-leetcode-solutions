// Problem: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// LeetCode: https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
// Language: javascript
// Runtime: 62 ms
// Memory: 49.3 MB
// Submitted: 2023-07-12

/**
 * @param {number[]} a
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (a, k, threshold) {
    let sum = 0
    let n = a.length
    for (let i = 0; i < k; i++) {
        sum += a[i]
    }
    let cc = 0
    if (sum / k >= threshold) cc++
    for (let i = k; i < n; i++) {
        sum += a[i]
        sum -= a[i - k]
        if (sum / k >= threshold) cc++
    }

    return cc
};
