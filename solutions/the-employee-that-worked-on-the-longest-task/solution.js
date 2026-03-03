// Problem: The Employee That Worked on the Longest Task
// LeetCode: https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
// Language: javascript
// Runtime: 114 ms
// Memory: 47.1 MB
// Submitted: 2022-10-13

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let max = logs[0];
    for(let i=1;i<logs.length;i++){
        if((logs[i][1]-logs[i-1][1])>max[1]){
            max[0] = logs[i][0];
            max[1] = logs[i][1]-logs[i-1][1];
        } 
        else if ((logs[i][1]-logs[i-1][1]) === max[1]){
            max[0] = Math.min(max[0], logs[i][0]);
        }
    }
    return max[0];
};
