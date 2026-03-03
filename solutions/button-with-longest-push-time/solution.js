// Problem: Button with Longest Push Time
// LeetCode: https://leetcode.com/problems/button-with-longest-push-time/
// Language: javascript
// Runtime: 4 ms
// Memory: 57.4 MB
// Submitted: 2025-10-12

/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
    let [prev_ind, prev_time] = events[0]
    let longest_time_diff = prev_time
    let longest_time_diff_ind = prev_ind
    let n = events.length
    for (let i = 1; i < n; i++) {
        let [ind, time] = events[i];
        const time_diff = time - prev_time;
        if (time_diff > longest_time_diff) {
            longest_time_diff = time_diff
            longest_time_diff_ind = ind
        }
        if (time_diff === longest_time_diff) {
            if (ind < longest_time_diff_ind) {
                longest_time_diff_ind = ind
            }
        }
        prev_time = time
    }
    return longest_time_diff_ind
};
