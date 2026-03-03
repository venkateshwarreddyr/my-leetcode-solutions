// Problem: Adding Spaces to a String
// LeetCode: https://leetcode.com/problems/adding-spaces-to-a-string/
// Language: javascript
// Runtime: 54 ms
// Memory: 96.6 MB
// Submitted: 2025-10-15

/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let an = [] // result

    let prev = 0
    for (let e of spaces) {
        an.push(s.slice(prev, e))
        prev = e
    }
    an.push(s.slice(prev))

    return an.join(' ')
};
