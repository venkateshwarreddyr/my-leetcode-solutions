// Problem: Missing Number
// LeetCode: https://leetcode.com/problems/missing-number/
// Language: javascript
// Runtime: 120 ms
// Memory: 40.5 MB
// Submitted: 2021-06-05

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // let n= nums.length;
    // return (n*(n+1)/2) - nums.reduce((a,c) => a+c, 0);
    let sum = nums.length
    for(let i = 0;i<nums.length;i++){
       sum^= nums[i]^i
    }
    // sum^=
    return sum
};
