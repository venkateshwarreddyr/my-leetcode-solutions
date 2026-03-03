// Problem: Faulty Keyboard
// LeetCode: https://leetcode.com/problems/faulty-keyboard/
// Language: javascript
// Runtime: 92 ms
// Memory: 47.7 MB
// Submitted: 2023-08-06

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let an = []
    for(let c of s){
        if(c === "i") {
            an.reverse()
            continue;
        }
        an.push(c)
    }
    
    return an.join("")
    
};
