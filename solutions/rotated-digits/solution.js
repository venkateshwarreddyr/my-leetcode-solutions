// Problem: Rotated Digits
// LeetCode: https://leetcode.com/problems/rotated-digits/
// Language: javascript
// Runtime: 12 ms
// Memory: 61.7 MB
// Submitted: 2025-12-30

var rotatedDigits = function (n) {
    let count = 0;

    for (let x = 1; x <= n; x++) {
        let digits = x.toString().split("");
        count +=
            // none of digits shud be
            digits.every((e) => (e != "3" && e != "4" && e != "7")) &&
            //  one of digits shud be
            digits.some((e) => e == "2" || e == "5" || e == "6" || e == "9");
    }

    return count;
};

