// Problem: Repeated Substring Pattern
// LeetCode: https://leetcode.com/problems/repeated-substring-pattern/
// Language: javascript
// Runtime: 1140 ms
// Memory: 48.7 MB
// Submitted: 2023-04-26

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length> 1) {
    for(let i=0;i<s.length/2;i++){
        let subS = s.slice(0, i+1)
        // console.log(s.split(subS), subS)
        if(!s.split(subS).join("").length){
           return true; 
        }
    }}
    return false;
};
