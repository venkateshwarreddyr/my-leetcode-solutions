// Problem: Maximum Alternating Subsequence Sum
// LeetCode: https://leetcode.com/problems/maximum-alternating-subsequence-sum/
// Language: javascript
// Runtime: 116 ms
// Memory: 51.5 MB
// Submitted: 2021-06-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let i = 0;
    let ans = 0;
    let min = 0;
    while(i<nums.length){
    while(i<nums.length-1&&nums[i]<nums[i+1]){
        i++
    }
    
    ans+=(nums[i]-min)
        i++
    while(i<nums.length-1&&nums[i]>nums[i+1]){
        i++
    }
    min = nums[i]
      
    }
    return ans
};
