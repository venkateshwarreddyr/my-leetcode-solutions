// Problem: Two Sum II - Input Array Is Sorted
// LeetCode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Language: javascript
// Runtime: 1 ms
// Memory: 56.5 MB
// Submitted: 2025-08-16

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (a, t) {

    let lo = 0, hi = a.length - 1

    while (lo < hi) {
        if (a[lo] + a[hi] === t) break
        else if (a[lo] + a[hi] > t) hi--
        else lo++
    }

    return [lo + 1, hi + 1]
};
