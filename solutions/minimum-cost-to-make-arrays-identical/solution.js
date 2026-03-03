// Problem: Minimum Cost to Make Arrays Identical
// LeetCode: https://leetcode.com/problems/minimum-cost-to-make-arrays-identical/
// Language: javascript
// Runtime: 331 ms
// Memory: 79.9 MB
// Submitted: 2025-01-18

/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} k
 * @return {number}
 */
var minCost = function(a, b, k) {
    let diff = Infinity
    let n = a.length
    let diffa = 0
    for(let i = 0; i< n; i++) {
        diffa+=Math.abs(a[i] - b[i])
    }

    let diffb = k
    a.sort((a, b) => a-b);
    b.sort((a, b) => a-b);

    for(let i = 0; i< n; i++) {
        diffb+=Math.abs(a[i] - b[i])
    }
    console.log(a, b, diffa, diffb)
    return Math.min(diffa, diffb);
};
