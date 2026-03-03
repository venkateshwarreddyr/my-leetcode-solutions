// Problem: Number of Ways to Reach a Position After Exactly k Steps
// LeetCode: https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/
// Language: javascript
// Runtime: 218 ms
// Memory: 70 MB
// Submitted: 2022-10-06

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */

var numberOfWays = function(s, e, k) {
    const dp = {};
    var mod = 1e9 + 7;
    function dfs(s,e,k){
    const diff = Math.abs(e-s);
    if(diff === k) return 1;
    if(diff>k) return 0;
    if(!dp[diff]) dp[diff]=new Array(1001).fill(-1)
    if(dp[diff][k] === -1)
    dp[diff][k] = (dfs(s-1, e, k-1)+dfs(s+1, e, k-1))%mod;
    return dp[diff][k];
    }
    return dfs(s,e,k)
};
