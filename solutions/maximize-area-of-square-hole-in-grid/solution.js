// Problem: Maximize Area of Square Hole in Grid
// LeetCode: https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/
// Language: javascript
// Runtime: 76 ms
// Memory: 45.2 MB
// Submitted: 2023-11-25

/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a- b);
    vBars.sort((a, b) => a- b);
    

    
    function fn(a) {
        let max_hadj = 0
    let hadj = 1
        for(let i=0;i<a.length-1;i++) {
        if(a[i] + 1 === a[i+1]) {
            hadj++
        } else {
            max_hadj = Math.max(max_hadj, hadj)
            hadj = 1
        }
    }
           max_hadj = Math.max(max_hadj, hadj)
        return max_hadj
    }
    
    let max_hadj = fn(hBars);
    let max_vadj = fn(vBars);
    
    console.log({max_hadj, max_vadj})
    if(max_hadj === max_vadj) {
        return (max_hadj + 1) * (max_vadj + 1)
    }
    
    let max = Math.min(max_hadj, max_vadj)
    
    return (max + 1) * (max + 1)
    
};
