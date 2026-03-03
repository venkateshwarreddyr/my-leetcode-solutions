// Problem: Split the Array
// LeetCode: https://leetcode.com/problems/split-the-array/
// Language: javascript
// Runtime: 65 ms
// Memory: 51.1 MB
// Submitted: 2024-02-25

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    nums.sort((a, b) => a-b)
    let n = nums.length
    for(let i=0;i<n-1;i++) {
        if(nums[i] === nums[i+2]){
            return false
        }
    }
    
    return true
};
