// Problem: Check if Number is a Sum of Powers of Three
// LeetCode: https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/
// Language: javascript
// Runtime: 67 ms
// Memory: 41.9 MB
// Submitted: 2023-01-08

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let arr = [];
    
    for(let i=16;i>=0;i--){
        arr.push(Math.pow(3, i));
    }

    for(let num of arr){
        if(n>=num) n-=num;
    }
    
    return n==0;
};
