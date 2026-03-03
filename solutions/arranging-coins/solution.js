// Problem: Arranging Coins
// LeetCode: https://leetcode.com/problems/arranging-coins/
// Language: javascript
// Runtime: 124 ms
// Memory: 40.4 MB
// Submitted: 2021-08-07

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    i=1;
    while(n>=i){
        n-=i;
        i++;
    }
    return i-1;
};
