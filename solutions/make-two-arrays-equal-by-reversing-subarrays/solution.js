// Problem: Make Two Arrays Equal by Reversing Subarrays
// LeetCode: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
// Language: javascript
// Runtime: 72 ms
// Memory: 44.8 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    
    return target.sort((a,b) => (b-a)).toString() === arr.sort((a,b) => (b-a)).toString()
};
