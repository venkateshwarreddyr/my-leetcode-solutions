// Problem: Queens That Can Attack the King
// LeetCode: https://leetcode.com/problems/queens-that-can-attack-the-king/
// Language: javascript
// Runtime: 70 ms
// Memory: 43.9 MB
// Submitted: 2023-07-20

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {

    let m = 8;
    let n = 8;

    let sides = [
        [0, -1], //   W
        [-1, 0], //   N
        [0, 1], //    E
        [1, 0], //    S
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, -1],
    ];
    const matrixOutOfBounds = (r, c, m, n) => r < 0 || c < 0 || r >= m || c >= n;

    let an = []
    for (let [x, y] of sides) {
        let [a, b] = king
        while (!matrixOutOfBounds(a + x, b + y, m, n)) {
            a += x
            b += y
            let find = queens.find(([c, d]) => a === c && b === d)
            if (find) {
                an.push(find)
                break;
            }
        }
    }

    return an;
};











