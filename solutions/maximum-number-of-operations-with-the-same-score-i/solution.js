// Problem: Maximum Number of Operations With the Same Score I
// LeetCode: https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/
// Language: javascript
// Runtime: 52 ms
// Memory: 50.8 MB
// Submitted: 2024-02-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let cc = 0
    let prev = 0
    while(nums.length) {
        
        let [first, second, ] = nums;
        nums.shift()
        nums.shift()
        
        if(prev ===0 || prev === first + second) {
        cc++
            
            prev = first + second
            continue
        } else {
            break
        }
        
        
    }
    
    return cc
};
