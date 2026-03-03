// Problem: Check if Array Is Sorted and Rotated
// LeetCode: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
// Language: javascript
// Runtime: 59 ms
// Memory: 41.7 MB
// Submitted: 2023-05-23

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (a) {
    let n = a.length;
    let c = 0
    for (let i = 1; i <= n; i++) {
        if (a[i % n] < a[i - 1]) {
            c++;
            if (c === 2) {
                return false;
            }
        }
    }

    return true;
};
