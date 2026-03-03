// Problem: Check If String Is a Prefix of Array
// LeetCode: https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
// Language: javascript
// Runtime: 68 ms
// Memory: 40.6 MB
// Submitted: 2021-08-08

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    // console.log(s.indexOf(words.join('')), words.join(''), s)
    // words = words.join('');
    for(let i =1;i<=words.length;i++){
        // if(s[i]!=words[i]) return false;
        // console.log(words.slice(0,i))
        if(words.slice(0,i).join('') === s) return true
    }
    return false
};
