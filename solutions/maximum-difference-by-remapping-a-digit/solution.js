// Problem: Maximum Difference by Remapping a Digit
// LeetCode: https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.4 MB
// Submitted: 2025-06-14

cl = console.log
var minMaxDifference = function (num) {
    num = num.toString();
    let least = num.split('').find(e => e !== '9')
    let max = +num.replaceAll(least, '9')
    let min = +num.replaceAll(num[0], '0')

    return max - min
};
