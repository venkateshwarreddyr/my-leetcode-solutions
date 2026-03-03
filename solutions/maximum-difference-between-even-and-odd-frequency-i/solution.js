// Problem: Maximum Difference Between Even and Odd Frequency I
// LeetCode: https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/
// Language: javascript
// Runtime: 4 ms
// Memory: 58.2 MB
// Submitted: 2025-10-12

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (inputString) {
    const characterToFrequencyMap = new Map();
    for (const character of inputString) {
        const currentFrequency = characterToFrequencyMap.get(character) || 0;
        characterToFrequencyMap.set(character, currentFrequency + 1);
    }
    let maximumOddFrequency = -Infinity;
    let minimumEvenFrequency = Infinity;
    for (const characterFrequency of characterToFrequencyMap.values()) {
        if (characterFrequency % 2 === 0) {
            minimumEvenFrequency = Math.min(minimumEvenFrequency, characterFrequency);
        } else {
            maximumOddFrequency = Math.max(maximumOddFrequency, characterFrequency);
        }
    }
    return maximumOddFrequency - minimumEvenFrequency;
};
