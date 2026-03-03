// Problem: Number of Common Factors
// LeetCode: https://leetcode.com/problems/number-of-common-factors/
// Language: javascript
// Runtime: 61 ms
// Memory: 42.2 MB
// Submitted: 2023-05-10

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let c = 0
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i === 0 && b%i === 0){
            c++;
        }
    }
    
    return c;
};
