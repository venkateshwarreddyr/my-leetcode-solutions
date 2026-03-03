// Problem: Find Lucky Integer in an Array
// LeetCode: https://leetcode.com/problems/find-lucky-integer-in-an-array/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.1 MB
// Submitted: 2023-05-25

cl = console.log
var findLucky = function (a) {
    let o = {}

    for (let e of a) {
        o[e] = o[e] || 0
        o[e]++
    }

    let an = -1
    for (let key in o) {
        if (+key === o[key]) {
            an = Math.max(an, +key)
        }
    }

    return an;
};
