// Problem: Minimum Time Visiting All Points
// LeetCode: https://leetcode.com/problems/minimum-time-visiting-all-points/
// Language: javascript
// Runtime: 3 ms
// Memory: 58.1 MB
// Submitted: 2026-01-12

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let n = points.length;
    let c = 0;
    
    for(let i=0;i<n-1;i++){
        let [a1, b1] = points[i]
        let [a2, b2] = points[i+1]
        
        c+=(Math.max(Math.abs(a1-a2), Math.abs(b1-b2)))
    }
    
    return c;
};
