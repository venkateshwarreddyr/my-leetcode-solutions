// Problem: Replace Elements in an Array
// LeetCode: https://leetcode.com/problems/replace-elements-in-an-array/
// Language: javascript
// Runtime: 318 ms
// Memory: 123.5 MB
// Submitted: 2023-11-03

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (a, operations) {
    let ob = {}
    let n = a.length

    for (let i = 0; i < n; i++) {
        ob[a[i]] = i
    }

    for (let [e, ne] of operations) {
        ob[ne] = ob[e]
        delete ob[e]
    }

    for (let [key, value] of Object.entries(ob)) {
        a[value] = +key
    }

    return a
};
