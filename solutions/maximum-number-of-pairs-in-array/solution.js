// Problem: Maximum Number of Pairs in Array
// LeetCode: https://leetcode.com/problems/maximum-number-of-pairs-in-array/
// Language: javascript
// Runtime: 62 ms
// Memory: 42.4 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let n = nums.length;
    let ob = {};
    let an = 0;
    
    for(let num of nums){
       if(ob[num]){
           delete ob[num];
           an++
       } else {
           ob[num] = true
       }
        
        
    }
    
    
    return [an, Object.keys(ob).length];
};
