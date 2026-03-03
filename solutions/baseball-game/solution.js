// Problem: Baseball Game
// LeetCode: https://leetcode.com/problems/baseball-game/
// Language: javascript
// Runtime: 69 ms
// Memory: 43.2 MB
// Submitted: 2023-05-10

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let an = []
    
    for (let op of operations){
        let n = an.length;
        
        if(op === '+') {
            an.push(an[n-2] + an[n-1])
        } else if(op === 'D') {
            an.push(2 * an[n-1])
        } else if(op === 'C') {
            an.pop()
        } else {
            an.push(Number(op))
        }
    }
    
    return an.reduce((a,c) => a+c, 0);
};
