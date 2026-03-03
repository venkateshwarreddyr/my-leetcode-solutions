// Problem: Minimum Deletions to Make String Balanced
// LeetCode: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
// Language: javascript
// Runtime: 45 ms
// Memory: 61.5 MB
// Submitted: 2026-02-07

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;

    let cc = 0
    for (let c of s) {
        if (c === "a") {
            if (stack.top() === "b") {
                cc++
                stack.pop()
            }
        } else {
            stack.push(c)
        }
    }

    return cc;
};
