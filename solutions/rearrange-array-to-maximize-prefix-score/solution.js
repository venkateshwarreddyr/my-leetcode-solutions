// Problem: Rearrange Array to Maximize Prefix Score
// LeetCode: https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
// Language: javascript
// Runtime: 232 ms
// Memory: 56 MB
// Submitted: 2023-06-07

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    nums = nums.sort((a, b) => b-a);
    
    let count = 0;
    
    if(nums[0]>0){
        count++
    }
    else {
        return 0;
    }
    
    for(let i=1;i<nums.length;i++){
        nums[i] += nums[i-1]
        if(nums[i]>0) count++
    }
    
    return count;
};
