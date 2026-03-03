// Problem: Redistribute Characters to Make All Strings Equal
// LeetCode: https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
// Language: javascript
// Runtime: 100 ms
// Memory: 41.3 MB
// Submitted: 2021-06-14

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let counter = {}
    for(let word of words){
        for(let char of word){
            counter[char] = (counter[char]||0)+1
        }
    }
    for(let values of Object.values(counter)){
        if(values%words.length){
            return false;
        }
    }
    return true;
};
