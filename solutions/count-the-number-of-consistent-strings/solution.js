// Problem: Count the Number of Consistent Strings
// LeetCode: https://leetcode.com/problems/count-the-number-of-consistent-strings/
// Language: javascript
// Runtime: 104 ms
// Memory: 48.4 MB
// Submitted: 2021-12-17

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let counter = 0;
    let counter2 = 0;
    for(let word of words){
        counter2 = 0;
        for(let j of word){
            if(!allowed.includes(j))
                break;
            counter2++;
        }
    if(counter2 === word.length){
        counter++;
    }
    }
    return counter;
};
