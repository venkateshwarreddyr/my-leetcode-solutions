// Problem: Right Triangles
// LeetCode: https://leetcode.com/problems/right-triangles/
// Language: javascript
// Runtime: 156 ms
// Memory: 74.7 MB
// Submitted: 2024-04-27

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(g) {
        let m = g.length
    let n = g[0].length
    let an = 0
    let leftmap = new Array(m).fill(0)
    let downmap =  new Array(n).fill(0)
     for(let i=0;i<m;i++) {
        for(let j=0; j<n; j++) {
            leftmap[i] += g[i][j]
            downmap[j] += g[i][j]
            
        }
     }
    for(let i=0;i<m;i++) {
        for(let j=0; j<n; j++) {
            if(g[i][j]) {
                let left = leftmap[i] - 1
                // for(let k=0;k<n;k++) {
                //     left+=g[i][k]
                // }
                
                let down = downmap[j] - 1
                // for(let k=0;k<m;k++) {
                //     down+=g[k][j]
                // }
                
                an+=(left * down)
            }
        }
    }
    
    return an
};
