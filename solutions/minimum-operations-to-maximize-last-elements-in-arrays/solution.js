// Problem: Minimum Operations to Maximize Last Elements in Arrays
// LeetCode: https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/
// Language: javascript
// Runtime: 57 ms
// Memory: 45 MB
// Submitted: 2023-11-13

function check(a, b, maxa, maxb) {
    let cc = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= maxa && b[i] <= maxb) {
        } else if (a[i] <= maxb && b[i] <= maxa) {
            cc++
        } else {
            return Infinity
        }
    }

    return cc
}
var minOperations = function (a, b) {
    let n = a.length
    let maxa = a[n - 1]
    let maxb = b[n - 1]

    let x = check(a, b, maxa, maxb)
    let y = check(a, b, maxb, maxa)

    let an = Math.min(x, y)

    return an === Infinity ? -1 : an
};
