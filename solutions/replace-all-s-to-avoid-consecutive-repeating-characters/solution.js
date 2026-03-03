// Problem: Replace All ?'s to Avoid Consecutive Repeating Characters
// LeetCode: https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
// Language: javascript
// Runtime: 60 ms
// Memory: 44 MB
// Submitted: 2023-06-05

/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let a = "qwertyuiopasdfghjklzxcvbnm"
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?')
            for (let c of a) {
                if (s[i - 1] !== c && (s[i + 1] !== c)) {
                    s[i] = c
                    break;
                }
            }
    }

    return s.join("")
};
