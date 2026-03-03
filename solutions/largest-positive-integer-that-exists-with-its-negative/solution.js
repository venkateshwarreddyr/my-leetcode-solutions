// Problem: Largest Positive Integer That Exists With Its Negative
// LeetCode: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// Language: javascript
// Runtime: 96 ms
// Memory: 44.7 MB
// Submitted: 2022-10-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums = nums.sort((a, b) => b-a);
    
    for(let i=0;i<nums.length;i++){
        if(nums.includes(nums[i]*-1)){
            return nums[i];
        }
    }
    
    return -1;
};
