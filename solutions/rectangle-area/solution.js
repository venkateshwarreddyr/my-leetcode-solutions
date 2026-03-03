// Problem: Rectangle Area
// LeetCode: https://leetcode.com/problems/rectangle-area/
// Language: javascript
// Runtime: 3 ms
// Memory: 61.1 MB
// Submitted: 2026-01-02

var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    // a & b areas
    let a1 = (ax2 - ax1) * (ay2 - ay1); // react1 a area
    let a2 = (bx2 - bx1) * (by2 - by1); // react2 b area

    // len & breadth - common area
    let commonAreaLen = Math.min(ax2, bx2) - Math.max(ax1, bx1); // width
    let commonAreaBre = Math.min(ay2, by2) - Math.max(ay1, by1); // height

    // +ve len & breadth - common area
    if (commonAreaLen < 0) commonAreaLen = 0; // +ve width if possible, else 0
    if (commonAreaBre < 0) commonAreaBre = 0; // +ve height if possible, else 0

    // area -common area
    let commonArea = commonAreaLen * commonAreaBre;

    // total area
    return a1 + a2 - commonArea;
};

