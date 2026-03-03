// Problem: Day of the Year
// LeetCode: https://leetcode.com/problems/day-of-the-year/
// Language: javascript
// Runtime: 225 ms
// Memory: 51.7 MB
// Submitted: 2023-05-29

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let leapDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let [y, m, d] = date.split('-').map(e => Number(e));
    let an = d;
    let isLeap = y % 100 === 0 ? y % 400 === 0 : y % 4 === 0
    if (isLeap) {
        while (m - 1) {
            m--
            an += (leapDays[m - 1])
        }
    } else {
        while (m - 1) {
            m--
            an += (days[m - 1])
        }
    }

    return an;
};
