// Problem: Remove Digit From Number to Maximize Result
// LeetCode: https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.6 MB
// Submitted: 2023-06-05

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (s, digit) {
    let n = s.length
    let ind = -1
    for (let i = 0; i < n; i++) {
        if (s[i] === digit && s[i + 1] > digit) {
             return s.slice(0, i) + s.slice(i + 1)
        } else if (s[i] === digit) {
            ind = i
        }
    }
    
    if (ind > -1) {
        return s.slice(0, ind) + s.slice(ind + 1)
    }
};
