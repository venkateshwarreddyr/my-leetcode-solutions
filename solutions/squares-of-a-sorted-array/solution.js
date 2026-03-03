// Problem: Squares of a Sorted Array
// LeetCode: https://leetcode.com/problems/squares-of-a-sorted-array/
// Language: javascript
// Runtime: 108 ms
// Memory: 45.8 MB
// Submitted: 2021-08-07

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i =0;i< nums.length;i++){
        nums[i] = nums[i] **2
    }
    return nums.sort((a,b) => a-b)
    // return nums.map(e => e**2).sort((a,b) => a-b)
};
