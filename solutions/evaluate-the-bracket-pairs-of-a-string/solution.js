// Problem: Evaluate the Bracket Pairs of a String
// LeetCode: https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
// Language: javascript
// Runtime: 7420 ms
// Memory: 101.2 MB
// Submitted: 2023-06-30

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {

    for (let [key, value] of knowledge) {
        s = s.replaceAll(`(${key})`, value)
    }
    s = s.replaceAll(/\([a-z]*\)/g, '?')
    return s;
}; 
