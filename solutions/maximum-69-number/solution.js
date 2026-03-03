// Problem: Maximum 69 Number
// LeetCode: https://leetcode.com/problems/maximum-69-number/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.3 MB
// Submitted: 2025-08-16

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let num1 = num
    let noofdig = 0
    let noofdig1=0
    let revnum = 0
    while(num!=0){
        revnum = revnum * 10 + (num%10)
        num= Math.floor(num/10)
        noofdig++
    }
    
     while(revnum!=0){
        if(revnum%10 === 6) {
            return num1 + 3*Math.pow(10, (noofdig-noofdig1-1))
        }
        revnum= Math.floor(revnum/10)
        noofdig1++
    }
    // if(noofdig>noofdig1){
    //     num1 = num1 + 3*Math.pow(10, (noofdig-noofdig1-1))
    // }
    
    return num1
    
    
};
