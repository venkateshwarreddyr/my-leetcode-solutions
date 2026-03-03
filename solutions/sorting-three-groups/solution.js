// Problem: Sorting Three Groups
// LeetCode: https://leetcode.com/problems/sorting-three-groups/
// Language: javascript
// Runtime: 4 ms
// Memory: 62.8 MB
// Submitted: 2026-01-06

var minimumOperations = function (a) {
    let n = a.length
    let o = 0
    let t = 0
    let th = 0

    for (let e of a) {
        if (e === 1) o++
        else if (e === 2) t = Math.max(o, t) + 1
        else if (e === 3) th = Math.max(o, t, th) + 1
    }

    return n - Math.max(o, t, th)
};

