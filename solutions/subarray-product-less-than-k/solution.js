// Problem: Subarray Product Less Than K
// LeetCode: https://leetcode.com/problems/subarray-product-less-than-k/
// Language: javascript
// Runtime: 77 ms
// Memory: 47.9 MB
// Submitted: 2023-07-06

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (a, k) {
    let n = a.length;

    let p = 1

    let cc = 0;
    for (let end = 0, start = 0; end < n; end++) {

        p *= a[end]

        while (start < n && p >= k) {
            p /= a[start]
            start++
        }
        if (end >= start) {
            cc += end - start + 1
        }
    }

    return cc;
};
