// Problem: Count the Number of Vowel Strings in Range
// LeetCode: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/
// Language: javascript
// Runtime: 78 ms
// Memory: 45.8 MB
// Submitted: 2023-03-12

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    let v = "aeiou"
    while(left<=right){
        let word = words[left];
        if(v.includes(word[0]) && v.includes(word[word.length-1])) {
            count++;
        } 
        left++
    }
    
    return count;
};
