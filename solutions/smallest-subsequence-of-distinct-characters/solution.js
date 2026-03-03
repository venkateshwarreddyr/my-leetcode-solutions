// Problem: Smallest Subsequence of Distinct Characters
// LeetCode: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
// Language: javascript
// Runtime: 61 ms
// Memory: 45.4 MB
// Submitted: 2023-07-03

var smallestSubsequence = function (s) {
    let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;

    let freqOnRight = {};
    for (let c of s) {
        freqOnRight[c] = freqOnRight[c] || 0;
        freqOnRight[c]++;
    }

    let stackSet = new Set()
    for (let c of s) {
        freqOnRight[c]--;

        if (stackSet.has(c)) continue

        while (stack.top() > c && freqOnRight[stack.top()]) {
            stackSet.delete(stack.pop())
        }

        stack.push(c)
        stackSet.add(c)
    }

    return stack.join('')
};
