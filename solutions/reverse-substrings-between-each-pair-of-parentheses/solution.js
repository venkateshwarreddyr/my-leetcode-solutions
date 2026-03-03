// Problem: Reverse Substrings Between Each Pair of Parentheses
// LeetCode: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/
// Language: javascript
// Runtime: 55 ms
// Memory: 51.1 MB
// Submitted: 2024-07-11

cl = console.log
var reverseParentheses = function (s) {
    let n = s.length
    let stack = []
    for (let i = 0; i < n; i++) {
        if (s[i] === "(") {
            stack.push(i)
        } else if (s[i] === ")") {
            let j = stack.pop()
            s = s.slice(0, j + 1) + (s.slice(j + 1, i).split("").reverse().join("")) + s.slice(i)
        }
    }

    return s.split("").filter(e => e !== "(" && e !== ")").join("");
};
