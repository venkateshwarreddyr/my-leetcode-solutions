// Problem: Student Attendance Record I
// LeetCode: https://leetcode.com/problems/student-attendance-record-i/
// Language: javascript
// Runtime: 47 ms
// Memory: 41.8 MB
// Submitted: 2023-05-30

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {

    if (s.includes("LLL")) {
        return false
    }
    if (s.replaceAll(/[^A]/g, '').length >= 2) {
        return false
    }


    return true
};
