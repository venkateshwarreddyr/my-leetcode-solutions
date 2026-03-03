// Problem: Count Submatrices With Equal Frequency of X and Y
// LeetCode: https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/
// Language: javascript
// Runtime: 893 ms
// Memory: 146 MB
// Submitted: 2024-08-21

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    let m = grid.length
    let n = grid[0].length

    for(let i = 0; i<m; i++) {
        for(let j = 0; j < n ;j++) {
            if(grid[i][j] === 'X')
                grid[i][j] = 1
            if(grid[i][j] === 'Y')
                grid[i][j] = 2
            if(grid[i][j] === '.')
                grid[i][j] = 0
        }
    }

    let cc = 0

    for(let i = 0; i<m; i++) {
        for(let j = 0; j < n ;j++) {
            let ng = new Array(3).fill(0)
            ng[grid[i][j]]++
            let  k = 0
            for(let e of grid[i-1]?.[j] ?? []) {
                    ng[k]+=e
                k++
            }

            k = 0
            for(let e of grid[i][j-1] ?? []) {
                    ng[k]+=e
                    k++
            }

             k = 0
            for(let e of grid[i-1]?.[j-1] ?? []) {
                    ng[k]-=e
                    k++
            }
            if(ng[1] === ng[2] && ng[1]>0) {
                cc++
            }
            grid[i][j] = ng
        }
    }
    
    return cc
};
