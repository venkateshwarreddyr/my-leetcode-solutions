// Problem: Insert Interval
// LeetCode: https://leetcode.com/problems/insert-interval/
// Language: javascript
// Runtime: 4 ms
// Memory: 59.2 MB
// Submitted: 2026-01-08

var insert = function (intervals, newInterval) {
    const n = intervals.length;
    const res = [];
    let [newStart, newEnd] = newInterval;

    let i = 0;
    for (; i < n && intervals[i][1] < newStart; i++) {
        res.push(intervals[i]); // interval before new interval
    }

    // Expand new start & end
    for (; i < n && intervals[i][0] <= newEnd; i++) {
        let [start, end] = intervals[i]
        newStart = Math.min(newStart, start);
        newEnd = Math.max(newEnd, end);
    }
    res.push([newStart, newEnd]); // expanded overlapped interval at new interval

    for (; i < n; i++) {
        res.push(intervals[i]); // interval after new interval
    }

    return res;
};

