// Problem: Shortest Subarray With OR at Least K I
// LeetCode: https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.4 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (a, K) {
    let n = a.length
    let min = Infinity
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let x = 0
            for (let k = i; k <= j; k++) {
                x |= a[k]
            }
            if (x >= K) {
                min = Math.min(min, j - i + 1)
            }
        }
    }
    return min !== Infinity ? min : -1
};
