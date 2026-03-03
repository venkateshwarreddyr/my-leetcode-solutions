// Problem: Calculate Digit Sum of a String
// LeetCode: https://leetcode.com/problems/calculate-digit-sum-of-a-string/
// Language: javascript
// Runtime: 53 ms
// Memory: 42 MB
// Submitted: 2023-05-24

cl = console.log
var digitSum = function (s, k) {
    let n = s.length;

    while (s.length > k) {
        let newS = ''
        for (i = 0; i < s.length; i += k) {
            newS += (s.slice(i, i + k).split('').reduce((a, c) => a + (+c), 0))
        }
        s = newS
    }

    return s
};
