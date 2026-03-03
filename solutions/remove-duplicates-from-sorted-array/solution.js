// Problem: Remove Duplicates from Sorted Array
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Language: javascript
// Runtime: 0 ms
// Memory: 56.4 MB
// Submitted: 2025-08-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (a) {
    let n = a.length
    let i = 0

    for (j = 0; j < n; j++) {
        if (a[i] === a[j]) continue
        a[++i] = a[j]
    }

    return i + 1
};
