// Problem: Number of Students Doing Homework at a Given Time
// LeetCode: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
// Language: javascript
// Runtime: 59 ms
// Memory: 41.9 MB
// Submitted: 2023-05-10

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let n = startTime.length;
    let c = 0;
    
    for(let i=0;i<n;i++){
        if(startTime[i]<=queryTime && queryTime<=endTime[i]) c++
    }
    
    return c;
};
