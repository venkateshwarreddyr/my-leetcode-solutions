// Problem: Minimum Moves to Balance Circular Array
// LeetCode: https://leetcode.com/problems/minimum-moves-to-balance-circular-array/
// Language: javascript
// Runtime: 12 ms
// Memory: 74.7 MB
// Submitted: 2025-12-15

var minMoves = function (a) {
    let n = a.length;

    let sum = 0
    let negValIndex = -1;
    for (let i = 0; i < n; i++) {
        sum += a[i]
        if (a[i] < 0) negValIndex = i;
    }
    if (sum < 0) return -1;
    if (negValIndex === -1) return 0;

    let moves = 0;
    let need = -a[negValIndex]
    for (let d = 1; d <= (n / 2) && need > 0; d++) {
        let li = (negValIndex - d + n) % n
        let ri = (negValIndex + d) % n

        let possible = Math.min(need, a[li] + ((li !== ri) ? a[ri] : 0))
        need -= possible
        moves += possible * d
    }

    return moves;
};

