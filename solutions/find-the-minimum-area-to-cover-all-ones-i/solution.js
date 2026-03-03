// Problem: Find the Minimum Area to Cover All Ones I
// LeetCode: https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/
// Language: javascript
// Runtime: 127 ms
// Memory: 84.5 MB
// Submitted: 2024-06-23

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let mini= m
    let minj= n
    
    let maxi = -1
    let maxj = -1

    for(let i = 0; i <m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j]) {
                mini = Math.min(mini, i)
                minj = Math.min(minj, j)
                maxi = Math.max(maxi, i)
                maxj = Math.max(maxj, j)
            }
        }
    }
    let x = maxi - mini
    let y = maxj - minj

    return ((x+1) * (y + 1))
    
    
};
