// Problem: Reformat Date
// LeetCode: https://leetcode.com/problems/reformat-date/
// Language: javascript
// Runtime: 61 ms
// Memory: 41.9 MB
// Submitted: 2023-05-26

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let months = [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let [d, m, y] = date.split(" ");
    d = d.replaceAll(/[a-z]/g, '');
    m = months.indexOf(m)
    d = +d > 9 ? d : '0' + d
    m = m > 9 ? m : '0' + m
    return `${y}-${m}-${d}`

};
