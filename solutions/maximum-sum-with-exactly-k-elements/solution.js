// Problem: Maximum Sum With Exactly K Elements 
// LeetCode: https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/
// Language: javascript
// Runtime: 124 ms
// Memory: 48.6 MB
// Submitted: 2023-05-23

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums = nums.sort((a,b) => b-a);
    let sum = 0;
    while(k!=0){
        // console.log({sum, nums})
        sum+=(nums[0])
        nums[0]++;
        k--;
    }
    
    return sum;
};
