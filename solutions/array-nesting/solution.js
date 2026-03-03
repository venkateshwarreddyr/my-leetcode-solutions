// Problem: Array Nesting
// LeetCode: https://leetcode.com/problems/array-nesting/
// Language: javascript
// Runtime: 5 ms
// Memory: 64.1 MB
// Submitted: 2026-01-03

var arrayNesting = function (a) {
    let maxLen = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) continue;

        let len = 0;
        for (let j = i; a[j] !== -1;) {
            [a[j], j] = [-1, a[j]]
            len++;
        }
        maxLen = Math.max(len, maxLen);
    }

    return maxLen;
};

