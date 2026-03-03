// Problem: Binary Prefix Divisible By 5
// LeetCode: https://leetcode.com/problems/binary-prefix-divisible-by-5/
// Language: javascript
// Runtime: 0 ms
// Memory: 59.6 MB
// Submitted: 2025-11-24

var prefixesDivBy5 = function (a) {
    let an = []

    let s = 0
    a.forEach((d) => {
        s = (2 * s + d) % 5
        an.push(s === 0)
    })

    return an;
};
