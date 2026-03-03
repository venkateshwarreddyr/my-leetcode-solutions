// Problem: Count Covered Buildings
// LeetCode: https://leetcode.com/problems/count-covered-buildings/
// Language: javascript
// Runtime: 383 ms
// Memory: 107.8 MB
// Submitted: 2025-12-27

var countCoveredBuildings = function (n, buildings) {
    const xToMinMaxY = new Map(); // x -> [minY, maxY]
    const yToMinMaxX = new Map(); // y -> [minX, maxX]

    for (const [x, y] of buildings) {
        if (!xToMinMaxY.has(x)) xToMinMaxY.set(x, [y, y]);
        else {
            xToMinMaxY.get(x)[0] = Math.min(xToMinMaxY.get(x)[0], y); // x, min y
            xToMinMaxY.get(x)[1] = Math.max(xToMinMaxY.get(x)[1], y); // x, max y
        }

        if (!yToMinMaxX.has(y)) yToMinMaxX.set(y, [x, x]);
        else {
            yToMinMaxX.get(y)[0] = Math.min(yToMinMaxX.get(y)[0], x); // min x, y
            yToMinMaxX.get(y)[1] = Math.max(yToMinMaxX.get(y)[1], x); // max x, y
        }
    }

    let coveredFromAllSides = 0;
    // A building is covered from all sides - its NOT an endpoint
    for (const [x, y] of buildings) {
        const [minX, maxX] = yToMinMaxX.get(y); // left / right
        const [minY, maxY] = xToMinMaxY.get(x); // above / below

        // Strictly inside - both ranges → covered
        if (minX < x && x < maxX && minY < y && y < maxY) {
            coveredFromAllSides++;
        }
    }

    return coveredFromAllSides;
};

