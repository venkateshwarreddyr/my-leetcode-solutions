// Problem: Sum of Variable Length Subarrays
// LeetCode: https://leetcode.com/problems/sum-of-variable-length-subarrays/
// Language: javascript
// Runtime: 1 ms
// Memory: 51 MB
// Submitted: 2025-01-19

/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let t = 0
    let n = nums.length

    for(let i = 0; i< n ;  i++) {
        let s = 0;

        for( let j = Math.max(0, i - nums[i]); j<=i; j++) {
            s += nums[j]
        }

        t+=s
    }
    
    return t
    
};
