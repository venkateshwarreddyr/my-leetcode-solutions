// Problem: Count Collisions on a Road
// LeetCode: https://leetcode.com/problems/count-collisions-on-a-road/
// Language: javascript
// Runtime: 15 ms
// Memory: 58.3 MB
// Submitted: 2025-12-29

var countCollisions = function (direction) {
    let n = direction.length;

    let count = 0
    let prevMovingRight = 0;
    let prevStationary = 0;
    for (let i = 0; i < n; i++) {
        if (direction[i] === "R") {
            prevMovingRight++
        } else if (direction[i] === "L") {
            if (prevMovingRight) {
                // R ->   <- L
                count += prevMovingRight + 1
                prevMovingRight = 0
                prevStationary = 1
            } else if (prevStationary) {
                // S   <- L
                count += prevStationary
                prevStationary = 1
            } else {
                // no effect - no right side moving, or stationary on left side
            }
        } else {
            // i is S
            count += prevMovingRight
            prevMovingRight = 0
            prevStationary = 1
        }
    }
    return count
};

