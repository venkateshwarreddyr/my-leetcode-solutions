// Problem: Minimum Area Rectangle
// LeetCode: https://leetcode.com/problems/minimum-area-rectangle/
// Language: javascript
// Runtime: 496 ms
// Memory: 59.3 MB
// Submitted: 2024-05-06

var minAreaRect = function (points) {
    let map = {}


    for (let [x, y] of points) {
        map[x] = map[x] || new Set()
        map[x].add(y)
    }
    let min = Infinity
    for (let [x1, y1] of points) {
        for (let [x2, y2] of points) {
            if (x1 === x2 || y1 === y2) {
                continue;
            }


            if (map[x1].has(y2) && map[x2].has(y1)) {
                min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2))
            }
        }
    }
    return min === Infinity ? 0 : min
};

