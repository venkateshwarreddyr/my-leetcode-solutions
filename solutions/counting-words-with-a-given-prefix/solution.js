// Problem: Counting Words With a Given Prefix
// LeetCode: https://leetcode.com/problems/counting-words-with-a-given-prefix/
// Language: javascript
// Runtime: 60 ms
// Memory: 42.5 MB
// Submitted: 2023-05-10

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let c = 0;
    
    for(let word of words){
        if(word.startsWith(pref)) c++
    }
    
    return c;
};
