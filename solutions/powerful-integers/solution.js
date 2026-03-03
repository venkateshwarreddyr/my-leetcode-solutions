// Problem: Powerful Integers
// LeetCode: https://leetcode.com/problems/powerful-integers/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.1 MB
// Submitted: 2026-01-17

function powerfulIntegers(x, y, MAX) {
    const set = new Set();
    // generate all   x^i      +   y^j ≤ MAX
    // generate all 1*x*x*x... + 1*y*y*y.... ≤ MAX
    // generate all product1   + product2.... ≤ MAX

    // x^0 = 1 // generate all powers of x
    for (let product1 = 1; product1 <= MAX; product1 *= x) {
        // y^0 = 1 // generate all powers of y
        for (let product2 = 1; product1 + product2 <= MAX; product2 *= y) {
            set.add(product1 + product2);
            if (y === 1) break; // if y is 1, infinite loop
        }
        if (x === 1) break; // if x is 1, infinite loop
    }

    return [...set];
}

