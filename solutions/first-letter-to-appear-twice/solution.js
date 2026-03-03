// Problem: First Letter to Appear Twice
// LeetCode: https://leetcode.com/problems/first-letter-to-appear-twice/
// Language: javascript
// Runtime: 58 ms
// Memory: 42.4 MB
// Submitted: 2023-05-10

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let ob = {}
    
    for(let c of s){
        if(ob[c]) return c
        ob[c] = true
    }
    
    return ""
};
