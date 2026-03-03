// Problem: Find Nearest Point That Has the Same X or Y Coordinate
// LeetCode: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
// Language: javascript
// Runtime: 91 ms
// Memory: 50.7 MB
// Submitted: 2023-05-23

cl = console.log
var nearestValidPoint = function (x, y, points) {

    let minIndex = -1;
    let min = Infinity;
    let i = 0
    for (let [a, b] of points) {
        if ((x === a || y === b)) {

            let z = Math.abs(x - a) + Math.abs(y - b)

            if (min > z) {
                minIndex = i;
                min = z
            }
        }
        i++;
    }

    return minIndex
};
