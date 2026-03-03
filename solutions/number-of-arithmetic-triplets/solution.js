// Problem: Number of Arithmetic Triplets
// LeetCode: https://leetcode.com/problems/number-of-arithmetic-triplets/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.9 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let counter = 0;
    let obj = {};
    
    for(let i=0 ; i<nums.length ; i++){
        obj[nums[i]] = 1
    }
    
    for(let i=0 ; i<nums.length ; i++){
        if(obj[diff+nums[i]] && obj[nums[i]-diff]){
           counter++;
           }
    }
    
    
    return counter;
};
