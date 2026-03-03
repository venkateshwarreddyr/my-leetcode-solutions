// Problem: Single Number
// LeetCode: https://leetcode.com/problems/single-number/
// Language: javascript
// Runtime: 96 ms
// Memory: 39.5 MB
// Submitted: 2021-05-30

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj;
    nums.forEach(e => {
            obj = obj ^ e
    })
    return obj
};
