// Problem: Long Pressed Name
// LeetCode: https://leetcode.com/problems/long-pressed-name/
// Language: javascript
// Runtime: 36 ms
// Memory: 43.5 MB
// Submitted: 2023-05-22

cl = console.log
var isLongPressedName = function (s, t) {
    let sl = s.length;
    let tl = t.length;
    let i = 0; j = 0;

    while (true) {
        while (s[i] === t[j] && i < sl && j < tl) {
            i++;
            j++;
        }

        while (s[i - 1] === t[j] && j < tl) {
            j++
        }
        if (s[i] !== t[j]) return false;
        if (i === sl && j === tl) return true;

    }
};
