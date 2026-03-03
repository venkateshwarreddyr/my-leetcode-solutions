// Problem: Minimum Number of Operations to Make Elements in Array Distinct
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/
// Language: javascript
// Runtime: 10 ms
// Memory: 59.2 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (a) {
    if (!a.length) return 0
    let count = 0
    while ((new Set(a)).size !== a.length) {
        count++
        a.shift()
        a.shift()
        a.shift()
    }
    return count
};
