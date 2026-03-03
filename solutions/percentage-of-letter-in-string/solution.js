// Problem: Percentage of Letter in String
// LeetCode: https://leetcode.com/problems/percentage-of-letter-in-string/
// Language: javascript
// Runtime: 50 ms
// Memory: 41.9 MB
// Submitted: 2023-05-11

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, l) {
    let c = 0;
    
    for(let ch of s){
        if(ch === l){
            c++
        }
    }
    
    return Math.trunc((c/s.length)*100)
};
