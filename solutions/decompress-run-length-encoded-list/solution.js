// Problem: Decompress Run-Length Encoded List
// LeetCode: https://leetcode.com/problems/decompress-run-length-encoded-list/
// Language: javascript
// Runtime: 88 ms
// Memory: 42.7 MB
// Submitted: 2021-07-24

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for(let i = 0; i< nums.length; i+=2){
        // for(let j = 0; j<nums[i]; j++) arr.push(nums[i+1]);
        arr.push(...new Array(nums[i]).fill(nums[i+1]))
    }
    
    return arr
    
};
