// Problem: Add Digits
// LeetCode: https://leetcode.com/problems/add-digits/
// Language: javascript
// Runtime: 68 ms
// Memory: 43.5 MB
// Submitted: 2023-05-22

cl = console.log
var addDigits = function (num) {
    while (num > 9) {
        let tnum = num;
        let sum = 0;
        while (tnum) {
            sum += (tnum % 10)
            tnum = Math.trunc(tnum / 10)
        }
        num = sum
    }

    return num
};
