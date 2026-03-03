// Problem: Separate the Digits in an Array
// LeetCode: https://leetcode.com/problems/separate-the-digits-in-an-array/
// Language: javascript
// Runtime: 106 ms
// Memory: 48.3 MB
// Submitted: 2023-02-04

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.reduce((a, c) => [...a, ...c.toString().split("")], []);
};
