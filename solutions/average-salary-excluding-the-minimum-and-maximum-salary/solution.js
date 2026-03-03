// Problem: Average Salary Excluding the Minimum and Maximum Salary
// LeetCode: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
// Language: javascript
// Runtime: 65 ms
// Memory: 42.1 MB
// Submitted: 2023-05-25

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let n = salary.length;
    let min = Math.min(...salary);
    let max = Math.max(...salary);

    let an = salary.reduce((a, c) => a + c, 0) - min - max

    return an / (n - 2)
};
