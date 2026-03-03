// Problem: Find Minimum Operations to Make All Elements Divisible by Three
// LeetCode: https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/
// Language: javascript
// Runtime: 0 ms
// Memory: 56.8 MB
// Submitted: 2025-11-22

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let an = 0
    
    for(let e of nums) {
        let x = e % 3
        let y = 3 - x
        
        an+=(Math.min(x, y))
    }
    
    return an
};
