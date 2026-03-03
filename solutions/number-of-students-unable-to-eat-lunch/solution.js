// Problem: Number of Students Unable to Eat Lunch
// LeetCode: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.8 MB
// Submitted: 2023-05-23

cl = console.log

var countStudents = function (s, t) {
    let c = 0;
    while (s.length && c <= s.length) {
        if (s[0] !== t[0]) {
            c++
            s.push(s.shift());
        } else {
            c = 0;
            s.shift();
            t.shift();
        }
    }

    return s.length
};
