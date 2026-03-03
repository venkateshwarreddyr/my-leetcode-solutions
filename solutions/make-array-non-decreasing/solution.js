// Problem: Make Array Non-decreasing
// LeetCode: https://leetcode.com/problems/make-array-non-decreasing/
// Language: javascript
// Runtime: 6 ms
// Memory: 74.7 MB
// Submitted: 2026-01-19

var maximumPossibleSize = function (a) {
    let res = []

    for (let e of a) {
        if (res.length) {
            if (res.at(-1) > e) {
                // delete e
            } else {
                res.push(e)
            }
        } else {
            res.push(e)
        }
    }

    return res.length
};

