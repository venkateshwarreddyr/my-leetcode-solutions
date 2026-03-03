// Problem: Guess Number Higher or Lower
// LeetCode: https://leetcode.com/problems/guess-number-higher-or-lower/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.9 MB
// Submitted: 2022-01-31

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min =1
    let max = n
    while(true){
        let a = ((min+max)/2)
        let x = guess(a)
        if(x===0) return a
        else if(x===1) min = a
        else if(x===-1) max = a
    }
};
