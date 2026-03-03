// Problem: Factorial Trailing Zeroes
// LeetCode: https://leetcode.com/problems/factorial-trailing-zeroes/
// Language: javascript
// Runtime: 84 ms
// Memory: 40.3 MB
// Submitted: 2021-08-05

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let counter = 0;
    // let x = 5;
    while(n>=5){
        // if(x===n) counter++
    counter+=Math.floor(n/5);
        n = Math.floor(n/5);
    }
    // counter += Math.floor(n/25);
    // counter += Math.floor(n/125);
    // counter += Math.floor(n/125);
    // let N = n;
    // while(N>=25){
    //     counter++;
    //     N-=25;
    // }
    // while(n>=5){
    //     counter++;
    //     n-=5;
    // }
    return counter;
};
