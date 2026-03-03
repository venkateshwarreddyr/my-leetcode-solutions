// Problem: Contains Duplicate
// LeetCode: https://leetcode.com/problems/contains-duplicate/
// Language: javascript
// Runtime: 78 ms
// Memory: 55 MB
// Submitted: 2023-05-03

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let nset = new Set(nums);

    return nset.size !== nums.length
};
