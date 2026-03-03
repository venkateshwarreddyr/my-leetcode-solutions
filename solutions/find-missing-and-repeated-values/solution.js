// Problem: Find Missing and Repeated Values
// LeetCode: https://leetcode.com/problems/find-missing-and-repeated-values/
// Language: javascript
// Runtime: 70 ms
// Memory: 45.2 MB
// Submitted: 2023-12-17

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let ob = {};
    let n = grid.length;
    let exist;
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            let x = grid[i][j]
            
            if(ob[x]) {
                exist = x
            } else {
                ob[x] = 1
            }
        }
    }
    
    for(let i=1;i<=n**2;i++) {
        if(!ob[i]) {
            return [exist, i]
        }
    }
    
    
};
