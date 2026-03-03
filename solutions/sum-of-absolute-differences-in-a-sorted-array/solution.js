// Problem: Sum of Absolute Differences in a Sorted Array
// LeetCode: https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
// Language: javascript
// Runtime: 234 ms
// Memory: 65.1 MB
// Submitted: 2023-07-07

cl = console.log
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (a) {
    let n = a.length
    let ps = new Array(n).fill(0)
    let ss = new Array(n).fill(0)
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += a[i]
        ps[i] = sum
    }
    for (let i = 0; i < n; i++) {
        ss[i] = sum
        sum -= a[i]
    }

    a.some((e, i) => {
        let left = e * (i)
        let right = e * (n - i - 1)
        left = left - (ps[i - 1] ?? 0)
        right = (ss[i + 1] ?? 0) - right

        a[i] = left + right
    })

    return a
};
/**

    2, 3, 5, 7
    9, 7, 7, 11

    15 - 2 = 13 = 9
    13 - 3 = 10 = 7
    10 - 5 = 5  = 7

 */
