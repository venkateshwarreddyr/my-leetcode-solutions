// Problem: Number of Days Between Two Dates
// LeetCode: https://leetcode.com/problems/number-of-days-between-two-dates/
// Language: javascript
// Runtime: 108 ms
// Memory: 45.1 MB
// Submitted: 2023-06-05

cl = console.log
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
var daysBetweenDates = function (date1, date2) {
    let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let leatMonths = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let leapYears = [1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];
    if (date1 > date2) {
        let temp = date1
        date1 = date2
        date2 = temp
    }
    let [y1, m1, d1] = date1.split("-").map(e => +e);
    let [y2, m2, d2] = date2.split("-").map(e => +e);
    let an = 0;

    while (y1 !== y2 || m1 !== m2 || d1 !== d2) {

        d1++
        if (d1 > (m1 === 2 && isLeap(y1) ? leatMonths[m1] : months[m1])) {
            m1++
            d1 = 1
        }
        if (m1 > 12) {
            m1 = 1
            y1++
        }

        an++
    }

    return an;
};
