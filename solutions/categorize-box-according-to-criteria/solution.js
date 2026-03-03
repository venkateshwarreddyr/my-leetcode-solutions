// Problem: Categorize Box According to Criteria
// LeetCode: https://leetcode.com/problems/categorize-box-according-to-criteria/
// Language: javascript
// Runtime: 56 ms
// Memory: 42.2 MB
// Submitted: 2023-05-24

/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
    let isBulky = false
    let isHeavy = false

    if (mass >= 100) {
        isHeavy = true
    }

    if ([length, width, height].some(e => e >= 10000) || length * width * height >= 10000 * 10000 * 10) {
        isBulky = true
    }

    if (isBulky && isHeavy) return "Both"
    if (!isBulky && !isHeavy) return "Neither"
    if (isBulky && !isHeavy) return "Bulky"
    if (!isBulky && isHeavy) return "Heavy"

};
