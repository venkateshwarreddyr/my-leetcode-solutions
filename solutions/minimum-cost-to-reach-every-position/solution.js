// Problem: Minimum Cost to Reach Every Position
// LeetCode: https://leetcode.com/problems/minimum-cost-to-reach-every-position/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.8 MB
// Submitted: 2025-06-14

/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    
    for(let i = 1; i< cost.length; i++) {
        if(cost[i-1] < cost[i]) {
            cost[i] = cost[i-1]
        }
    }

    return cost
};
