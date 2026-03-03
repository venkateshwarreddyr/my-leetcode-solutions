// Problem: Largest Even Number
// LeetCode: https://leetcode.com/problems/largest-even-number/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.8 MB
// Submitted: 2026-01-17

var largestEven = function (s) {
    let a = s.split("")

    while (a.length && (a.at(-1) % 2 === 1)) {
        a.pop()
    }

    return a.join("")
};

