// Problem: Check Whether Two Strings are Almost Equivalent
// LeetCode: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
// Language: javascript
// Runtime: 72 ms
// Memory: 45.4 MB
// Submitted: 2023-05-22

cl = console.log
var checkAlmostEquivalent = function (w1, w2) {
    let c = 2
    obj = {}
    // obj2 = {}
    for (let i = 0; i < w1.length; i++) {
        obj[w1[i]] = (obj[w1[i]] || 0) + 1
        obj[w2[i]] = (obj[w2[i]] || 0) - 1
    }

    return Object.values(obj).every(e => Math.abs(e) <= 3)
};
