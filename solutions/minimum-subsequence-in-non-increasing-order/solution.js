// Problem: Minimum Subsequence in Non-Increasing Order
// LeetCode: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
// Language: javascript
// Runtime: 74 ms
// Memory: 44.5 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let n = nums.length;
    let tsum = nums.reduce((a,c) => a+c, 0);
    let an = [];
    
    nums = nums.sort((a,b) => b-a);
    let sum = 0;
    for(let num of nums){
        if(sum <= (tsum-sum)){
            an.push(num)
            sum+=num
        } else {
            break;
        }
    }
    
    return an;
    
};
