// Problem: Minimum Rectangles to Cover Points
// LeetCode: https://leetcode.com/problems/minimum-rectangles-to-cover-points/
// Language: javascript
// Runtime: 246 ms
// Memory: 76.7 MB
// Submitted: 2024-04-13

/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
    points.sort((a, b) => a[0] - b[0]);
    console.log(points)
    let curr = points[0][0] + w
    let cc = 1
    for(let [x, y] of points) {
        if(x <= curr) continue
        else {
            curr = x + w
            cc++
        }
    }
    
    return cc
};
