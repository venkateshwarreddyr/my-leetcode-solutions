// Problem: Mean of Array After Removing Some Elements
// LeetCode: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
// Language: javascript
// Runtime: 61 ms
// Memory: 43.9 MB
// Submitted: 2023-05-23

cl = console.log
var trimMean = function (arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let x = n * 5 / 100

    arr = arr.slice(x, n - x)

    return arr.reduce((a, c) => a + c, 0) / (n - x - x)
};
