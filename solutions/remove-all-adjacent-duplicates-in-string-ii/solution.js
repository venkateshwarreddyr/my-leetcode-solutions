// Problem: Remove All Adjacent Duplicates in String II
// LeetCode: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Language: javascript
// Runtime: 106 ms
// Memory: 47.8 MB
// Submitted: 2023-07-02

cl = console.log
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;

    let n = s.length
    for (let i = 0; i < n; i++) {

        if (stack.top() && stack.top().val === s[i]) {
            stack.top().count++
        } else {
            stack.push({ val: s[i], count: 1 })
        }

        if (stack.top() && stack.top().count === k) {
            stack.pop()
        }
    }

    return stack.map(e => e.val.repeat(e.count)).join("")
};
