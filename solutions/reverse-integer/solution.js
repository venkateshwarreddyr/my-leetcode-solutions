// Problem: Reverse Integer
// LeetCode: https://leetcode.com/problems/reverse-integer/
// Language: javascript
// Runtime: 100 ms
// Memory: 39.8 MB
// Submitted: 2021-05-13

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newVal = 0
    let isNegitive = x<0
    const maxInt = Math.pow(2, 31);
    x = Math.abs(x)
    while(x!=0){
        newVal = newVal * 10 + x%10;
        x = Math.floor(x/10)
    }
    if(newVal> maxInt) return 0
    if(isNegitive) return -1*newVal
    return newVal
};
