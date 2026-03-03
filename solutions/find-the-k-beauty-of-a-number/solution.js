// Problem: Find the K-Beauty of a Number
// LeetCode: https://leetcode.com/problems/find-the-k-beauty-of-a-number/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.9 MB
// Submitted: 2023-05-29

cl = console.log
var divisorSubstrings = function (s, k) {
    let n = s.toString().length;
    let c = 0;

    for (let i = k; i <= n; i++) {
        let x = Number(s.toString().slice(i - k, i))
        if (s % x === 0) c++
    }

    return c
};
