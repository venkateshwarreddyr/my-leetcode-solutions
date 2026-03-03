// Problem: Find Champion I
// LeetCode: https://leetcode.com/problems/find-champion-i/
// Language: javascript
// Runtime: 77 ms
// Memory: 46.8 MB
// Submitted: 2023-11-05

/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let n = grid.length
    let a = new Array(n).fill(0)
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]) a[i]++
        }
    }
    
    let max = Math.max(...a)
    
    return a.indexOf(max)
};
