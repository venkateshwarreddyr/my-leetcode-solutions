// Problem: Maximum Count of Positive Integer and Negative Integer
// LeetCode: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/
// Language: javascript
// Runtime: 60 ms
// Memory: 44.8 MB
// Submitted: 2023-05-11

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;
    
    for(let num of nums){
        if(num>0) pos++
        else if(num<0) neg++
    }
    
    return Math.max(pos, neg)
};
