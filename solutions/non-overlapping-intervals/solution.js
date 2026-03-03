// Problem: Non-overlapping Intervals
// LeetCode: https://leetcode.com/problems/non-overlapping-intervals/
// Language: javascript
// Runtime: 107 ms
// Memory: 85.7 MB
// Submitted: 2026-01-02

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let res = 0; // number of intervals deleted

    for (let i = 0, j = i + 1; j < intervals.length;) {
        let [s1, e1] = intervals[i];
        let [s2, e2] = intervals[j];

        if (s2 < e1) {
            res++; // overlap
            if (e1 <= e2) {
                j++; // erase s2e2
            } else {
                i = j; // erase se
                j++;
            }
        } else {
            i = j;
            j++;
        }
    }

    return res;
};
