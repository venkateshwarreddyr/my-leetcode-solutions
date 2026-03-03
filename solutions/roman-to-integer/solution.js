// Problem: Roman to Integer
// LeetCode: https://leetcode.com/problems/roman-to-integer/
// Language: javascript
// Runtime: 124 ms
// Memory: 46.7 MB
// Submitted: 2023-08-15

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0;
    let obj = {
        "I" :   1,
        "V" :   5,
        "X" :   10,
        "L" :   50,
        "C" :   100,
        "D" :   500,
        "M" :   1000
    }
    for(let i = s.length-1; i>=0; i--){
        if(obj[s[i]]<obj[s[i+1]])
            count-=obj[s[i]]
        else
            count+=obj[s[i]]
    }
    return count
};
