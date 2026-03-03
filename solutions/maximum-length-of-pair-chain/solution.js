// Problem: Maximum Length of Pair Chain
// LeetCode: https://leetcode.com/problems/maximum-length-of-pair-chain/
// Language: javascript
// Runtime: 7 ms
// Memory: 56.4 MB
// Submitted: 2025-11-27

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    let n = pairs.length
    pairs.sort((a, b) => a[1] - b[1])

    let ans = 1
    let prev = pairs[0]
    for (let i = 1; i < pairs.length; i++) {
        let curr = pairs[i]
        if (prev[1] >= curr[0]) continue
        ans++
        prev = curr
    }



    return ans
};
