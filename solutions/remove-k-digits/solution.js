// Problem: Remove K Digits
// LeetCode: https://leetcode.com/problems/remove-k-digits/
// Language: javascript
// Runtime: 12 ms
// Memory: 63.2 MB
// Submitted: 2026-01-02

var removeKdigits = function (s, k) {
    const stack = [];
    const top = (stack) => stack.at(-1)

    // remove big elements before me
    for (let digit of s) {
        while (k > 0 && top(stack) > digit) {
            stack.pop(); // remove 
            k--;
        }
        stack.push(digit);
    }

    // remove big elements
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join('').replace(/^0+/, '') || '0';
};
