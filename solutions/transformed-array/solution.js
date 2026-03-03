// Problem: Transformed Array
// LeetCode: https://leetcode.com/problems/transformed-array/
// Language: javascript
// Runtime: 58 ms
// Memory: 57 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (a) {
    let n = a.length
    let r = new Array(n)
    let i = -1
    for (let e of a) {
        i++
        if (e < 0) {
            let ii = i - Math.abs(e) % n
            ii = (n + ii) % n
            r[i] = a[ii]
        } else {
            r[i] = a[(i + (e % n)) % n]
        }
    }
    return r
};

