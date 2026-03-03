// Problem: Monotonic Array
// LeetCode: https://leetcode.com/problems/monotonic-array/
// Language: javascript
// Runtime: 72 ms
// Memory: 53.4 MB
// Submitted: 2023-09-29

/**
 * @param {number[]} a
 * @return {boolean}
 */
var isMonotonic = function (a) {
    let n = a.length;
    if (n === 1) {
        return true
    }
    let first = true
    let second = true
    for (let i = 1; i < n; i++) {
        if (a[i - 1] <= a[i]) continue;
        else {
            first = false
            break;
        }
    }
    for (let i = 1; i < n; i++) {
        if (a[i - 1] >= a[i]) continue;
        else {
            second = false;
            break;
        }
    }

    if (first || second) return true
    return false
};
