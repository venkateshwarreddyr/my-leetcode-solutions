// Problem: Duplicate Zeros
// LeetCode: https://leetcode.com/problems/duplicate-zeros/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.5 MB
// Submitted: 2023-05-20

cl = console.log
var duplicateZeros = function (arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++;
        }
    }

    arr.splice(n)

};
