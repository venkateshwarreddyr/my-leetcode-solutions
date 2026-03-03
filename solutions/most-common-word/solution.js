// Problem: Most Common Word
// LeetCode: https://leetcode.com/problems/most-common-word/
// Language: javascript
// Runtime: 73 ms
// Memory: 44.1 MB
// Submitted: 2023-05-29

cl = console.log
var mostCommonWord = function (p, banned) {
    p = p.toLowerCase().split(/[!?',;. ]/).filter(e => e)
    let n = p.length
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (!banned.includes(p[i])) {
            obj[p[i]] = obj[p[i]] || 0
            obj[p[i]]++
        }
    }
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]

};
