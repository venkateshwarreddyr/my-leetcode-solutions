// Problem: Score of Parentheses
// LeetCode: https://leetcode.com/problems/score-of-parentheses/
// Language: javascript
// Runtime: 58 ms
// Memory: 41.8 MB
// Submitted: 2023-06-30

cl = console.log
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {

    let stack = [0]

    for (let c of s) {
        if (c === "(") {
            stack.push(0)
        } else {
            stack.push((2 * stack.pop() || 1) + stack.pop());
        }
    }

    return stack.pop()
};
