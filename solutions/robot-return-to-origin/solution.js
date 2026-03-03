// Problem: Robot Return to Origin
// LeetCode: https://leetcode.com/problems/robot-return-to-origin/
// Language: javascript
// Runtime: 69 ms
// Memory: 44.7 MB
// Submitted: 2023-05-10

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    
    for(let move of moves){
        if(move === 'U'){
            y++
        } else if(move === 'D'){
            y--
        } else if(move === 'L'){
            x--
        } else if(move === 'R'){
            x++
        }
    }
    
    return x === 0 && y === 0
};
