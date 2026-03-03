// Problem: Target Sum
// LeetCode: https://leetcode.com/problems/target-sum/
// Language: javascript
// Runtime: 252 ms
// Memory: 53.9 MB
// Submitted: 2023-05-01

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const dp = {};
    
    const backtrack = (i, total) => {
        if(i === nums.length){
            return total === target ? 1 : 0;
        }
        const k = i+','+total;
        if(dp[k] !== undefined) return dp[k]
        dp[k] = backtrack(i+1, total+nums[i]) +backtrack(i+1,  total-nums[i])
        return dp[k]
    }
    console.log(dp)
    return backtrack(0, 0);
};
