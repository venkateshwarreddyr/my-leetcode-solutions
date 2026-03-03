// Problem: Find the Original Typed String I
// LeetCode: https://leetcode.com/problems/find-the-original-typed-string-i/
// Language: javascript
// Runtime: 56 ms
// Memory: 55.4 MB
// Submitted: 2025-07-01

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
    let curr = null;
    let an = [];
    let cc = 0;
    for (let c of word) {
        if (curr !== c) {
            an.push(cc);
            curr = c;
            cc = 1;
        } else {
            cc++;
        }
    }
    an.push(cc);

    let x = an.reduce((a, c) => a + (c > 0 ? c - 1 : 0), 0) + 1
    return x;
};

