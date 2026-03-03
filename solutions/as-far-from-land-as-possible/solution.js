// Problem: As Far from Land as Possible
// LeetCode: https://leetcode.com/problems/as-far-from-land-as-possible/
// Language: javascript
// Runtime: 346 ms
// Memory: 61.2 MB
// Submitted: 2023-07-17

cl = console.log
var maxDistance = function (g) {
    var n = g.length;

    let hasZero = false;
    let hasOne = false;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            //  0->Infinity   1->0
            if (g[i][j] === 0) {
                hasZero = true;
                g[i][j] = Infinity;
            } else {
                hasOne = true;
                g[i][j] = 0;
            }
        }
    }
    if (!hasZero) return -1; // no water
    if (!hasOne) return -1; //  no land
    cl(g)
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (g[i][j] === 0) continue; // new land
            if (i > 0) g[i][j] = Math.min(g[i][j], g[i - 1][j] + 1);
            if (j > 0) g[i][j] = Math.min(g[i][j], g[i][j - 1] + 1);
        }
    }
    cl(g)

    var max = -Infinity;
    for (var i = n - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            if (g[i][j] === 0) continue; // new land
            if (i < n - 1) g[i][j] = Math.min(g[i][j], g[i + 1][j] + 1);
            if (j < n - 1) g[i][j] = Math.min(g[i][j], g[i][j + 1] + 1);
            max = Math.max(max, g[i][j]);
        }
    }
    cl(g)
    return max;
};
