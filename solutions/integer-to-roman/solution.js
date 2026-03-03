// Problem: Integer to Roman
// LeetCode: https://leetcode.com/problems/integer-to-roman/
// Language: javascript
// Runtime: 112 ms
// Memory: 46.8 MB
// Submitted: 2023-08-15

cl = console.log
var intToRoman = function (num) {
    let s = ""
    while (num >= 1000) {
        s += "M"
        num -= 1000
    }
    while (num >= 900) {
        s += "CM"
        num -= 900
    }
    while (num >= 500) {
        s += "D"
        num -= 500
    }
    while (num >= 400) {
        s += "CD"
        num -= 400
    }
    while (num >= 100) {
        s += "C"
        num -= 100
    }
    while (num >= 90) {
        s += "XC"
        num -= 90
    }
    while (num >= 50) {
        s += "L"
        num -= 50
    }
    while (num >= 40) {
        s += "XL"
        num -= 40
    }
    while (num >= 10) {
        s += "X"
        num -= "10"
    }
    while (num >= 9) {
        s += "IX"
        num -= 9
    }
    while (num >= 5) {
        s += "V"
        num -= 5
    }
    while (num >= 4) {
        s += "IV"
        num -= 4
    }
    while (num > 0) {
        s += "I"
        num -= 1
    }

    return s
};
