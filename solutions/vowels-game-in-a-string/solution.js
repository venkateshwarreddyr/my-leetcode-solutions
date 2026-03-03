// Problem: Vowels Game in a String
// LeetCode: https://leetcode.com/problems/vowels-game-in-a-string/
// Language: javascript
// Runtime: 99 ms
// Memory: 53.6 MB
// Submitted: 2024-07-21

/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    let count = 0

    for(let c of s) {
        if("aeiou".includes(c)) {
            count++
        }
    }

    if(count === 0) return false
    return true

};
