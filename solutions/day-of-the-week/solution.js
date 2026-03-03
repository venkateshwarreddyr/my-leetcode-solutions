// Problem: Day of the Week
// LeetCode: https://leetcode.com/problems/day-of-the-week/
// Language: javascript
// Runtime: 67 ms
// Memory: 42.2 MB
// Submitted: 2023-06-13

var dayOfTheWeek = function (d, m, y) {
    // https://www.mathsisfun.com/games/dayofweek.html

    if (m >= 3) m -= 2;
    else m += 10;

    if (m == 11 || m == 12) y--;

    var nCentury = parseInt(y / 100);
    var nYear100 = y % 100;

    var h = 0; // day of week number
    h += parseInt(d);
    h += parseInt((13 / 5) * m - 0.2);
    h += parseInt(nYear100);
    h += parseInt(nYear100 / 4);
    h += parseInt(nCentury / 4);
    h -= parseInt(2 * nCentury);
    h %= 7;

    if (y >= 1700 && y <= 1751) h -= 3;
    else if (y <= 1699) h -= 4;

    if (h < 0) h += 7;

    let DOW_NAMES = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return DOW_NAMES[h];
};

// let MONTHS = [ "January","February","March","April","May","June","July","August","September","October","November","November","December" ]

// let DAYS = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ]

    // let month_days = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // jan to dec - days

