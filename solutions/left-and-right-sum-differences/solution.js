// Problem: Left and Right Sum Differences
// LeetCode: https://leetcode.com/problems/left-and-right-sum-differences/
// Language: javascript
// Runtime: 85 ms
// Memory: 48.6 MB
// Submitted: 2023-02-26

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let leftSum = new Array(nums.length).fill(0);
    let rightSum = new Array(nums.length).fill(0);
    
    for(let i=1;i<nums.length;i++){
        leftSum[i] += (leftSum[i-1]+nums[i-1])
    }
        
    for(let i=nums.length-2;i>=0;i--){
        rightSum[i] += (rightSum[i+1]+nums[i+1])
    }
    
    console.log({leftSum, rightSum})
    
    let ans = [];
    for(let i=0;i<nums.length;i++){
        ans.push(Math.abs(leftSum[i]-rightSum[i]));
    }
    
    return ans;
};
