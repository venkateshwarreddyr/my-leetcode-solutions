// Problem: Reverse String
// LeetCode: https://leetcode.com/problems/reverse-string/
// Language: javascript
// Runtime: 73 ms
// Memory: 56.7 MB
// Submitted: 2024-06-02

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    let n = s.length -1;
    for (let i = 0; i < n / 2; i++) {
        let temp = s[i];
        s[i] = s[n - i];
        s[n - i] = temp
    }
    return s;
};
