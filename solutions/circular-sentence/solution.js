// Problem: Circular Sentence
// LeetCode: https://leetcode.com/problems/circular-sentence/
// Language: javascript
// Runtime: 88 ms
// Memory: 42.1 MB
// Submitted: 2022-12-21

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let words = sentence.split(" ");
    let n = words.length;
    for(let i=0;i<n;i++){
        if(words[(i+1)%n][0] !== words[i][words[i].length-1]) return false;
    }
    
    return true;
};
