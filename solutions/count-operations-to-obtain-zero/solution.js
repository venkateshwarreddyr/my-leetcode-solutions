// Problem: Count Operations to Obtain Zero
// LeetCode: https://leetcode.com/problems/count-operations-to-obtain-zero/
// Language: javascript
// Runtime: 1 ms
// Memory: 55 MB
// Submitted: 2025-11-09

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let c = 0;
    while(num1 && num2){    
        c++
        if(num1 >= num2){
            num1 -= num2
        } else {
            num2 -= num1
        }
    }
     
    return c;
};
