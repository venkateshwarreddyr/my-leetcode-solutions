// Problem: Can Make Arithmetic Progression From Sequence
// LeetCode: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.8 MB
// Submitted: 2023-05-25

cl = console.log
var canMakeArithmeticProgression = function (arr) {
    let n = arr.length;
    arr.sort((a, b) => b - a)
    let diff = Math.abs(arr[0] - arr[1])
    for (let i = 2; i < n; i++) {
        if (Math.abs(arr[i - 1] - arr[i]) !== diff) {
            return false
        }
    }

    return true
};
