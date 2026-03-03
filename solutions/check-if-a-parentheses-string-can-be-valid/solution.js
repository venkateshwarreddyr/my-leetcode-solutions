// Problem: Check if a Parentheses String Can Be Valid
// LeetCode: https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/
// Language: javascript
// Runtime: 17 ms
// Memory: 63.4 MB
// Submitted: 2025-12-22

cl = console.log

var canBeValid = function (s, locked) {
    let n = s.length;
    if (n % 2 === 1) return false

    let o = 0,
        c = 0,
        unlocked = 0;
    for (let i = 0; i < n; i++) {
        let ch = s[i];
        if (locked[i] === '0') unlocked++;
        else if (ch === '(') o++;
        else if (ch === ')') c++;
        if (o + unlocked < c) {
            return false;
        }
    }

    {
        let o = 0,
            c = 0,
            unlocked = 0;
        for (let i = n - 1; i >= 0; i--) {
            let ch = s[i];
            if (locked[i] === '0') unlocked++;
            else if (ch === '(') o++;
            else if (ch === ')') c++;
            if (c + unlocked < o) {
                return false;
            }
        }
    }
    return true
};

var canBeValid222222 = function (s, locked) {
    let stack = []

    function aaaa(s, toChar) {
        let i = 0
        for (let c of s) {
            if (locked[i] === '0' || c === toChar) {
                stack.push(toChar)
            } else {
                if (stack.length) {
                    stack.pop()
                } else {
                    return false
                }
            }
            i++
        }
        return stack.length % 2 === 0
    }

    stack = []
    if (!aaaa(s, '(')) return false

    s = [...s].reverse().join("")
    locked = [...locked].reverse().join("")

    stack = []
    if (!aaaa(s, ')')) return false

    return true
};

