// Problem: Bulls and Cows
// LeetCode: https://leetcode.com/problems/bulls-and-cows/
// Language: javascript
// Runtime: 7 ms
// Memory: 54.9 MB
// Submitted: 2025-07-04

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (s, g) {
    let n = s.length
    let cows = 0
    let bulls = 0
    let ob = {}
    for (i = 0; i < n; i++) {
        ob[s[i]] = ob[s[i]] || 0
        ob[s[i]]++

        if (s[i] === g[i]) {
            bulls++
            ob[s[i]]--
        }
    }
    for (i = 0; i < n; i++) {
        if (s[i] !== g[i]) {
            if (ob[g[i]]) {
                cows++
                ob[g[i]]--
            }
        }
    }
    return `${bulls}A${cows}B`
};
