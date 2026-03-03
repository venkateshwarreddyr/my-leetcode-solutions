// Problem: Concatenation of Array
// LeetCode: https://leetcode.com/problems/concatenation-of-array/
// Language: javascript
// Runtime: 96 ms
// Memory: 42.5 MB
// Submitted: 2021-07-11

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};
