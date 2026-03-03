// Problem: Length of the Longest Subsequence That Sums to Target
// LeetCode: https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/
// Language: javascript
// Runtime: 860 ms
// Memory: 79.4 MB
// Submitted: 2024-04-16

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function(a, target) {
    let memo = Array.from({length:a.length},()=> new Array(target))
   
    function solve(i, sum) {
        if(sum === target) return 0
        if(i === a.length) return -Infinity
        if(memo[i][sum] !== undefined) return memo[i][sum]
        if(sum > target) return -Infinity
        return memo[i][sum] = Math.max(1 + solve(i+1, sum + a[i]), solve(i+1, sum))
    }
    
    let an = solve(0, 0)
    
    return an === -Infinity ? -1 : an
};
