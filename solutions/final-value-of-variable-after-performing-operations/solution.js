// Problem: Final Value of Variable After Performing Operations
// LeetCode: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
// Language: javascript
// Runtime: 4 ms
// Memory: 55.2 MB
// Submitted: 2025-10-20

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let v = 0;
    for(let s of operations){
        if(s.includes('--')) v--
        else v++
        
    }
    return v
};
