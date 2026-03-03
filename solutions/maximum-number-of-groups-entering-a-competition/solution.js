// Problem: Maximum Number of Groups Entering a Competition
// LeetCode: https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/
// Language: javascript
// Runtime: 68 ms
// Memory: 49 MB
// Submitted: 2023-07-01

/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function (grades) {
    // grades = [...new Set(grades)];
    // grades = grades.sort((a, b) => a - b);
    let n = grades.length;
    let cl = console.log
    let i = 0;
    let c = 1;
    for (; i < n; i += c) {

        c++
    }
    if (i >= n)
        return c - 1
    return c
};

/**
[47,2,16,17,41,4,38,23,47]

2,4
    3,5,6,7,10,12
    0,1,2,3, 4, 5

    3 5 6 7 10 12
    3  5,6  7,10,12
 */


