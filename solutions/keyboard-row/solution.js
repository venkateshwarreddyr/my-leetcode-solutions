// Problem: Keyboard Row
// LeetCode: https://leetcode.com/problems/keyboard-row/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.7 MB
// Submitted: 2023-05-12

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(ws) {
    let n = ws.length;
    let one = new Set('qwertyuiop');
    let two = new Set('asdfghjkl');
    let three = new Set('zxcvbnm');

    return ws.filter(w => {
        w = w.toLowerCase().split('');
        return w.every(c => one.has(c)) || w.every(c => two.has(c)) || w.every(c => three.has(c));
    })
};
