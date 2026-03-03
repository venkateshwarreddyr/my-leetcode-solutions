// Problem: Slowest Key
// LeetCode: https://leetcode.com/problems/slowest-key/
// Language: javascript
// Runtime: 82 ms
// Memory: 47.4 MB
// Submitted: 2023-05-29

cl = console.log

var slowestKey = function (r, a) {
    r = r.map((e, i) => [a[i], r[i] - (r[i - 1] || 0)])

    return r.sort((a, b) => b[1] - a[1] || b[0].localeCompare(a[0]))[0][0]
};
