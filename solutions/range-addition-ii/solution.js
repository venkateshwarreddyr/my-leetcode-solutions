// Problem: Range Addition II
// LeetCode: https://leetcode.com/problems/range-addition-ii/
// Language: javascript
// Runtime: 61 ms
// Memory: 44.1 MB
// Submitted: 2023-05-29

cl = console.log
var maxCount = function (m, n, ops) {
    let a = m
    let b = n
    for (let [x, y] of ops) {
        a = Math.min(a, x)
        b = Math.min(b, y)
    }
    return a * b
}
