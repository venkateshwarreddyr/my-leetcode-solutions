// Problem: Fraction Addition and Subtraction
// LeetCode: https://leetcode.com/problems/fraction-addition-and-subtraction/
// Language: javascript
// Runtime: 4 ms
// Memory: 56 MB
// Submitted: 2025-11-19

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const reduceFraction = (numerator, denominator) => {
    const g = gcd(Math.abs(numerator), Math.abs(denominator));
    return [numerator / g, denominator / g];
};

const addFractions = (n1, d1, n2, d2) => {
    const numerator = n1 * d2 + n2 * d1;
    const denominator = d1 * d2;
    return reduceFraction(numerator, denominator);
};

var fractionAddition = function (expression) {
    let fractions = expression.match(/[+-]?\d+\/\d+/g);
    let num = 0,
        den = 1;
    console.log(fractions)

    for (let frac of fractions) {
        let [n, d] = frac.split('/').map(Number);
        [num, den] = addFractions(num, den, n, d)
    }

    return `${num}/${den}`;
};
