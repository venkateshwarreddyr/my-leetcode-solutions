// Problem: Number of Lines To Write String
// LeetCode: https://leetcode.com/problems/number-of-lines-to-write-string/
// Language: javascript
// Runtime: 65 ms
// Memory: 42 MB
// Submitted: 2023-05-25

cl = console.log
var numberOfLines = function (widths, s) {

    let an = 0
    let cl = 0
    for (let c of s) {
        let x = widths[c.charCodeAt() - 97]
        if (an + x > 100) {
            an = 0
            cl++
        }
        an += x
    }

    return [an ? cl + 1 : cl, an]
};
