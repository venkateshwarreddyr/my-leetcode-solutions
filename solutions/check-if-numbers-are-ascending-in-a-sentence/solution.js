// Problem: Check if Numbers Are Ascending in a Sentence
// LeetCode: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
// Language: javascript
// Runtime: 80 ms
// Memory: 41.4 MB
// Submitted: 2021-10-17

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    x = s.split(' ').filter(e => !isNaN(e)).map(e => Number(e));
    x.push(99999)
    console.log({x})
    for(let i = 0;i<x.length-1;i++){
        if(x[i]>=x[i+1]) return false
    }
    return true
};
