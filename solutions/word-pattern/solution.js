// Problem: Word Pattern
// LeetCode: https://leetcode.com/problems/word-pattern/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.2 MB
// Submitted: 2023-05-28

cl = console.log
var wordPattern = function (p, s) {
    let obj = {}
    s = s.split(" ").map(e => e + '-')
    let n = p.length
    if (s.length !== n) return false;
    if (new Set(s).size !== new Set(p).size) return false;

    for (let i = 0; i < n; i++) {
        if (obj[p[i]]) {
            if (obj[p[i]] !== s[i]) {
                return false
            }
        }
        obj[p[i]] = s[i]

    }
    return true
};
