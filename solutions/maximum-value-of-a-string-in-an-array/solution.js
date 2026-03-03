// Problem: Maximum Value of a String in an Array
// LeetCode: https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
// Language: javascript
// Runtime: 97 ms
// Memory: 41.9 MB
// Submitted: 2022-12-20

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    
    for(let str of strs){
        let len = Number(str)
        if(isNaN(len)){
            max = str.length>max ? str.length : max;
        } else {
            max = len>max ? len : max
        }
    }
    
    return max;
};
