// Problem: Relative Sort Array
// LeetCode: https://leetcode.com/problems/relative-sort-array/
// Language: javascript
// Runtime: 54 ms
// Memory: 49.4 MB
// Submitted: 2024-06-11

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let obj = {}

    let n = arr1.length
    arr2.forEach((e, i) => obj[e] = i)
    arr1.forEach((e, i) => obj[e] = obj[e] ?? n + e)

    arr1.sort((a, b) => (obj[a]) - (obj[b]))

    return arr1
};
