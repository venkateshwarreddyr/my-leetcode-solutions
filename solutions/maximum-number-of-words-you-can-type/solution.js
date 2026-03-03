// Problem: Maximum Number of Words You Can Type
// LeetCode: https://leetcode.com/problems/maximum-number-of-words-you-can-type/
// Language: javascript
// Runtime: 80 ms
// Memory: 39.6 MB
// Submitted: 2021-07-18

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ");
    let counter = 0;
    for(let word of text){
        let count = 0
        for(let i = 0; i< word.length; i++){
            if(!brokenLetters.includes(word[i])){
                count++
            }
        }
        if(count === word.length) counter++
    }
    return counter;
};
