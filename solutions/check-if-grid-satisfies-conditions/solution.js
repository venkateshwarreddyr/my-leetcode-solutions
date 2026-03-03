// Problem: Check if Grid Satisfies Conditions
// LeetCode: https://leetcode.com/problems/check-if-grid-satisfies-conditions/
// Language: javascript
// Runtime: 56 ms
// Memory: 51.7 MB
// Submitted: 2024-05-11

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(g) {
    let m = g.length
    let n = g[0].length
    for(let i=0;i<m;i++) {

        
        for(let j=0;j<n;j++) {
            let first = true
            let second = true            
            if(i !== m-1 && g[i][j] !== g[i+1][j]) first = false
            if(j !== n-1 && g[i][j] === g[i][j+1]) second = false
            
            if(!first || !second) return false
            
        }
    }

    return true
};
