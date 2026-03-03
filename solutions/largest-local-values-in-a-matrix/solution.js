// Problem: Largest Local Values in a Matrix
// LeetCode: https://leetcode.com/problems/largest-local-values-in-a-matrix/
// Language: javascript
// Runtime: 90 ms
// Memory: 44.7 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let newgrid = new Array(n-2);
    
    for(let i=0;i<n-2;i++){
        newgrid[i] = new Array(n-2);
    }
    
    const getMax = (x, y) => {
        let max = 0;
        
        for(let i = x; i<x+3; i++){
            for(let j = y; j<y+3; j++){
                max = Math.max(max, grid[i][j])
            }
        }
        
        return max;
    }
    
    for(let i=0; i<newgrid.length; i++){
        for(let j=0; j<newgrid.length; j++){
            newgrid[i][j] = getMax(i, j)
        }
    }
    
    return newgrid
    
};
