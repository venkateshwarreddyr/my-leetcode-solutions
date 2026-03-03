// Problem: Minimum Number of Operations to Satisfy Conditions
// LeetCode: https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/
// Language: javascript
// Runtime: 230 ms
// Memory: 73.8 MB
// Submitted: 2024-04-21


var minimumOperations = function(g) {
    let memo = new Array(g.length);
    for(let i = 0;i <g[0].length; i++) {
        memo[i] = {}
    }
    let n = g.length
    let newG = new Array(g[0].length)
    for(let i = 0;i <g[0].length; i++) {
        newG[i] = {}
        for(let j=0;j<10;j++) {
            newG[i][j] = 0
        }
    }
    
    for(let i=0;i<g.length;i++) {
        for(let j=0;j<g[0].length; j++) {
            newG[j][g[i][j]]++
        }
    }
    
    function solve(i, prev) {
        if(i === newG.length) return 0
        let min = Infinity
        let ob = newG[i]
        if( memo[i][prev] !== undefined) return  memo[i][prev]
        for(let key in ob) {
            if(prev !== key)
                min = Math.min(min, n - ob[key] + solve(i+1, key))
        }
        memo[i][prev] = min
        return min
    }
    
    return solve(0, -1)

};
