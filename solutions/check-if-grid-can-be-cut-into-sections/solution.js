// Problem: Check if Grid can be Cut into Sections
// LeetCode: https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/
// Language: javascript
// Runtime: 366 ms
// Memory: 118.6 MB
// Submitted: 2025-11-04

var checkValidCuts = function (n, rectangles) {
    function check(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let sections = 0;
        let maxEnd = intervals[0][1];

        for (let [start, end] of intervals) {
            if (maxEnd <= start) {
                sections++;
            }
            maxEnd = Math.max(maxEnd, end);
        }

        return sections >= 2;
    };

    let xIntervals = rectangles.map(rect => [rect[0], rect[2]]);
    let yIntervals = rectangles.map(rect => [rect[1], rect[3]]);

    return check(xIntervals) || check(yIntervals);
};
