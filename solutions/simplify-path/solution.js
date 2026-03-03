// Problem: Simplify Path
// LeetCode: https://leetcode.com/problems/simplify-path/
// Language: javascript
// Runtime: 3 ms
// Memory: 55.6 MB
// Submitted: 2025-10-30

var simplifyPath = function (s) {
    let cl = console.log;

    s = s + '/';

    s = s.replaceAll(/\/\/+/g, '/')

    let ps = undefined;
    while (ps !== s) {
        ps = s;
        s = s.replaceAll('/./', '/');
    }
    // s = s.replaceAll(/\/\.\/{1,}/g, '/')

    let stack = [];
    let a = s.split('/');
    for (let x of a) {
        if (x === '..') {
            stack.pop();
        } else {
            stack.push(x);
        }
    }
    s = stack.join('/');

    if (s.at(-1) === '/') {
        s = s.slice(0, s.length - 1);
    }

    if (s[0] !== '/') {
        s = '/' + s;
    }

    return s || '/';
};

