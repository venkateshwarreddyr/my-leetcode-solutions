// Problem: Earliest Time to Finish One Task
// LeetCode: https://leetcode.com/problems/earliest-time-to-finish-one-task/
// Language: javascript
// Runtime: 1 ms
// Memory: 57.6 MB
// Submitted: 2025-10-12

var earliestTime = function (tasks) {
    let minFinishTime = Infinity;
    for (const t of tasks) {
        minFinishTime = Math.min(minFinishTime, t[0] + t[1]);
    }
    return minFinishTime;
};
