// Problem: Make Array Zero by Subtracting Equal Amounts
// LeetCode: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
// Language: javascript
// Runtime: 70 ms
// Memory: 41.5 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set(nums);
    
    set.delete(0)
    
    return set.size
};
