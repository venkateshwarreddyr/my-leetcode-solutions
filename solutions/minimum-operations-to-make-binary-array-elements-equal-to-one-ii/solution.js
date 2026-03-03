// Problem: Minimum Operations to Make Binary Array Elements Equal to One II
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/
// Language: javascript
// Runtime: 94 ms
// Memory: 59.2 MB
// Submitted: 2024-06-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let counter = 0
    
    for(let e of nums) {
        let x = counter%2 === 0
        let y = e %2 === 0
        if(x === y) {
            counter++
        }
    }
    
    return counter
};
