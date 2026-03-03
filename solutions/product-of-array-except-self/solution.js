// Problem: Product of Array Except Self
// LeetCode: https://leetcode.com/problems/product-of-array-except-self/
// Language: javascript
// Runtime: 10 ms
// Memory: 72.9 MB
// Submitted: 2025-08-16

cl = console.log
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (a) {
    let n = a.length;
    let pfs = new Array(n)
    let pbs = new Array(n)

    let prod = 1
    for (let i = 0; i < n; i++) {
        prod = prod * a[i]
        pfs[i] = prod
    }

    prod = 1
    for (let i = n - 1; i > -1; i--) {
        prod = prod * a[i]
        pbs[i] = prod
    }

    let an = new Array(n)
    for (let i = 0; i < n; i++) {
        an[i] = (pfs[i - 1] ?? 1) * (pbs[i + 1] ?? 1)
    }

    return an;
};
