// Problem: Minimum Operations to Make the Array Increasing
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
// Language: javascript
// Runtime: 59 ms
// Memory: 44 MB
// Submitted: 2023-02-18

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]>=nums[i]){
            let c=nums[i-1]-nums[i]+1;
            nums[i] += c;
            count+=c;
        }
    }

    return count;
};
