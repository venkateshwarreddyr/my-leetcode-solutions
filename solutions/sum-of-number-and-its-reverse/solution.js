// Problem: Sum of Number and Its Reverse
// LeetCode: https://leetcode.com/problems/sum-of-number-and-its-reverse/
// Language: javascript
// Runtime: 5603 ms
// Memory: 74.5 MB
// Submitted: 2022-10-16

/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    
    for(let i=0;i<=num;i++){
        if(i+Number(i.toString().split("").reverse().join("")) === num) return true;
    }
    return false;
};
