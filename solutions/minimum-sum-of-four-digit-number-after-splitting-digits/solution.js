// Problem: Minimum Sum of Four Digit Number After Splitting Digits
// LeetCode: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
// Language: javascript
// Runtime: 1 ms
// Memory: 53.2 MB
// Submitted: 2025-12-31

var minimumSum = function (num) {
    let arr = (num + "")
        .split("")
        .map((x) => +x)
        .sort((a, b) => a - b);

    let new1 = arr[0] + "" + arr[2];
    let new2 = arr[1] + "" + arr[3];
    return +new1 + +new2;
};
