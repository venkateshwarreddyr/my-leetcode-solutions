// Problem: Check Array Formation Through Concatenation
// LeetCode: https://leetcode.com/problems/check-array-formation-through-concatenation/
// Language: javascript
// Runtime: 66 ms
// Memory: 42.6 MB
// Submitted: 2023-05-23

cl = console.log
var canFormArray = function (arr, pieces) {

    for (let piece of pieces) {
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === piece[j]) {
                j++
            } else if (j) {
                break;
            }
        }
        if (j !== piece.length) {
            return false;
        }
    }

    return true;
};
