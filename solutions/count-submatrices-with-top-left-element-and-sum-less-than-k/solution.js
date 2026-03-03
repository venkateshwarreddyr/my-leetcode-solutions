// Problem: Count Submatrices with Top-Left Element and Sum Less Than k
// LeetCode: https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/
// Language: javascript
// Runtime: 156 ms
// Memory: 66.7 MB
// Submitted: 2024-04-16

cl = console.log
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(g, k) {
    
     let m = g.length;
  let n = g[0].length;
    let cc = 0
      for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                
                g[i][j] += ((g[i-1]?.[j] ?? 0) + (g[i][j-1] ?? 0) - (g[i-1]?.[j-1] ?? 0)) 
                
                if(g[i][j]<=k)cc++
            }}
    
    
    return cc
};
