// Problem: Reverse Bits
// LeetCode: https://leetcode.com/problems/reverse-bits/
// Language: javascript
// Runtime: 52 ms
// Memory: 55.1 MB
// Submitted: 2026-02-16

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bstr = n.toString(2);
    let zeros = ''
    for(let i=0;i<32-bstr.length;i++){
        zeros+='0'
    }
    return parseInt((zeros + n.toString(2)).split('').reverse().join(''),2)
};
