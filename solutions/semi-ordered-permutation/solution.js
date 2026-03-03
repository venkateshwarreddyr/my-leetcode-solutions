// Problem: Semi-Ordered Permutation
// LeetCode: https://leetcode.com/problems/semi-ordered-permutation/
// Language: javascript
// Runtime: 96 ms
// Memory: 45.9 MB
// Submitted: 2023-06-04

/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    let n = nums.length
    let indexOne = nums.indexOf(1)
    let indexN = nums.indexOf(n)
    if(nums.slice(0, indexOne).includes(n)){
        indexN++
    }
    return indexOne + n - indexN -1
};
