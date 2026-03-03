// Problem: Snake in Matrix
// LeetCode: https://leetcode.com/problems/snake-in-matrix/
// Language: javascript
// Runtime: 71 ms
// Memory: 52.8 MB
// Submitted: 2024-08-11

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    
    let i = 0, j = 0
    
    for(let command of commands ) {
        if(command === "UP") i--
        if(command === "RIGHT") j++
        if(command === "DOWN") i++
        if(command === "LEFT") j--
    }
    
    return (i * n) + j
};
