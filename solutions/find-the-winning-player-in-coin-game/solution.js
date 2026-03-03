// Problem: Find the Winning Player in Coin Game
// LeetCode: https://leetcode.com/problems/find-the-winning-player-in-coin-game/
// Language: javascript
// Runtime: 62 ms
// Memory: 50.9 MB
// Submitted: 2024-08-21

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    
    let curr = 0

    while(true) {
        if(x - 1 >= 0) {
            x--
        } else {
            break
        }

        if(y - 4 >= 0) {
            y-=4
        } else {
            break
        }

        curr++
    }

    if(curr%2 === 1) return "Alice"
    return "Bob"
};
