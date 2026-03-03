// Problem: Number of Different Integers in a String
// LeetCode: https://leetcode.com/problems/number-of-different-integers-in-a-string/
// Language: javascript
// Runtime: 59 ms
// Memory: 42 MB
// Submitted: 2023-05-23

cl = console.log
var numDifferentIntegers = function (s) {

    s = s.split(/[a-z]/).filter(e => e !== '').map(e => BigInt(e));

    return new Set(s).size
};
