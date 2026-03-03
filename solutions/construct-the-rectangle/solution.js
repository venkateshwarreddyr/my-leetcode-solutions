// Problem: Construct the Rectangle
// LeetCode: https://leetcode.com/problems/construct-the-rectangle/
// Language: javascript
// Runtime: 610 ms
// Memory: 42.1 MB
// Submitted: 2023-05-29

cl = console.log

var constructRectangle = function (area) {
    let i = area
    an = [area, 1]
    while (i >= area / i) {
        if (area % i === 0) {
            an = [i, area / i]
        }
        i--;
    }

    return an;
};
