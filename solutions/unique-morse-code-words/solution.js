// Problem: Unique Morse Code Words
// LeetCode: https://leetcode.com/problems/unique-morse-code-words/
// Language: javascript
// Runtime: 68 ms
// Memory: 40.5 MB
// Submitted: 2021-07-17

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let Alf = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let newMapp = new Set();
    let str;
    for(let word of words){
        str = '';
        for(let i = 0; i< word.length;i++){
            str+=Alf[word.charCodeAt(i)-97]
        }
        newMapp.add(str)
    }
    return newMapp.size
};
