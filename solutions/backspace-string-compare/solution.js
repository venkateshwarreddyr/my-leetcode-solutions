// Problem: Backspace String Compare
// LeetCode: https://leetcode.com/problems/backspace-string-compare/
// Language: javascript
// Runtime: 50 ms
// Memory: 41.7 MB
// Submitted: 2023-10-19

cl = console.log
var backspaceCompare = function (s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    let p1ignore = 0;
    let p2ignore = 0;
    while (p1 > -1 || p2 > -1) {


        while (s[p1] === '#') {
            p1ignore++;
            p1--;
        }

        while (t[p2] === '#') {
            p2ignore++;
            p2--;
        }

        while (p1ignore && s[p1] !== '#') {
            p1--;
            p1ignore--;
        }

        while (p2ignore && t[p2] !== '#') {
            p2--;
            p2ignore--;
        }
        if (s[p1] === '#' || t[p2] === "#") continue;
        if (s[p1] === t[p2]) {
            p1--;
            p2--;
        } else if (s[p1] !== t[p2]) {
            return false
        }
    }

    return true
};
