// Problem: Mirror Distance of an Integer
// LeetCode: https://leetcode.com/problems/mirror-distance-of-an-integer/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.1 MB
// Submitted: 2025-12-21

var mirrorDistance = function (n) {
    return Math.abs(n - reverseNum(n));
};

function reverseNum(x) {
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed;
}

