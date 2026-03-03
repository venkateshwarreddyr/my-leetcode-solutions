// Problem: Largest Triangle Area
// LeetCode: https://leetcode.com/problems/largest-triangle-area/
// Language: javascript
// Runtime: 60 ms
// Memory: 47.8 MB
// Submitted: 2023-05-30

function areaOfTriangle([x1, y1], [x2, y2], [x3, y3]) {
    return Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
}

cl = console.log
var largestTriangleArea = function (points) {
    let n = points.length
    let max = -Infinity
    let an = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let x = areaOfTriangle(points[i], points[j], points[k])
                an.push(x)
                if (x > max) {
                    max = x
                }
            }
        }
    }

    return max
};
