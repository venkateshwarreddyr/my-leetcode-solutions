// Problem: Make The String Great
// LeetCode: https://leetcode.com/problems/make-the-string-great/
// Language: javascript
// Runtime: 63 ms
// Memory: 43.7 MB
// Submitted: 2023-05-23

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {

    let stack = [];
    const charCompare = (a, b) => {

        a = a.charCodeAt();
        b = b.charCodeAt();
        return Math.abs(a - b) === 32
    }

    for (let c of s) {
        let last = stack[stack.length - 1]
        if (stack.length && c!==last && c.toLowerCase() === last.toLowerCase()) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }

    return stack.join('')
};
