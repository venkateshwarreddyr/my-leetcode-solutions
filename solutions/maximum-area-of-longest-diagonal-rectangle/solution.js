// Problem: Maximum Area of Longest Diagonal Rectangle
// LeetCode: https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/
// Language: javascript
// Runtime: 63 ms
// Memory: 44.7 MB
// Submitted: 2024-01-07

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(a) {
    let max =0
    let maxArea = 0
    
    for(let e of a) {
        let [l, w] = e
        let x = Math.sqrt(l*l+w*w)
        if(x > max) {
            maxArea = l * w
            max = x
        } else if(x === max) { 
            maxArea = Math.max(l * w, maxArea)
        }
    }
    
    return maxArea
};
