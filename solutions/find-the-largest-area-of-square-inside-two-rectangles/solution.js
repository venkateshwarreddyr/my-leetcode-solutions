// Problem: Find the Largest Area of Square Inside Two Rectangles
// LeetCode: https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/
// Language: javascript
// Runtime: 277 ms
// Memory: 65.6 MB
// Submitted: 2026-01-17

/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let n = bottomLeft.length;
    let max = 0
    for(let i=0; i<n ;i++) {
        let [a1, b1] = bottomLeft[i]
        let [c1, d1] = topRight[i]
        for(let j = i+1; j<n ;j++ ) {
            let [a2, b2] = bottomLeft[j]
            let [c2, d2] = topRight[j]
            let a3 = Math.max(a1, a2)
            let b3 = Math.max(b1, b2)
            
            let c3 = Math.min(c1, c2)
            let d3 = Math.min(d1, d2)
            
            if(c3<a3 || d3 < b3) {
                continue
            }
            x = Math.min((c3 - a3), (d3 - b3))
            
            max = Math.max(max, x * x);
        }
    }
    
    return max
};
