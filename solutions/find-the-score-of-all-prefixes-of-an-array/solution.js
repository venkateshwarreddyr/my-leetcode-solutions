// Problem: Find the Score of All Prefixes of an Array
// LeetCode: https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/
// Language: javascript
// Runtime: 219 ms
// Memory: 73.1 MB
// Submitted: 2023-06-06

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    let ans = [];
    let conver = [];
    let max = -Infinity;
    for(let i=0;i<nums.length;i++){
        max = Math.max(max, nums[i])
        conver[i] = nums[i] + max;
        conver[i] += (conver[i-1] || 0 )
    }
    console.log(conver)
    
    return conver;
};
