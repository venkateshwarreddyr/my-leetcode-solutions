// Problem: Check if Two Chessboard Squares Have the Same Color
// LeetCode: https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/
// Language: javascript
// Runtime: 49 ms
// Memory: 54.3 MB
// Submitted: 2025-10-12

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (pos1, pos2) {
    const getColor = (pos) => {
        const [ch, n2] = pos.split("");
        const n = ch.charCodeAt(0) - "a".charCodeAt(0) + 1;
        return (n + +n2) % 2;
    };
    return getColor(pos1) === getColor(pos2);
};
