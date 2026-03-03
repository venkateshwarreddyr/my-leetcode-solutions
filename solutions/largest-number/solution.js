// Problem: Largest Number
// LeetCode: https://leetcode.com/problems/largest-number/
// Language: javascript
// Runtime: 4 ms
// Memory: 55.5 MB
// Submitted: 2025-12-30

var largestNumber = function (a) {
    return a
        .sort((a, b) => +(b + "" + a) - +(a + "" + b))
        .join("")
        .replace(/^[0]+/, "0");
};

