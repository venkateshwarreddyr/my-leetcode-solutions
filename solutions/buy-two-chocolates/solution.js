// Problem: Buy Two Chocolates
// LeetCode: https://leetcode.com/problems/buy-two-chocolates/
// Language: javascript
// Runtime: 96 ms
// Memory: 47 MB
// Submitted: 2023-05-27

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(p, m) {
    
    p.sort((a,b) => a-b);
    
    if(p[0]+p[1] <=m){
        return m-p[0]-p[1]
    }
    
    return m
};
