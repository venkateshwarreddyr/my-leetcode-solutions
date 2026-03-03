// Problem: Custom Sort String
// LeetCode: https://leetcode.com/problems/custom-sort-string/
// Language: javascript
// Runtime: 64 ms
// Memory: 42.2 MB
// Submitted: 2023-06-30

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let ob = {}
    let i = 0
    for (let c of order) {
        ob[c] = i
        i++
    }

    return s.split("").sort((a, b) => (ob[a] || 0) - (ob[b] || 0)).join("")
};
