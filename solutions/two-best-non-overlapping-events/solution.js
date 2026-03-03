// Problem: Two Best Non-Overlapping Events
// LeetCode: https://leetcode.com/problems/two-best-non-overlapping-events/
// Language: javascript
// Runtime: 6904 ms
// Memory: 71 MB
// Submitted: 2023-10-25

cl = console.log
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
    events.sort((a, b) => a[1] - b[1])

    let max = -Infinity
    let max2vssum = -Infinity
    let prefixMaxv = []

    for (let [s, e, v] of events) {
        max = Math.max(max, v)
        prefixMaxv.push(max)
        
        let i
        for (i = 0; events[i][1] < s; i++) { }
        if (i - 1 >= 0 && prefixMaxv[i - 1] + v > max2vssum) {
            max2vssum = prefixMaxv[i - 1] + v
        }



    }
    cl(prefixMaxv)
    return Math.max(max2vssum, max)
};
