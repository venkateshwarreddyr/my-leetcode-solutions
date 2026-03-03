// Problem: Sort the Students by Their Kth Score
// LeetCode: https://leetcode.com/problems/sort-the-students-by-their-kth-score/
// Language: javascript
// Runtime: 127 ms
// Memory: 51.4 MB
// Submitted: 2023-07-15

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    return score.sort((a, b) => b[k]-a[k]);
};
