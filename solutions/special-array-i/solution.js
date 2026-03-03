// Problem: Special Array I
// LeetCode: https://leetcode.com/problems/special-array-i/
// Language: javascript
// Runtime: 73 ms
// Memory: 50.7 MB
// Submitted: 2024-05-19

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let prev = nums[0] % 2 === 0
    let n = nums.length
    
    for(let i=1;i<n;i++) {
        let curr = nums[i] % 2 === 0
        if(prev === curr) return false
        prev = curr
    }
    
    return true
};
