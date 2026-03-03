// Problem: Array Reduce Transformation
// LeetCode: https://leetcode.com/problems/array-reduce-transformation/
// Language: javascript
// Runtime: 58 ms
// Memory: 42.3 MB
// Submitted: 2023-12-13

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
     nums.forEach((e) => {
         init = fn(init, e)
     })

     return init
};
