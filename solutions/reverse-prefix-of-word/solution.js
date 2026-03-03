// Problem: Reverse Prefix of Word
// LeetCode: https://leetcode.com/problems/reverse-prefix-of-word/
// Language: javascript
// Runtime: 57 ms
// Memory: 49.5 MB
// Submitted: 2024-05-01

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    arr = word.split(ch);
    if(arr.length===1) return arr[0]
    // console.log(arr)
    arr[0] = arr[0].split('').reverse().join('');
    let len = arr[0].length
    str =  (ch+arr.join(ch)).split('');
    // console.log(str)
    
    return str.splice(0, len+1).concat(str.splice(1)).join('')
};
