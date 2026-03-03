// Problem: Minimum Number of Operations to Make Array XOR Equal to K
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/
// Language: javascript
// Runtime: 98 ms
// Memory: 56.3 MB
// Submitted: 2024-01-06

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(a, k) {
    let x = 0
    
    for(let e of a) {
        x = x ^ e
    }
    let xb = x.toString(2).split('').reverse().join('')
    let kb = k.toString(2).split('').reverse().join('')
    cl({x: x.toString(2), k: k.toString(2)})
    let an = 0
    for(let i=0;i<kb.length || i<xb.length;i++) {
        if((xb[i] || '0') !== (kb[i] || '0')) an++
    }
    
    return an
    
    
};
