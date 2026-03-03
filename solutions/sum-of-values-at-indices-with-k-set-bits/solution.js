// Problem: Sum of Values at Indices With K Set Bits
// LeetCode: https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/
// Language: javascript
// Runtime: 81 ms
// Memory: 45.2 MB
// Submitted: 2023-10-26

cl = console.log
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(a, k) {
    let an = 0

    let i = 0
    for(let e of a) {
        if(k === i.toString(2).replaceAll("0", "").length){
            an+=e
        }
        i++
    }

    return an
};
