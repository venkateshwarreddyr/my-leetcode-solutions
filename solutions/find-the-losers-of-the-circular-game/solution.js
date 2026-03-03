// Problem: Find the Losers of the Circular Game
// LeetCode: https://leetcode.com/problems/find-the-losers-of-the-circular-game/
// Language: javascript
// Runtime: 95 ms
// Memory: 46.6 MB
// Submitted: 2023-05-20

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let arr = [...new Array(n)].map((_, i) => i)
    let set = new Set(arr);
    
    let curr = 0;
    let x = 0;
    
    while(set.has(curr)){
        set.delete(curr)
        x+=k
        curr+=x
        curr%=n
    }   
    
    
    return [...set].map(e => e+1);
};
