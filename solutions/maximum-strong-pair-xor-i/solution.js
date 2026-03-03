// Problem: Maximum Strong Pair XOR I
// LeetCode: https://leetcode.com/problems/maximum-strong-pair-xor-i/
// Language: javascript
// Runtime: 675 ms
// Memory: 51.3 MB
// Submitted: 2023-11-12

cl = console.log
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(a) {
    
    let max = -Infinity
    let n = a.length
    for(let i=0;i<n;i++) {
        for(let j= i;j<n;j++) {
            let x = a[i], y = a[j]
            if(Math.abs(x - y) <= Math.min(x, y)) {
                cl({x, y})
                max = Math.max(max, x ^ y)
            }
        }
    }
    
    return max
};
