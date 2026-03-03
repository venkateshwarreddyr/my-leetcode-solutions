// Problem: Valid Boomerang
// LeetCode: https://leetcode.com/problems/valid-boomerang/
// Language: javascript
// Runtime: 59 ms
// Memory: 44.1 MB
// Submitted: 2023-05-29

cl = console.log

function slope([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1)
}

var isBoomerang = function (p) {
    let a = slope(p[0], p[1])
    let b = slope(p[0], p[2])
    cl({ a, b })
    if ([Infinity, -Infinity].includes(a) && [Infinity, -Infinity].includes(b)) return false
    if ([NaN].includes(a) || [NaN].includes(b)) return false
    return a !== b
};

