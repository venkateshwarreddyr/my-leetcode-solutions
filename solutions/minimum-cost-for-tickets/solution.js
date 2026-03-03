// Problem: Minimum Cost For Tickets
// LeetCode: https://leetcode.com/problems/minimum-cost-for-tickets/
// Language: javascript
// Runtime: 69 ms
// Memory: 42.2 MB
// Submitted: 2023-05-02

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let dp = {};
    
    const dfs = (p) => {
        if(p===days.length){
            return 0
        }
        
        if(p in dp) return dp[p];
        dp[p] = Infinity;
        let dc = [1,7,30]
        for(let i=0;i<dc.length;i++){
           let d=dc[i];
           let c=costs[i];
            let j = p;
            while(j<days.length && days[j]<days[p]+d){
                j++
            }
            dp[p] = Math.min(dp[p], c+dfs(j))
        }
        
        return dp[p];
    }
    
    
    return dfs(0)
};
