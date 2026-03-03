// Problem: Find and Replace Pattern
// LeetCode: https://leetcode.com/problems/find-and-replace-pattern/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.6 MB
// Submitted: 2023-06-24

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    function fn(w) {
        let ob = {}
        let nw = []
        let i = 1
        for (let c of w) {
            if (ob[c]) {
                nw.push(ob[c])
            } else {
                ob[c] = i
                nw.push(ob[c])
                i++
            }
        }
        return nw.toString()
    }

    let p = fn(pattern)

    let an = []
    for (let word of words) {
        w = fn(word)
        if (w === p) {
            an.push(word)
        }
    }

    return an;
};
