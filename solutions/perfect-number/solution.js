// Problem: Perfect Number
// LeetCode: https://leetcode.com/problems/perfect-number/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.4 MB
// Submitted: 2022-02-07

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1) return false;
    let sum=1
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            sum=sum+i+ num / i
            
        }
    }
    return sum===num
};
