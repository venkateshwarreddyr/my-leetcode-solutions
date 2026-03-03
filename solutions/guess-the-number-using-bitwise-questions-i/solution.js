// Problem: Guess the Number Using Bitwise Questions I
// LeetCode: https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/
// Language: javascript
// Runtime: 74 ms
// Memory: 54 MB
// Submitted: 2024-04-27

/** 
 * Definition of commonSetBits API.
 * @param {number} num
 * @return {integer}
 * var commonSetBits = function(num) {}
 */

/**
 * @return {number}
 */
var findNumber = function() {
    let num = 0
    for(let i=0;i<32;i++) {
        if(commonSetBits(num) < commonSetBits(num + 2**i)) {
            num = num + 2**i
        }
    }

    return num
};
