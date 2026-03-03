// Problem: Sum of Squares of Special Elements 
// LeetCode: https://leetcode.com/problems/sum-of-squares-of-special-elements/
// Language: javascript
// Runtime: 90 ms
// Memory: 45.1 MB
// Submitted: 2023-07-16

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n = nums.length
    
    let cc = 0
    
    let i= 1
    for(let e of nums){
        if(n%(i) === 0){
            cc+=e*e
        }
        
        i++
    }
    
    return cc
};
