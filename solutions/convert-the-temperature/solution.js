// Problem: Convert the Temperature
// LeetCode: https://leetcode.com/problems/convert-the-temperature/
// Language: javascript
// Runtime: 109 ms
// Memory: 41.9 MB
// Submitted: 2022-11-13

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};
