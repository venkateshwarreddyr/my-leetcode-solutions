// Problem: Grid Game
// LeetCode: https://leetcode.com/problems/grid-game/
// Language: javascript
// Runtime: 18 ms
// Memory: 75.4 MB
// Submitted: 2025-11-29

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
    const n = grid[0].length;
    const top = [...grid[0]],
        bottom = [...grid[1]];

    for (let i = 1; i < n; i++) {
        top[i] += top[i - 1];
        bottom[i] += bottom[i - 1];
    }

    let result = Infinity;
    for (let i = 0; i < n; i++) {
        const topRight = top[n - 1] - top[i];
        const bottomLeft = bottom[i - 1] ?? 0;
        result = Math.min(result, Math.max(topRight, bottomLeft));
    }
    return result;

};
