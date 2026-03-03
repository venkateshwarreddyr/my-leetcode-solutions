// Problem: Count Largest Group
// LeetCode: https://leetcode.com/problems/count-largest-group/
// Language: javascript
// Runtime: 79 ms
// Memory: 48 MB
// Submitted: 2023-05-25

cl = console.log
var countLargestGroup = function (n) {


    let o = {}

    for (let i = 1; i <= n; i++) {
        let a = i.toString().split('').reduce((a, c) => a + +c, 0)
        o[a] = o[a] || 0
        o[a]++
    }

    let max = Math.max(...Object.values(o))
    let an = 0;
    for (let v of Object.values(o)) {
        if (v === max) {
            an++
        }
    }
    return an
};
