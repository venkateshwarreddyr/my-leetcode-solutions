// Problem: Valid Square
// LeetCode: https://leetcode.com/problems/valid-square/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.9 MB
// Submitted: 2026-01-03

var validSquare = function (p1, p2, p3, p4) {
    function getDistanceSquared([x1, y1], [x2, y2]) {
        return (x1 - x2) ** 2 + (y1 - y2) ** 2;
    }

    const distances = [
        getDistanceSquared(p1, p2),
        getDistanceSquared(p1, p3),
        getDistanceSquared(p1, p4),
        getDistanceSquared(p2, p3),
        getDistanceSquared(p2, p4),
        getDistanceSquared(p3, p4),
    ];

    distances.sort((a, b) => a - b);

    const sideLength = distances[0];
    if (sideLength === 0) return false;

    const areSidesEqual =
        distances[0] === distances[1] && //
        distances[1] === distances[2] &&
        distances[2] === distances[3];

    // const diagonalLength = distances[4]
    const areDiagonalsEqual = distances[4] === distances[5];

    return areSidesEqual && areDiagonalsEqual; // && sideLength < diagonalLength;
};

