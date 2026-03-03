// Problem: Second Largest Digit in a String
// LeetCode: https://leetcode.com/problems/second-largest-digit-in-a-string/
// Language: javascript
// Runtime: 61 ms
// Memory: 44.6 MB
// Submitted: 2023-05-23

cl = console.log
var secondHighest = function (s) {

    let set = new Set();
    for (let c of s) {
        if (!isNaN(c)) {
            set.add(c)
        }
    }

    s = [...set].sort((a, b) => b - a);

    return s[1] || -1
};
