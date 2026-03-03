// Problem: Crawler Log Folder
// LeetCode: https://leetcode.com/problems/crawler-log-folder/
// Language: javascript
// Runtime: 59 ms
// Memory: 50.5 MB
// Submitted: 2024-07-10

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let stack = []

    for (let log of logs) {
        if (log === "../") {
            stack.pop()
        } else if (log === "./") {
        } else {
            stack.push(1)
        }
    }

    return stack.length;
};
