// Problem: Find the Maximum Length of a Good Subsequence I
// LeetCode: https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/
// Language: javascript
// Runtime: 532 ms
// Memory: 59.2 MB
// Submitted: 2024-06-08

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, kk) {
 
    let mat = new Array(nums.length)
    for(let i=0;i<nums.length; i++) {
        mat[i] = new Array(kk + 1)
    }
    function fn(i, k) {
        if(mat[i][k] !== undefined) return mat[i][k]
        let max = 0
        for(let j = i+1 ; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
              max =   Math.max(max, 1 + fn(j, k))
            } else if(k < kk) {
              max =   Math.max(max, 1+  fn(j, k+1))
            }
        }
        mat[i][k] = max
        return max
    }
       let max = -Infinity
    for(let i = 0; i<nums.length; i++) {
         max =  Math.max(max, 1 + fn(i, 0))
    }
    console.log(mat)
    
    return max
};
