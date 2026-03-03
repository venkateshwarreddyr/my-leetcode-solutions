// Problem: Broken Calculator
// LeetCode: https://leetcode.com/problems/broken-calculator/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.6 MB
// Submitted: 2026-01-17

var brokenCalc = function (startValue, target) {
    let count = 0;

    // go backwards - from target to startValue ( and do all operations reverse * -> /, + -> -)
    while (startValue < target) {
        count++;
        if (target % 2 === 0) {
            target /= 2; // inverse of multiply is divide
        } else {
            target += 1; // inverse of subtract is add
        }
    }

    // target <= startValue, so we go up remaining 1 by 1
    return count + (startValue - target);
};

