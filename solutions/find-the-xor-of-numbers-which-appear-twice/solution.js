// Problem: Find the XOR of Numbers Which Appear Twice
// LeetCode: https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/
// Language: javascript
// Runtime: 78 ms
// Memory: 50.9 MB
// Submitted: 2024-05-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let set = new Set()
    let an = 0
    
    for(let e of nums) {
        if(set.has(e)) {
            an = an ^ e
        } else {
            set.add(e)
        }
    }
    
    return an
};
