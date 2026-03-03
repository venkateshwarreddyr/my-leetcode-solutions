// Problem: Find Valid Pair of Adjacent Digits in String
// LeetCode: https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/
// Language: javascript
// Runtime: 3 ms
// Memory: 57.4 MB
// Submitted: 2025-10-12

/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
    const digitToCountMap = new Map();
    for (const digit of s) {
        const digitCount = digitToCountMap.get(digit) || 0;
        digitToCountMap.set(digit, digitCount + 1);
    }
    for (let i = 0; i < s.length - 1; i++) {
        const firstDigitCharacter = s[i];
        const secondDigitCharacter = s[i + 1];
        if (
            firstDigitCharacter !== secondDigitCharacter && //
            digitToCountMap.get(firstDigitCharacter) === parseInt(firstDigitCharacter) &&
            digitToCountMap.get(secondDigitCharacter) === parseInt(secondDigitCharacter)
        ) {
            return firstDigitCharacter + secondDigitCharacter;
        }
    }
    return "";
};
