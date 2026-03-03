// Problem: Strong Password Checker II
// LeetCode: https://leetcode.com/problems/strong-password-checker-ii/
// Language: javascript
// Runtime: 69 ms
// Memory: 41.7 MB
// Submitted: 2023-05-24

cl = console.log
var strongPasswordCheckerII = function (p) {
    let n = p.length;
    if (n < 8) return false;
    let hasL = false;
    let hasU = false;
    let hasD = false;
    let hasS = false;

    for (let i = 0; i < n; i++) {
        if (!hasL && p[i].charCodeAt() >= 97 && p[i].charCodeAt() <= 122) {
            hasL = true;
        } else if (!hasU && p[i].charCodeAt() >= 65 && p[i].charCodeAt() <= 90) {
            hasU = true;
        } else if (!hasD && p[i].charCodeAt() >= 48 && p[i].charCodeAt() <= 57) {
            hasD = true;
        } else if (!hasS && "!@#$%^&*()-+".includes(p[i])) {
            hasS = true;
        }
        if (p[i - 1] === p[i]) {
            return false;
        }
    }
    return hasL && hasU && hasD && hasS
};
