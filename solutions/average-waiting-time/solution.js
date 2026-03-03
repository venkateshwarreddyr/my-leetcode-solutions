// Problem: Average Waiting Time
// LeetCode: https://leetcode.com/problems/average-waiting-time/
// Language: javascript
// Runtime: 123 ms
// Memory: 73.2 MB
// Submitted: 2024-07-09

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (a) {

    let wait = 0
    let currTime = 0

    for (let [arrival, time] of a) {
        if (currTime <= arrival) {
            currTime = arrival + time
            wait += time
        } else {
            wait += (currTime - arrival + time)
            currTime += time
        }
    }

    return wait / a.length
};
