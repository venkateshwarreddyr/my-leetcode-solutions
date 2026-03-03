// Problem: Matrix Cells in Distance Order
// LeetCode: https://leetcode.com/problems/matrix-cells-in-distance-order/
// Language: javascript
// Runtime: 135 ms
// Memory: 50.6 MB
// Submitted: 2023-07-15

var allCellsDistOrder = function (r, c, x, y) {

    let distCoordArr = []
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            distCoordArr.push({
                dist: Math.abs(i - x) + Math.abs(j - y),
                x: i,
                y: j
            }
            )
        }
    }

    distCoordArr.sort((e1, e2) => (e1.dist - e2.dist));

    return distCoordArr.map((e) => [e.x, e.y]);
};
