// Problem: Determine if Two Strings Are Close
// LeetCode: https://leetcode.com/problems/determine-if-two-strings-are-close/
// Language: javascript
// Runtime: 267 ms
// Memory: 49.9 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} w1
 * @param {string} w2
 * @return {boolean}
 */
var closeStrings = function (w1, w2) {
    if (w1.length !== w2.length) return false
    let ob1 = {};
    for (let e of w1) {
        ob1[e] = ob1[e] || 0;
        ob1[e]++;
    }
    let ob2 = {};
    for (let e of w2) {
        ob2[e] = ob2[e] || 0;
        ob2[e]++;
    }

    return Object.values(ob1).sort((a, b) => a - b).toString() === Object.values(ob2).sort((a, b) => a - b).toString() && Object.keys(ob1).sort().toString() === Object.keys(ob2).sort().toString()
};
