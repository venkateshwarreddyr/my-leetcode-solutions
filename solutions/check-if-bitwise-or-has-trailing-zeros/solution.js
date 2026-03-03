// Problem: Check if Bitwise OR Has Trailing Zeros
// LeetCode: https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/
// Language: javascript
// Runtime: 59 ms
// Memory: 51.3 MB
// Submitted: 2024-04-16

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    let cc = 0
  for(let e of nums) {
      if(e%2 === 0) cc++
  }
    
    if(cc>=2) return true
    return false
};
