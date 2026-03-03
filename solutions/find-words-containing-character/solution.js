// Problem: Find Words Containing Character
// LeetCode: https://leetcode.com/problems/find-words-containing-character/
// Language: javascript
// Runtime: 66 ms
// Memory: 45.1 MB
// Submitted: 2023-11-25

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let an = []
        
    let i = 0
    for(let word of words) {
        if(word.includes(x)) {
            an.push(i)
        }
        
        i++
    }
    
    return an;
};
