// Problem: Number of Times Binary String Is Prefix-Aligned
// LeetCode: https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/
// Language: javascript
// Runtime: 65 ms
// Memory: 47 MB
// Submitted: 2023-07-18

var numTimesAllBlue = function (a) {
    let cc = 0;

    let max = 0; //  max Till Now
    a.forEach((e, i) => {
        max = Math.max(max, e);
        if (max === i + 1) {
            cc++;
        }
    });

    return cc;
};
