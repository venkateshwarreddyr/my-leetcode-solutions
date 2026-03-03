// Problem: Check if All Characters Have Equal Number of Occurrences
// LeetCode: https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
// Language: javascript
// Runtime: 84 ms
// Memory: 41.1 MB
// Submitted: 2021-07-25

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {};
    
    for(let i = 0; i< s.length; i++){
        if(obj[s[i]]){
            obj[s[i]]++
        }else{
            obj[s[i]] = 1
        }
    }
    // let set = new Set(Object.values(obj))
    return new Set(Object.values(obj)).size === 1
};
