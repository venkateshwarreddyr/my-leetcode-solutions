// Problem: Gray Code
// LeetCode: https://leetcode.com/problems/gray-code/
// Language: javascript
// Runtime: 4 ms
// Memory: 64.1 MB
// Submitted: 2025-10-26

function binaryToGray(num) {
    return num ^ (num >> 1);
}

var grayCode = function (n) {
    let result = []
    for (let i = 0; i < 2 ** n; i++) {
        let gc = binaryToGray(i)
        result.push(gc)
    }
    return result
};

