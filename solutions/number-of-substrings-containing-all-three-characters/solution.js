// Problem: Number of Substrings Containing All Three Characters
// LeetCode: https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
// Language: javascript
// Runtime: 1151 ms
// Memory: 62.7 MB
// Submitted: 2023-07-04

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let n = s.length
    let a = 0, b = 0, c = 0
    let cc = 0

    for (let i = 0, j = 0; i < n; i++) {
        if (s[i] === 'a') a++
        if (s[i] === 'b') b++
        if (s[i] === 'c') c++

        while (a > 0 && b > 0 && c > 0) {
            cc += s.length - i;
            if (s[j] === 'a') a--
            if (s[j] === 'b') b--
            if (s[j] === 'c') c--
            j++
        }
        cl(cc)
    }

    return cc;
};
