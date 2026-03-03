// Problem: Frequency of the Most Frequent Element
// LeetCode: https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// Language: javascript
// Runtime: 213 ms
// Memory: 56.9 MB
// Submitted: 2023-11-18

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (a, k) {
    a.sort((a, b) => a - b);
    let n = a.length
    let max = 0
    let sum = 0
    for (let i = 0, j = 0; j < n; j++) {
        sum += a[j]

        while (sum + k < a[j] * (j - i + 1)) {
            sum -= a[i]
            i++
        }

        max = Math.max(max, j - i + 1)
    }

    return max
};
