// Problem: Best Reachable Tower
// LeetCode: https://leetcode.com/problems/best-reachable-tower/
// Language: javascript
// Runtime: 76 ms
// Memory: 99.4 MB
// Submitted: 2026-01-17

// cl = console.log;
const dist = ([xi, yi], [xj, yj]) => Math.abs(xi - xj) + Math.abs(yi - yj);

function lsmaller([xi, yi], [xj, yj]) {
    return xi < xj || (xi == xj && yi < yj);
}

var bestTower = function (towers, [cx, cy], radius) {
    const reachable = ([xi, yi]) => dist([xi, yi], [cx, cy]) <= radius;

    let ts = towers;
    let n = ts.length;
    let maxqi = -Infinity;
    let maxxy = [-1, -1];

    for (let i = 0; i < n; i++) {
        [xi, yi, qi] = towers[i];

        if (reachable([xi, yi])) {
            // cl({ i, xi, yi, qi });
            if (qi > maxqi) {
                maxqi = qi;
                maxxy = [xi, yi];
            } else if (qi === maxqi) {
                if (lsmaller([xi, yi], maxxy)) {
                    maxxy = [xi, yi];
                }
            }
        }
    }

    return maxxy;
};

