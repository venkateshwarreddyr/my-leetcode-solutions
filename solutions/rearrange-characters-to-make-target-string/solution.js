// Problem: Rearrange Characters to Make Target String
// LeetCode: https://leetcode.com/problems/rearrange-characters-to-make-target-string/
// Language: javascript
// Runtime: 60 ms
// Memory: 43.1 MB
// Submitted: 2023-05-24

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, t) {
    let o = {}
    for (let c of s) {
        o[c] = o[c] || 0
        o[c]++
    }


    let ob = {}
    for (let c of t) {
        ob[c] = ob[c] || 0
        ob[c]++
    }

    let an = Infinity;

    for (let k in ob) {
        an = Math.min(an, Math.floor((o[k] || 0) / ob[k]))
    }

    return an;
};
