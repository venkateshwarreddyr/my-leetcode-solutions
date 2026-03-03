// Problem: Split a String in Balanced Strings
// LeetCode: https://leetcode.com/problems/split-a-string-in-balanced-strings/
// Language: javascript
// Runtime: 80 ms
// Memory: 38.5 MB
// Submitted: 2021-06-07

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let innerCounter = 0, outerCounter =0;
    for(let i =0;i<s.length;i++){
        // if(s.charAt(i) == 'R') {
        if(s[i] == 'R') {
            innerCounter++;
        }else{
            innerCounter--;
        }
        if(innerCounter == 0) outerCounter++;
    }
    return outerCounter;
};
