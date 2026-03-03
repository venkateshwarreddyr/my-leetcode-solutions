// Problem: Minimum Speed to Arrive on Time
// LeetCode: https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
// Language: javascript
// Runtime: 352 ms
// Memory: 68.5 MB
// Submitted: 2023-07-26

cl = console.log
/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (a, hour) {
    if (Math.ceil(hour) < a.length) return -1
    let lo = 0, hi = 10 ** 9

    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2);
        let x = a.reduce((a, c) => Math.ceil(a) + (c / mid), 0)

        if (x > hour) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return lo
};
