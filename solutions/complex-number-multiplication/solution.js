// Problem: Complex Number Multiplication
// LeetCode: https://leetcode.com/problems/complex-number-multiplication/
// Language: javascript
// Runtime: 48 ms
// Memory: 42.1 MB
// Submitted: 2023-06-30

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    let [a, b] = num1.split("+")
    let [c, d] = num2.split("+")
    b = +b.replace("i", "")
    d = +d.replace("i", "")
    a = +a
    b = +b
    return ((a * c) + (b * d * -1)) + "+" + ((a * d) + (b * c) + "i")
};
