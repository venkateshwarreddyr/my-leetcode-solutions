// Problem: Remove Element
// LeetCode: https://leetcode.com/problems/remove-element/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-06-30

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let i = 0;
    for(let num of nums){
        if(num !== val){
            nums[i] = num;
            i++
        }
    }

    return i
};
