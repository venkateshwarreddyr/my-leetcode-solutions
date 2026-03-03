// Problem: Apply Bitwise Operations to Make Strings Equal
// LeetCode: https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/
// Language: javascript
// Runtime: 67 ms
// Memory: 45.7 MB
// Submitted: 2023-06-09

var makeStringsEqual = function (s, t) {
    let shas1 = (s.indexOf('1') !== -1)
    let thas1 = (t.indexOf('1') !== -1)

    return shas1 === thas1
};

