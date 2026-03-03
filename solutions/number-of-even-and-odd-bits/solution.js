// Problem: Number of Even and Odd Bits
// LeetCode: https://leetcode.com/problems/number-of-even-and-odd-bits/
// Language: javascript
// Runtime: 79 ms
// Memory: 44.7 MB
// Submitted: 2023-03-25

/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
     n = n.toString(2).split('').reverse().join('');
    let arr = [0, 0]
    for(let i = 0;i<n.length;i++){
        if(Number(n[i])){
            arr[i%2]++;
        }
    }
    
    
    return arr;
};
