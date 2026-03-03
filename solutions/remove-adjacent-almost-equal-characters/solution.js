// Problem: Remove Adjacent Almost-Equal Characters
// LeetCode: https://leetcode.com/problems/remove-adjacent-almost-equal-characters/
// Language: javascript
// Runtime: 65 ms
// Memory: 43.1 MB
// Submitted: 2023-12-09

/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(a) {
    let n = a.length
    let cc = 0
    for(let i=0;i<a.length-1;i++) {
        if(a[i] === a[i+1]){
            i++
            cc++
        } else if(a.charCodeAt(i) + 1 === a.charCodeAt(i+1) || a.charCodeAt(i) === a.charCodeAt(i+1) + 1) {
            i++
            cc++
        }
    }
    
    return cc
    
};
