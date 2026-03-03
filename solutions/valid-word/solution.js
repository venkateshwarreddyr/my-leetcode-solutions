// Problem: Valid Word
// LeetCode: https://leetcode.com/problems/valid-word/
// Language: javascript
// Runtime: 68 ms
// Memory: 52 MB
// Submitted: 2024-05-05

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<3) return false
    let hasVowels = false
    for(let c of "aeiouAEIOU") {
        if(word.includes(c))hasVowels = true
    }
    if(!hasVowels) return false
    
        let hasConstant = false
    for(let c of "bcdfghjklmnpqrstvwxyz"+"bcdfghjklmnpqrstvwxyz".toUpperCase()) {
        if(word.includes(c))hasConstant = true
    }
    if(!hasConstant) return false
    // bcdfghjklmnpqrstvwxyz
    
        
    
        for(let c of "@#$") {
        if(word.includes(c)) return false
        }
    
    return true
    
};
