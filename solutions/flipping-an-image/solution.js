// Problem: Flipping an Image
// LeetCode: https://leetcode.com/problems/flipping-an-image/
// Language: javascript
// Runtime: 66 ms
// Memory: 44.3 MB
// Submitted: 2023-07-15

var flipAndInvertImage = function (g) {

    return g.map((row) => row.reverse().map(x => !x))

};
