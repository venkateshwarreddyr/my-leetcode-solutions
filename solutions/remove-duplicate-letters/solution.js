// Problem: Remove Duplicate Letters
// LeetCode: https://leetcode.com/problems/remove-duplicate-letters/
// Language: javascript
// Runtime: 59 ms
// Memory: 45 MB
// Submitted: 2023-09-26

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
 let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;
    let n = s.length;
    let freq = {};
    for (let c of s) {
        freq[c] = freq[c] || 0;
        freq[c]++;
    }

    let added = new Set()
    for (let c of s) {
        freq[c]--;

        if (added.has(c)) continue

        while (c < stack.top() && freq[stack.top()]) {
            added.delete(stack.pop())
        }

        stack.push(c)
        added.add(c)
    }

    return stack.join('')

};
