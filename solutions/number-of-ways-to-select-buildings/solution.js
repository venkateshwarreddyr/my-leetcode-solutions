// Problem: Number of Ways to Select Buildings
// LeetCode: https://leetcode.com/problems/number-of-ways-to-select-buildings/
// Language: javascript
// Runtime: 75 ms
// Memory: 64.7 MB
// Submitted: 2026-01-14

const numberOfWays = (s) => op(s, '101') + op(s, '010')

const op = (s, t) => {
    let one = 0, two = 0, three = 0;
    for (const c of s) {
        if (c == t[2]) three += two;
        if (c == t[1]) two += one;
        if (c == t[0]) one++;
    }
    return three;
};
