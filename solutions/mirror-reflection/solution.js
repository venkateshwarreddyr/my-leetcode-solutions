// Problem: Mirror Reflection
// LeetCode: https://leetcode.com/problems/mirror-reflection/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.9 MB
// Submitted: 2025-11-21

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
    while (p % 2 === 0 && q % 2 === 0) {
        p /= 2;
        q /= 2;
    }
    if (p % 2 === 0 && q % 2 === 1) return 2;
    if (p % 2 === 1 && q % 2 === 0) return 0;
    return 1;
};
