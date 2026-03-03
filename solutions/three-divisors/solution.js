// Problem: Three Divisors
// LeetCode: https://leetcode.com/problems/three-divisors/
// Language: javascript
// Runtime: 80 ms
// Memory: 38.9 MB
// Submitted: 2021-08-04

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let counter = 0;
    let NUMBER_DIVISORS = 3;
    
    for(let i=1; i<=n; i++){
        if(n%i === 0) counter++;
        if(counter === NUMBER_DIVISORS && i != n) return false; 
        if(counter === NUMBER_DIVISORS && i === n) return true; 
    }
    return false;
};
