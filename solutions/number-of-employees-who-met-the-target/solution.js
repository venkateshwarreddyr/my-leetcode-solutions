// Problem: Number of Employees Who Met the Target
// LeetCode: https://leetcode.com/problems/number-of-employees-who-met-the-target/
// Language: javascript
// Runtime: 55 ms
// Memory: 43.6 MB
// Submitted: 2023-07-30

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter(e => e>=target).length
};
