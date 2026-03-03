// Problem: Palindrome Number
// LeetCode: https://leetcode.com/problems/palindrome-number/
// Language: javascript
// Runtime: 147 ms
// Memory: 49.8 MB
// Submitted: 2023-08-15

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let tempX = x;
    let temp = 0;
    while(x!=0){
        temp=(temp*10+x%10);
        x = Math.trunc(x/10)
    }
    return tempX === temp
};
