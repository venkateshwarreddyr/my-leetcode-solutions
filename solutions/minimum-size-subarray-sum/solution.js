// Problem: Minimum Size Subarray Sum
// LeetCode: https://leetcode.com/problems/minimum-size-subarray-sum/
// Language: javascript
// Runtime: 4 ms
// Memory: 57.5 MB
// Submitted: 2025-08-16

/**
 * @param {number} tar
 * @param {number[]} a
 * @return {number}
 */
var minSubArrayLen = function (tar, a) {

    let i = 0, j = 0
    let sum = 0
    let min = Infinity

    while (j <= a.length) {
        if (sum >= tar) {
            min = Math.min(j - i, min)
            sum -= a[i]
            i++
        } else {
            sum += a[j]
            j++
        }
    }

    return min === Infinity ? 0 : min
};
