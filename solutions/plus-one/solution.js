// Problem: Plus One
// LeetCode: https://leetcode.com/problems/plus-one/
// Language: javascript
// Runtime: 0 ms
// Memory: 53 MB
// Submitted: 2026-01-01

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // if(digits[digits.length-1]!==9) digits[digits.length-1]+=1
    // else{
    //     digits[digits.length-1] = 1
    //     digits.push(0)
    // }
    for(let j=digits.length-1; j!=-1;j--){
        if(digits[j]===9){
            digits[j] = 0
            if(j===0){
                digits.unshift(1);
                return digits;
            }
        }
        else{
            digits[j]+=1
            return digits
        }
    }
    return digits;
    // return (Number(digits.join(""))+1).toString().split('');
};
