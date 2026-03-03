// Problem: Subtract the Product and Sum of Digits of an Integer
// LeetCode: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Language: javascript
// Runtime: 76 ms
// Memory: 38.7 MB
// Submitted: 2021-07-24

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    let x;
    while(n!=0){
        x = n%10;
        sum+=x;
        product*=x;
        n=parseInt(n/10);
    }
    return product-sum
};
