// Problem: Apply Operations to an Array
// LeetCode: https://leetcode.com/problems/apply-operations-to-an-array/
// Language: javascript
// Runtime: 64 ms
// Memory: 43.9 MB
// Submitted: 2023-05-24

cl = console.log
var applyOperations = function (a) {

    let n = a.length;
    let zeros = 0;
    for (let i = 1; i < n; i++) {
        if (a[i - 1] === a[i] && a[i]) {
            a[i - 1] += a[i];
            a[i] = 0;
            i--;
        }
        if (a[i - 1] === 0) {
            zeros++
        }
    }
    a = a.filter(e => e)
    return a.concat(new Array(n - a.length).fill(0))
};
