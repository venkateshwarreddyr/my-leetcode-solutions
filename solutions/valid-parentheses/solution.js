// Problem: Valid Parentheses
// LeetCode: https://leetcode.com/problems/valid-parentheses/
// Language: javascript
// Runtime: 59 ms
// Memory: 42.5 MB
// Submitted: 2023-08-15

/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    const stArr = []
    const obj = {
        '(':')',
        '[': ']',
        '{':'}'
    }
    let sarr =  s.split('')
    for(let e = 0; e< sarr.length; e++){
        if(obj[sarr[e]]){
            stArr.push(sarr[e])
        }else{
            if(obj[stArr.pop()] !== sarr[e]){
                return false;
            }
        }
    }
    return stArr.length ? false: true
};
