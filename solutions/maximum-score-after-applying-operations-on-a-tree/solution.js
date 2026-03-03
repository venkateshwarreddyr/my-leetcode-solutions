// Problem: Maximum Score After Applying Operations on a Tree
// LeetCode: https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/
// Language: javascript
// Runtime: 218 ms
// Memory: 74.3 MB
// Submitted: 2023-11-05

cl = console.log
/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
          let n = values.length
        let totalsum = 0
     for(let u=0; u<n; u++) {
         totalsum += values[u]
     }
    
    cl(totalsum)
      function dfsWrapper() {
    let g = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
      g[u].push(v);
      g[v].push(u);
    }

    let dp = new Array(n);
    let visinpath = new Array(n);

    function dfs_(u) {
      // if (dp[u] !== undefined) return dp[u];
      visinpath[u] = 1;
      let sum = 0;
      for (let v of g[u]) {
        if (visinpath[v]) continue;
        sum += dfs_(v);
      }

      // dp[u] = sum % mod;
      visinpath[u] = 0;
        if(sum === 0) return values[u]
      return Math.min(sum, values[u]);
    }
    return totalsum - dfs_(0);

    // return dp[1];
  }
    cl()
  return dfsWrapper();
    
    
    
//     let n = values.length
//     let g = Array.from({ length: n }, () => []);
//     let indeg = new Array(n).fill(0)
//     for (let [u, v] of edges) {
//         indeg[u]++
//         indeg[v]++
//     }
    
//     let leaf = []
//     for(let u=0; u<n; u++) {
//         if(indeg[u] === 1) {
//             leaf.push(u)
//         }
//     }
    
//     let totalsum = 0
//      for(let u=0; u<n; u++) {
//          totalsum += values[u]
//      }
    
        
//     let leafsum = 0
//      for(let u of leaf) {
//          leafsum += values[u]
//      }
//     cl({totalsum, leafsum, leaf})
//     return Math.max(totalsum - values[0], totalsum - leafsum)
};
