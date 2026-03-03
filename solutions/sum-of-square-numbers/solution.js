// Problem: Sum of Square Numbers
// LeetCode: https://leetcode.com/problems/sum-of-square-numbers/
// Language: javascript
// Runtime: 59 ms
// Memory: 71.3 MB
// Submitted: 2026-01-03

var judgeSquareSum = function (c) {
    let set = new Set(); //

    for (let b = 0; ; b++) {
        if (c - b * b < 0) break;
        set.add(b * b);
        if (set.has(c - b * b)) return true;
    }

    return false;
};

