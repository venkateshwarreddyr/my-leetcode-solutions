// Problem: Make a Square with the Same Color
// LeetCode: https://leetcode.com/problems/make-a-square-with-the-same-color/
// Language: javascript
// Runtime: 55 ms
// Memory: 49.4 MB
// Submitted: 2024-04-27

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(g) {
    let m = g.length
    let n = g[0].length
    
    for(let i=0;i<m-1;i++) {
        for(let j=0; j<n-1; j++) {
            let ob = {}
            ob['W'] = 0
            ob['B'] = 0
            ob[g[i][j]]++
            ob[g[i+1][j]]++
            ob[g[i+1][j+1]]++
            ob[g[i][j+1]]++
            
            if(ob['W'] === 1 || ob['B'] === 1) return true
            if(ob['W'] === 0 || ob['B'] === 0) return true
        }
    }
    
    return false
};
