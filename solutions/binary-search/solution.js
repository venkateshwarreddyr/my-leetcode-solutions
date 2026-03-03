// Problem: Binary Search
// LeetCode: https://leetcode.com/problems/binary-search/
// Language: javascript
// Runtime: 0 ms
// Memory: 57.8 MB
// Submitted: 2025-08-16

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, tar) {
    let lo = 0, hi = a.length - 1

    while (lo <= hi) {
        mid = Math.trunc(lo / 2 + hi / 2)

        if(a[mid] === tar) return mid
        else if(a[mid] < tar) lo = mid + 1
        else hi = mid - 1
    }

    return -1
};
