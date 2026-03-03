// Problem: Count the Number of Special Characters I
// LeetCode: https://leetcode.com/problems/count-the-number-of-special-characters-i/
// Language: javascript
// Runtime: 188 ms
// Memory: 57.4 MB
// Submitted: 2024-04-21

/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(s) {
    let cap = new Set();
    let sm = new Set();
    let cc = 0
    
    for(let c of s) {
     
            if(c === c.toUpperCase())
            cap.add(c)
             if(c === c.toLowerCase())
            sm.add(c)
      
        
    }
    console.log({cap, sm})
    for(let c of 'abcdefghijklmnopqrstuvwxyz') {
        console.log(c.toUpperCase())
        if(cap.has(c.toUpperCase()) && sm.has(c)) {
            cc++
        }
    }
    
    return cc
};
