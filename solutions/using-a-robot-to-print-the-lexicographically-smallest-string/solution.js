// Problem: Using a Robot to Print the Lexicographically Smallest String
// LeetCode: https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/
// Language: javascript
// Runtime: 136 ms
// Memory: 80.1 MB
// Submitted: 2025-11-13


var robotWithString = function (s) {
    let n = s.length;
    let smallest = new Array(n);
    smallest[n - 1] = s[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        smallest[i] = s[i] < smallest[i + 1] ? s[i] : smallest[i + 1];
    }

    let stack = [];
    let ans = [];

    for (let i = 0; i < n; i++) {
        stack.push(s[i]);

        while (
            stack.length &&
            (i === n - 1 || stack.at(-1) <= smallest[i + 1])
        ) {
            ans.push(stack.pop());
        }
    }

    return ans.join('');
};

