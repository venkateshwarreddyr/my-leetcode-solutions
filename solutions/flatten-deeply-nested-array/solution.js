// Problem: Flatten Deeply Nested Array
// LeetCode: https://leetcode.com/problems/flatten-deeply-nested-array/
// Language: javascript
// Runtime: 91 ms
// Memory: 64.5 MB
// Submitted: 2023-12-13

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let a = []

    function fn(arr, n) {
        for (let e of arr) {
            if (Array.isArray(e) && n) {
                fn(e, n - 1)
            } else {
                a.push(e)
            }
        }
    }

    fn(arr, n)

    return a
};
