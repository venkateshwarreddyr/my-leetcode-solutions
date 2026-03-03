// Problem: Minimum Remove to Make Valid Parentheses
// LeetCode: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// Language: javascript
// Runtime: 91 ms
// Memory: 56.4 MB
// Submitted: 2023-06-30

cl = console.log
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let n = s.length
    s = s.split("")
    let stack = []
    for (let i = 0; i < n; i++) {
        if (s[i] === "(") {
            stack.push(i)
        } else if (s[i] === ")") {
            if (stack.length) {
                stack.pop()
            } else {
                s[i] = ""
            }
        }
    }
    while (stack.length) {
        s[stack.pop()] = "";
    }

    return s.filter(e => e).join("")
};
