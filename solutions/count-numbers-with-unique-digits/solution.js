// Problem: Count Numbers with Unique Digits
// LeetCode: https://leetcode.com/problems/count-numbers-with-unique-digits/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.7 MB
// Submitted: 2026-01-02

var countNumbersWithUniqueDigits = function (n) {
    // nums < 10^n = 10^0 = 1 => only 0
    let total = 1
    if (n === 0) return total

    // nums < 10^n = 10^1 = 10 => single digits => only 1 to 9, not 0
    let firstPositionDigits = 9
    total += firstPositionDigits
    if (n === 1) return total

    n-- // 1st digit taken

    // nums < 10^n = 10^1 = 10 => double (or more) digits
    //          => 1st digit is taken, so left are 9,8...
    let nDigitNumbers = firstPositionDigits
    let availableDigitsForNextPosition = 9 // 9, 8, 7, ...
    while (n--) {
        nDigitNumbers *= availableDigitsForNextPosition
        total += nDigitNumbers
        availableDigitsForNextPosition--
    }

    return total
};

