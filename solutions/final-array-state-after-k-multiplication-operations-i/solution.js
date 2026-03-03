// Problem: Final Array State After K Multiplication Operations I
// LeetCode: https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/
// Language: javascript
// Runtime: 1 ms
// Memory: 58 MB
// Submitted: 2025-06-14

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    
    for(let times = 0; times < k ; times++) {
        let min = Math.min(...nums)

        let index = nums.indexOf(min)

        nums[index] *= multiplier
        
    }

    return nums
};
