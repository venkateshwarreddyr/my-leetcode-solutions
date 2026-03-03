// Problem: Goal Parser Interpretation
// LeetCode: https://leetcode.com/problems/goal-parser-interpretation/
// Language: javascript
// Runtime: 68 ms
// Memory: 38.9 MB
// Submitted: 2021-07-20

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command  = command.replaceAll('()', 'o');
    command  = command.replaceAll('(al)', 'al');
    return command
};
