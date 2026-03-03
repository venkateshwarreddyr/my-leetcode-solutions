// Problem: Ways to Make a Fair Array
// LeetCode: https://leetcode.com/problems/ways-to-make-a-fair-array/
// Language: javascript
// Runtime: 60 ms
// Memory: 72.9 MB
// Submitted: 2025-11-10

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (a) {
    let n = a.length
    let ps = new Array(n).fill(0)
    let ss = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        ps[i] = a[i] + (ps[i - 2] ?? 0)
    }

    for (let i = n - 1; i >= 0; i--) {
        ss[i] = a[i] + (ss[i + 2] ?? 0)
    }

    console.log({ ps, ss })
    let ans = 0
    for (let i = 0; i < n; i++) {
        if ((ps[i - 1] ?? 0) + (ss[i + 2] ?? 0) === (ps[i - 2] ?? 0) + (ss[i + 1] ?? 0)) {
            ans++
        }
    }

    return ans
};
